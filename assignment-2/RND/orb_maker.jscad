// makes an orb of the given size,
// with holes that have the given number of spaces in it
// saf euan bannister 2022

const jscad = require('@jscad/modeling')
const { sphere } = require('@jscad/modeling').primitives
const { translate, translateZ, scale, rotate, rotateY, mirrorZ } = require('@jscad/modeling').transforms
const { cylinder } = require('@jscad/modeling').primitives
const { degToRad } = jscad.utils
const { union, subtract, intersect } = jscad.booleans
const { hull, hullChain } = jscad.hulls

const getParameterDefinitions = () => {
  return [
    //{ name: 'doHull', type: 'radio', caption: 'Show:', values: ['shapes', 'hull', 'chain'], captions: ['Original Shapes', 'Hull', 'Hull Chain'], initial: 'shapes' },
    { name: 'size', type: 'int', initial: 250, min: 50, max: 300, step: 10, caption: 'Sphere Size' },
    { name: 'hspace', type: 'int', initial: 25, min: 5, max: 50, step: 1, caption: 'Horizontal Spacing' },
    { name: 'vspace', type: 'int', initial: 30, min: 5, max: 50, step: 1, caption: 'Vertical Spacing' },
    { name: 's', type: 'number', initial: 6, min: 1, max: 8, step: 0.5, caption: 'Hole Size' },
    { name: 'thicc', type: 'number', initial: 5, min: 2, max: 10, step: 1, caption: 'Sphere Thickness' },
  ]
}


const main = (params) => {
  const rad = params.size;
  const hspace = params.hspace;
  const vspace = params.vspace;
  const s = params.s;
  const thicc = params.thicc;
  //const space = params.spacing;

  console.log('making orb');
  const ORB = sphere({ radius: rad, segments: 50 });
  const INNERORB = sphere({ radius: rad - thicc, segments: 50});
  let HOLLOWORB = subtract(ORB,INNERORB);

  console.log('making holes');
/*
  let HOLE = cylinder({radius: s, height: 200});
  let BASEHOLES = makeSpires(hSpace, HOLE, rad);
  let HOLES = makeCylinderSpiresSIMPLE(rad, BASEHOLES, vSpace, 10);
*/

  const HOLEBASE = sphere({radius: s, segments: 8});
  let HOLES = makeHoleRows(rad, vspace, hspace, HOLEBASE);

  console.log('putting holes in orb');
  let HOLEORB = subtract(HOLLOWORB, HOLES);
  //translate([0,0,80],HOLE);
  /*
  const RadAt10 = capRad(rad, 10);
  const HOLES2 = translateZ(80, makeSpires(5, HOLE, RadAt10));
  const negHOLES2 = mirrorZ(HOLES2);
  */
  return [HOLEORB];
}


const makeHoleRows = (radius, vspace, hspace, object) => {
console.log("generating rows...");
 const ROWS = [];
 // top half
  for (let i = radius; i > 0; i -= vspace) {
    console.log("generating row at", i);
    const ROW = makeHoles(radius, i, hspace, object);
    ROWS.push(ROW);
  }
  // bottom half
  const BH = mirrorZ(ROWS);
  ROWS.push(BH);
  // centre
  const ROW = makeHoles(radius, 0, hspace, object);
  ROWS.push(ROW);
  return ROWS;
}

const makeHoles = (radius, height, step, object) => {
  // generates a ring of spheres at a height
  const a = capRad(radius, height);
  const hOffset = radius - height;
  console.log(a);

  // initialisation
  const OFFSET = translate([0,a,hOffset],object);
  const ORIGIN = object;
  let HULLHOLE = hullChain(ORIGIN,OFFSET);
  let HULLHOLES = [];

  let deg = (step * 360) / (2 * Math.PI * a);
  console.log("degrees between spires: ", deg);
  let num = 360 / deg;
  console.log("number of holes to generate: ", num);
    for (let i = 0; i < num; i++)
    {
      //console.log(i);
      const next = rotate([0,0,degToRad(deg * i)], HULLHOLE);
      HULLHOLES.push(next);
    }
    return HULLHOLES;
}

/*
const makeCylinderSpires = (base, c, horizontalSpacing, verticalSpacing, sphereRadius, topPadding, skip) => {
  // get the step between spaces
  const step = horizontalSpacing;
  // skip or start at 0?
  let i = 0 //(skip) ? (step + topPadding) : topPadding;
  let CYLINDERS = base;
  for (i; i <= (sphereRadius); i += step) {
    const r = capRad(sphereRadius, (sphereRadius - i));
    const NEWCYLINDERS = translateZ(i, makeSpires(horizontalSpacing, c, r));
    CYLINDERS = union(CYLINDERS,NEWCYLINDERS);
  }

  return CYLINDERS;
}*/

const makeCylinderSpiresSIMPLE = (r, base, verticalSpacing, padding) => {
  let CYLINDERS = base;
  for (let i = verticalSpacing; i < 180; i += verticalSpacing )/* (let i = (r - padding - verticalSpacing); i >= (-r); i -= verticalSpacing) */ {
    const NEW = rotate([0,degToRad(i),0], base);
    //const NEWTWO = rotate([degToRad(90),0,0],NEW)
    //const MERGEDNEW = union(NEW,NEWTWO);
    CYLINDERS = [CYLINDERS, NEW];
    console.log(i);
  }
  return rotate([degToRad(90)],CYLINDERS);
}

const capRad = (rad, height) => {
  // return the radius of the spherical cap
  // 	 a=√h(2R-h)
  const a = Math.sqrt(height * (2 * rad - height));
  console.log(a);
  return a;
}

const makeSpires = (step, base, r) => {
  let spires = base;
  // Central Angle = Arc length(AB) / Radius(OA) = (s × 360°) / 2πr,
  // where 's' is arc length, and 'r' is radius of the circle.
  let deg = (step * 360) / (2 * Math.PI * r);
  let num = Math.round(360 / deg);

  for (var i = 3; i < num; i++)
  {
    const nextSpire = rotateY(degToRad(step * i), base);
    spires = union(nextSpire,spires);
  }
  return rotate([degToRad(90), 0, 0], spires)
}

module.exports = { main, getParameterDefinitions }
