/* Sources:
    data from 2014 - JUL 2019:
        https://www.data.act.gov.au/Transport/Passenger-Boardings-By-Week-By-Ticket-Type/qwg2-guya 
    Note: this data includes paper tickets.
    myway % post JUL 2019: 
        https://www.data.act.gov.au/Transport/Daily-Public-Transport-Passenger-Boardings-By-Tick/aheu-gcpg
    trip numbers post JUL 2019 including number of light rail boardings: 
        https://www.data.act.gov.au/Transport/Daily-Public-Transport-Passenger-Boardings-by-Serv/4f52-nub8
    NOTE: this data does not include paper tickets from ticket dispensers except for the ones at lightrail stations

    Compiled using Excel
*/

var boarding_data = [
 {
   "Year": 2014,
   "month": 7,
   "myway": 0.834,
   "sum": 1519748,
   "lightrail": null
 },
 {
   "Year": 2014,
   "month": 8,
   "myway": 0.86,
   "sum": 1498524,
   "lightrail": null
 },
 {
   "Year": 2014,
   "month": 9,
   "myway": 0.844,
   "sum": 1743521,
   "lightrail": null
 },
 {
   "Year": 2014,
   "month": 10,
   "myway": 0.85,
   "sum": 1416767,
   "lightrail": null
 },
 {
   "Year": 2014,
   "month": 11,
   "myway": 0.86,
   "sum": 1499007,
   "lightrail": null
 },
 {
   "Year": 2014,
   "month": 12,
   "myway": 0.804,
   "sum": 1226066,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 1,
   "myway": 0.82,
   "sum": 961573,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 2,
   "myway": 0.8575,
   "sum": 1591756,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 3,
   "myway": 0.866,
   "sum": 1890494,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 4,
   "myway": 0.83,
   "sum": 1230781,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 5,
   "myway": 0.87,
   "sum": 1547526,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 6,
   "myway": 0.87,
   "sum": 1513747,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 7,
   "myway": 0.852,
   "sum": 1472974,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 8,
   "myway": 0.878,
   "sum": 1881018,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 9,
   "myway": 0.8525,
   "sum": 1386623,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 10,
   "myway": 0.86,
   "sum": 1403471,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 11,
   "myway": 0.868,
   "sum": 1826882,
   "lightrail": null
 },
 {
   "Year": 2015,
   "month": 12,
   "myway": 0.81,
   "sum": 900669,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 1,
   "myway": 0.8275,
   "sum": 926734,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 2,
   "myway": 0.866,
   "sum": 2032519,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 3,
   "myway": 0.8725,
   "sum": 1462821,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 4,
   "myway": 0.86,
   "sum": 1334098,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 5,
   "myway": 0.884,
   "sum": 1949596,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 6,
   "myway": 0.8775,
   "sum": 1345807,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 7,
   "myway": 0.865,
   "sum": 1310429,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 8,
   "myway": 0.884,
   "sum": 1933256,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 9,
   "myway": 0.8675,
   "sum": 1374245,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 10,
   "myway": 0.87,
   "sum": 1817865,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 11,
   "myway": 0.87,
   "sum": 1499700,
   "lightrail": null
 },
 {
   "Year": 2016,
   "month": 12,
   "myway": 0.8225,
   "sum": 983331,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 1,
   "myway": 0.84,
   "sum": 1275232,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 2,
   "myway": 0.87,
   "sum": 1696224,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 3,
   "myway": 0.885,
   "sum": 1664124,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 4,
   "myway": 0.87,
   "sum": 1231524,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 5,
   "myway": 0.894,
   "sum": 2027087,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 6,
   "myway": 0.89,
   "sum": 1419084,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 7,
   "myway": 0.884,
   "sum": 1729825,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 8,
   "myway": 0.9,
   "sum": 1595754,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 9,
   "myway": 0.89,
   "sum": 1440469,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 10,
   "myway": 0.87,
   "sum": 1895167,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 11,
   "myway": 0.855,
   "sum": 1525948,
   "lightrail": null
 },
 {
   "Year": 2017,
   "month": 12,
   "myway": 0.845,
   "sum": 1051264,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 1,
   "myway": 0.862,
   "sum": 1257234,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 2,
   "myway": 0.895,
   "sum": 1740036,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 3,
   "myway": 0.9,
   "sum": 1661620,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 4,
   "myway": 0.892,
   "sum": 1854728,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 5,
   "myway": 0.905,
   "sum": 1652005,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 6,
   "myway": 0.9,
   "sum": 1522159,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 7,
   "myway": 0.898,
   "sum": 1809307,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 8,
   "myway": 0.9175,
   "sum": 1691866,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 9,
   "myway": 0.91,
   "sum": 1663445,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 10,
   "myway": 0.904,
   "sum": 1911975,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 11,
   "myway": 0.9075,
   "sum": 1621818,
   "lightrail": null
 },
 {
   "Year": 2018,
   "month": 12,
   "myway": 0.87,
   "sum": 1316235,
   "lightrail": null
 },
 {
   "Year": 2019,
   "month": 1,
   "myway": 0.8875,
   "sum": 1056020,
   "lightrail": null
 },
 {
   "Year": 2019,
   "month": 2,
   "myway": 0.9025,
   "sum": 1720135,
   "lightrail": null
 },
 {
   "Year": 2019,
   "month": 3,
   "myway": 0.915,
   "sum": 1747414,
   "lightrail": null
 },
 {
   "Year": 2019,
   "month": 4,
   "myway": 0.902,
   "sum": 1919524,
   "lightrail": null
 },
 {
   "Year": 2019,
   "month": 5,
   "myway": 0.955,
   "sum": 1970490,
   "lightrail": null
 },
 {
   "Year": 2019,
   "month": 6,
   "myway": 0.935,
   "sum": 1727260,
   "lightrail": null
 },
 {
   "Year": 2019,
   "month": 7,
   "myway": 0.918055519,
   "sum": 1808105,
   "lightrail": 381025
 },
 {
   "Year": 2019,
   "month": 8,
   "myway": 0.925382753,
   "sum": 2053210,
   "lightrail": 408491
 },
 {
   "Year": 2019,
   "month": 9,
   "myway": 0.919701321,
   "sum": 1940487,
   "lightrail": 394640
 },
 {
   "Year": 2019,
   "month": 10,
   "myway": 0.914920346,
   "sum": 1930827,
   "lightrail": 411496
 },
 {
   "Year": 2019,
   "month": 11,
   "myway": 0.913955352,
   "sum": 1931371,
   "lightrail": 391051
 },
 {
   "Year": 2019,
   "month": 12,
   "myway": 0.871732061,
   "sum": 1431941,
   "lightrail": 316535
 },
 {
   "Year": 2020,
   "month": 1,
   "myway": 0.892514961,
   "sum": 1269327,
   "lightrail": 301262
 },
 {
   "Year": 2020,
   "month": 2,
   "myway": 0.914252009,
   "sum": 1987838,
   "lightrail": 398082
 },
 {
   "Year": 2020,
   "month": 3,
   "myway": 0.920541213,
   "sum": 1455391,
   "lightrail": 276068
 },
 {
   "Year": 2020,
   "month": 4,
   "myway": 0.928793399,
   "sum": 298176,
   "lightrail": 57312
 },
 {
   "Year": 2020,
   "month": 5,
   "myway": 0.940038819,
   "sum": 561661,
   "lightrail": 102908
 },
 {
   "Year": 2020,
   "month": 6,
   "myway": 0.943132336,
   "sum": 930394,
   "lightrail": 170338
 },
 {
   "Year": 2020,
   "month": 7,
   "myway": 0.94547212,
   "sum": 989744,
   "lightrail": 198496
 },
 {
   "Year": 2020,
   "month": 8,
   "myway": 0.945238012,
   "sum": 1109161,
   "lightrail": 199026
 },
 {
   "Year": 2020,
   "month": 9,
   "myway": 0.941379962,
   "sum": 1175267,
   "lightrail": 215598
 },
 {
   "Year": 2020,
   "month": 10,
   "myway": 0.9355247,
   "sum": 1169819,
   "lightrail": 220465
 },
 {
   "Year": 2020,
   "month": 11,
   "myway": 0.935138298,
   "sum": 1309318,
   "lightrail": 248636
 },
 {
   "Year": 2020,
   "month": 12,
   "myway": 0.912339055,
   "sum": 1109886,
   "lightrail": 245301
 },
 {
   "Year": 2021,
   "month": 1,
   "myway": 0.922412675,
   "sum": 859088,
   "lightrail": 184439
 },
 {
   "Year": 2021,
   "month": 2,
   "myway": 0.931048399,
   "sum": 1460376,
   "lightrail": 274919
 },
 {
   "Year": 2021,
   "month": 3,
   "myway": 0.927721957,
   "sum": 1636811,
   "lightrail": 310514
 },
 {
   "Year": 2021,
   "month": 4,
   "myway": 0.918171876,
   "sum": 1311129,
   "lightrail": 275763
 },
 {
   "Year": 2021,
   "month": 5,
   "myway": 0.92394974,
   "sum": 1538940,
   "lightrail": 300653
 },
 {
   "Year": 2021,
   "month": 6,
   "myway": 0.92259388,
   "sum": 1426126,
   "lightrail": 285474
 },
 {
   "Year": 2021,
   "month": 7,
   "myway": 0.923189601,
   "sum": 1394275,
   "lightrail": 280588
 },
 {
   "Year": 2021,
   "month": 8,
   "myway": 0.89676389,
   "sum": 748947,
   "lightrail": 138105
 },
 {
   "Year": 2021,
   "month": 9,
   "myway": 0.877326185,
   "sum": 233635,
   "lightrail": 37039
 },
 {
   "Year": 2021,
   "month": 10,
   "myway": 0.892325294,
   "sum": 444800,
   "lightrail": 80876
 },
 {
   "Year": 2021,
   "month": 11,
   "myway": 0.906420449,
   "sum": 1079207,
   "lightrail": 195097
 },
 {
   "Year": 2021,
   "month": 12,
   "myway": 0.880632648,
   "sum": 949138,
   "lightrail": 198527
 },
 {
   "Year": 2022,
   "month": 1,
   "myway": 0.888300932,
   "sum": 648550,
   "lightrail": 140792
 },
 {
   "Year": 2022,
   "month": 2,
   "myway": 0.898128969,
   "sum": 1179136,
   "lightrail": 210502
 },
 {
   "Year": 2022,
   "month": 3,
   "myway": 0.901169057,
   "sum": 1454375,
   "lightrail": 272994
 },
 {
   "Year": 2022,
   "month": 4,
   "myway": 0.891018094,
   "sum": 1133913,
   "lightrail": 242188
 },
 {
   "Year": 2022,
   "month": 5,
   "myway": 0.900508416,
   "sum": 1407747,
   "lightrail": 280114
 },
 {
   "Year": 2022,
   "month": 6,
   "myway": 0.895850401,
   "sum": 1319912,
   "lightrail": 267941
 }
]