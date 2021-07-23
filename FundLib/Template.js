/** * 测试数据 * @type {arry} */
/*2021-07-23 16:46:38*/
var ishb = false;
/*基金或股票信息*/
var fS_name = "中欧时代先锋股票A";
var fS_code = "001938";
/*原费率*/
var fund_sourceRate = "1.50";
/*现费率*/
var fund_Rate = "0.15";
/*最小申购金额*/
var fund_minsg = "10";
/*基金持仓股票代码*/
var stockCodes = ["0024152", "0024602", "3007502", "3004542", "6016581", "0000092", "6037991", "6006601", "6004061", "0024752"];
/*基金持仓债券代码*/
var zqCodes = "0196451,0101071,0196491";
/*基金持仓股票代码(新市场号)*/
var stockCodesNew = ["0.002415", "0.002460", "0.300750", "0.300454", "1.601658", "0.000009", "1.603799", "1.600660", "1.600406", "0.002475"];
/*基金持仓债券代码（新市场号）*/
var zqCodesNew = "1.019645,1.010107,1.019649";
/*收益率*/
/*近一年收益率*/
var syl_1n = "46.28";
/*近6月收益率*/
var syl_6y = "5.03";
/*近三月收益率*/
var syl_3y = "18.38";
/*近一月收益率*/
var syl_1y = "13.73";
/*股票仓位测算图*/
var Data_fundSharesPositions = [[1624377600000, 72.8900], [1624464000000, 72.8900], [1624550400000, 72.8900], [1624809600000, 72.8900], [1624896000000, 72.8900], [1624982400000, 72.8900], [1625068800000, 72.8900], [1625155200000, 72.8900], [1625414400000, 72.8900], [1625500800000, 72.8900], [1625587200000, 72.8900], [1625673600000, 72.8900], [1625760000000, 72.8900], [1626019200000, 80.0], [1626105600000, 95.00], [1626192000000, 95.00], [1626278400000, 95.00], [1626364800000, 95.00], [1626624000000, 95.00], [1626710400000, 95.00], [1626796800000, 95.00], [1626883200000, 95.00]];
/*单位净值走势 equityReturn-净值回报 unitMoney-每份派送金*/
var Data_netWorthTrend = [{
    "x": 1446480000000,
    "y": 1.0,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1446739200000,
    "y": 1.019,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1447344000000,
    "y": 1.063,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1447948800000,
    "y": 1.101,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1448553600000,
    "y": 1.087,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1448985600000,
    "y": 1.088,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1449072000000,
    "y": 1.105,
    "equityReturn": 1.5625,
    "unitMoney": ""
},
{
    "x": 1449158400000,
    "y": 1.104,
    "equityReturn": -0.0905,
    "unitMoney": ""
},
{
    "x": 1449417600000,
    "y": 1.11,
    "equityReturn": 0.5435,
    "unitMoney": ""
},
{
    "x": 1449504000000,
    "y": 1.103,
    "equityReturn": -0.6306,
    "unitMoney": ""
},
{
    "x": 1449590400000,
    "y": 1.112,
    "equityReturn": 0.816,
    "unitMoney": ""
},
{
    "x": 1449676800000,
    "y": 1.108,
    "equityReturn": -0.3597,
    "unitMoney": ""
},
{
    "x": 1449763200000,
    "y": 1.105,
    "equityReturn": -0.2708,
    "unitMoney": ""
},
{
    "x": 1450022400000,
    "y": 1.103,
    "equityReturn": -0.181,
    "unitMoney": ""
},
{
    "x": 1450108800000,
    "y": 1.108,
    "equityReturn": 0.4533,
    "unitMoney": ""
},
{
    "x": 1450195200000,
    "y": 1.108,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1450281600000,
    "y": 1.115,
    "equityReturn": 0.6318,
    "unitMoney": ""
},
{
    "x": 1450368000000,
    "y": 1.121,
    "equityReturn": 0.5381,
    "unitMoney": ""
},
{
    "x": 1450627200000,
    "y": 1.131,
    "equityReturn": 0.8921,
    "unitMoney": ""
},
{
    "x": 1450713600000,
    "y": 1.057,
    "equityReturn": 0.5305,
    "unitMoney": "分红：每份派现金0.08元"
},
{
    "x": 1450800000000,
    "y": 1.053,
    "equityReturn": -0.3784,
    "unitMoney": ""
},
{
    "x": 1450886400000,
    "y": 1.051,
    "equityReturn": -0.1899,
    "unitMoney": ""
},
{
    "x": 1450972800000,
    "y": 1.058,
    "equityReturn": 0.666,
    "unitMoney": ""
},
{
    "x": 1451232000000,
    "y": 1.04,
    "equityReturn": -1.7013,
    "unitMoney": ""
},
{
    "x": 1451318400000,
    "y": 1.046,
    "equityReturn": 0.5769,
    "unitMoney": ""
},
{
    "x": 1451404800000,
    "y": 1.052,
    "equityReturn": 0.5736,
    "unitMoney": ""
},
{
    "x": 1451491200000,
    "y": 1.053,
    "equityReturn": 0.0951,
    "unitMoney": ""
},
{
    "x": 1451836800000,
    "y": 1.001,
    "equityReturn": -4.9383,
    "unitMoney": ""
},
{
    "x": 1451923200000,
    "y": 0.997,
    "equityReturn": -0.3996,
    "unitMoney": ""
},
{
    "x": 1452009600000,
    "y": 1.021,
    "equityReturn": 2.4072,
    "unitMoney": ""
},
{
    "x": 1452096000000,
    "y": 0.943,
    "equityReturn": -7.6396,
    "unitMoney": ""
},
{
    "x": 1452182400000,
    "y": 0.977,
    "equityReturn": 3.6055,
    "unitMoney": ""
},
{
    "x": 1452441600000,
    "y": 0.926,
    "equityReturn": -5.2201,
    "unitMoney": ""
},
{
    "x": 1452528000000,
    "y": 0.914,
    "equityReturn": -1.2959,
    "unitMoney": ""
},
{
    "x": 1452614400000,
    "y": 0.895,
    "equityReturn": -2.0788,
    "unitMoney": ""
},
{
    "x": 1452700800000,
    "y": 0.924,
    "equityReturn": 3.2402,
    "unitMoney": ""
},
{
    "x": 1452787200000,
    "y": 0.892,
    "equityReturn": -3.4632,
    "unitMoney": ""
},
{
    "x": 1453046400000,
    "y": 0.909,
    "equityReturn": 1.9058,
    "unitMoney": ""
},
{
    "x": 1453132800000,
    "y": 0.938,
    "equityReturn": 3.1903,
    "unitMoney": ""
},
{
    "x": 1453219200000,
    "y": 0.946,
    "equityReturn": 0.8529,
    "unitMoney": ""
},
{
    "x": 1453305600000,
    "y": 0.917,
    "equityReturn": -3.0655,
    "unitMoney": ""
},
{
    "x": 1453392000000,
    "y": 0.93,
    "equityReturn": 1.4177,
    "unitMoney": ""
},
{
    "x": 1453651200000,
    "y": 0.934,
    "equityReturn": 0.4301,
    "unitMoney": ""
},
{
    "x": 1453737600000,
    "y": 0.888,
    "equityReturn": -4.9251,
    "unitMoney": ""
},
{
    "x": 1453824000000,
    "y": 0.89,
    "equityReturn": 0.2252,
    "unitMoney": ""
},
{
    "x": 1453910400000,
    "y": 0.864,
    "equityReturn": -2.9213,
    "unitMoney": ""
},
{
    "x": 1453996800000,
    "y": 0.879,
    "equityReturn": 1.7361,
    "unitMoney": ""
},
{
    "x": 1454256000000,
    "y": 0.875,
    "equityReturn": -0.4551,
    "unitMoney": ""
},
{
    "x": 1454342400000,
    "y": 0.906,
    "equityReturn": 3.5429,
    "unitMoney": ""
},
{
    "x": 1454428800000,
    "y": 0.918,
    "equityReturn": 1.3245,
    "unitMoney": ""
},
{
    "x": 1454515200000,
    "y": 0.936,
    "equityReturn": 1.9608,
    "unitMoney": ""
},
{
    "x": 1454601600000,
    "y": 0.919,
    "equityReturn": -1.8162,
    "unitMoney": ""
},
{
    "x": 1455465600000,
    "y": 0.926,
    "equityReturn": 0.7617,
    "unitMoney": ""
},
{
    "x": 1455552000000,
    "y": 0.96,
    "equityReturn": 3.6717,
    "unitMoney": ""
},
{
    "x": 1455638400000,
    "y": 0.97,
    "equityReturn": 1.0417,
    "unitMoney": ""
},
{
    "x": 1455724800000,
    "y": 0.964,
    "equityReturn": -0.6186,
    "unitMoney": ""
},
{
    "x": 1455811200000,
    "y": 0.969,
    "equityReturn": 0.5187,
    "unitMoney": ""
},
{
    "x": 1456070400000,
    "y": 0.989,
    "equityReturn": 2.064,
    "unitMoney": ""
},
{
    "x": 1456156800000,
    "y": 0.984,
    "equityReturn": -0.5056,
    "unitMoney": ""
},
{
    "x": 1456243200000,
    "y": 0.977,
    "equityReturn": -0.7114,
    "unitMoney": ""
},
{
    "x": 1456329600000,
    "y": 0.912,
    "equityReturn": -6.653,
    "unitMoney": ""
},
{
    "x": 1456416000000,
    "y": 0.911,
    "equityReturn": -0.1096,
    "unitMoney": ""
},
{
    "x": 1456675200000,
    "y": 0.874,
    "equityReturn": -4.0615,
    "unitMoney": ""
},
{
    "x": 1456761600000,
    "y": 0.888,
    "equityReturn": 1.6018,
    "unitMoney": ""
},
{
    "x": 1456848000000,
    "y": 0.919,
    "equityReturn": 3.491,
    "unitMoney": ""
},
{
    "x": 1456934400000,
    "y": 0.912,
    "equityReturn": -0.7617,
    "unitMoney": ""
},
{
    "x": 1457020800000,
    "y": 0.892,
    "equityReturn": -2.193,
    "unitMoney": ""
},
{
    "x": 1457280000000,
    "y": 0.898,
    "equityReturn": 0.6726,
    "unitMoney": ""
},
{
    "x": 1457366400000,
    "y": 0.903,
    "equityReturn": 0.5568,
    "unitMoney": ""
},
{
    "x": 1457452800000,
    "y": 0.887,
    "equityReturn": -1.7719,
    "unitMoney": ""
},
{
    "x": 1457539200000,
    "y": 0.882,
    "equityReturn": -0.5637,
    "unitMoney": ""
},
{
    "x": 1457625600000,
    "y": 0.881,
    "equityReturn": -0.1134,
    "unitMoney": ""
},
{
    "x": 1457884800000,
    "y": 0.893,
    "equityReturn": 1.3621,
    "unitMoney": ""
},
{
    "x": 1457971200000,
    "y": 0.895,
    "equityReturn": 0.224,
    "unitMoney": ""
},
{
    "x": 1458057600000,
    "y": 0.892,
    "equityReturn": -0.3352,
    "unitMoney": ""
},
{
    "x": 1458144000000,
    "y": 0.926,
    "equityReturn": 3.8117,
    "unitMoney": ""
},
{
    "x": 1458230400000,
    "y": 0.961,
    "equityReturn": 3.7797,
    "unitMoney": ""
},
{
    "x": 1458489600000,
    "y": 0.978,
    "equityReturn": 1.769,
    "unitMoney": ""
},
{
    "x": 1458576000000,
    "y": 0.975,
    "equityReturn": -0.3067,
    "unitMoney": ""
},
{
    "x": 1458662400000,
    "y": 0.987,
    "equityReturn": 1.2308,
    "unitMoney": ""
},
{
    "x": 1458748800000,
    "y": 0.975,
    "equityReturn": -1.2158,
    "unitMoney": ""
},
{
    "x": 1458835200000,
    "y": 0.977,
    "equityReturn": 0.2051,
    "unitMoney": ""
},
{
    "x": 1459094400000,
    "y": 0.98,
    "equityReturn": 0.3071,
    "unitMoney": ""
},
{
    "x": 1459180800000,
    "y": 0.963,
    "equityReturn": -1.7347,
    "unitMoney": ""
},
{
    "x": 1459267200000,
    "y": 0.997,
    "equityReturn": 3.5306,
    "unitMoney": ""
},
{
    "x": 1459353600000,
    "y": 1.003,
    "equityReturn": 0.6018,
    "unitMoney": ""
},
{
    "x": 1459440000000,
    "y": 1.002,
    "equityReturn": -0.0997,
    "unitMoney": ""
},
{
    "x": 1459785600000,
    "y": 1.033,
    "equityReturn": 3.0938,
    "unitMoney": ""
},
{
    "x": 1459872000000,
    "y": 1.039,
    "equityReturn": 0.5808,
    "unitMoney": ""
},
{
    "x": 1459958400000,
    "y": 1.026,
    "equityReturn": -1.2512,
    "unitMoney": ""
},
{
    "x": 1460044800000,
    "y": 1.026,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1460304000000,
    "y": 1.051,
    "equityReturn": 2.4366,
    "unitMoney": ""
},
{
    "x": 1460390400000,
    "y": 1.047,
    "equityReturn": -0.3806,
    "unitMoney": ""
},
{
    "x": 1460476800000,
    "y": 1.06,
    "equityReturn": 1.2416,
    "unitMoney": ""
},
{
    "x": 1460563200000,
    "y": 1.067,
    "equityReturn": 0.6604,
    "unitMoney": ""
},
{
    "x": 1460649600000,
    "y": 1.065,
    "equityReturn": -0.1874,
    "unitMoney": ""
},
{
    "x": 1460908800000,
    "y": 1.054,
    "equityReturn": -1.0329,
    "unitMoney": ""
},
{
    "x": 1460995200000,
    "y": 1.06,
    "equityReturn": 0.5693,
    "unitMoney": ""
},
{
    "x": 1461081600000,
    "y": 1.026,
    "equityReturn": -3.2075,
    "unitMoney": ""
},
{
    "x": 1461168000000,
    "y": 1.016,
    "equityReturn": -0.9747,
    "unitMoney": ""
},
{
    "x": 1461254400000,
    "y": 1.016,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1461513600000,
    "y": 1.021,
    "equityReturn": 0.4921,
    "unitMoney": ""
},
{
    "x": 1461600000000,
    "y": 1.03,
    "equityReturn": 0.8815,
    "unitMoney": ""
},
{
    "x": 1461686400000,
    "y": 1.02,
    "equityReturn": -0.9709,
    "unitMoney": ""
},
{
    "x": 1461772800000,
    "y": 1.01,
    "equityReturn": -0.9804,
    "unitMoney": ""
},
{
    "x": 1461859200000,
    "y": 1.014,
    "equityReturn": 0.396,
    "unitMoney": ""
},
{
    "x": 1462204800000,
    "y": 1.044,
    "equityReturn": 2.9586,
    "unitMoney": ""
},
{
    "x": 1462291200000,
    "y": 1.05,
    "equityReturn": 0.5747,
    "unitMoney": ""
},
{
    "x": 1462377600000,
    "y": 1.056,
    "equityReturn": 0.5714,
    "unitMoney": ""
},
{
    "x": 1462464000000,
    "y": 1.024,
    "equityReturn": -3.0303,
    "unitMoney": ""
},
{
    "x": 1462723200000,
    "y": 0.99,
    "equityReturn": -3.3203,
    "unitMoney": ""
},
{
    "x": 1462809600000,
    "y": 0.979,
    "equityReturn": -1.1111,
    "unitMoney": ""
},
{
    "x": 1462896000000,
    "y": 0.985,
    "equityReturn": 0.6129,
    "unitMoney": ""
},
{
    "x": 1462982400000,
    "y": 0.996,
    "equityReturn": 1.1168,
    "unitMoney": ""
},
{
    "x": 1463068800000,
    "y": 0.996,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1463328000000,
    "y": 1.018,
    "equityReturn": 2.2088,
    "unitMoney": ""
},
{
    "x": 1463414400000,
    "y": 1.014,
    "equityReturn": -0.3929,
    "unitMoney": ""
},
{
    "x": 1463500800000,
    "y": 0.991,
    "equityReturn": -2.2682,
    "unitMoney": ""
},
{
    "x": 1463587200000,
    "y": 0.999,
    "equityReturn": 0.8073,
    "unitMoney": ""
},
{
    "x": 1463673600000,
    "y": 1.012,
    "equityReturn": 1.3013,
    "unitMoney": ""
},
{
    "x": 1463932800000,
    "y": 1.024,
    "equityReturn": 1.1858,
    "unitMoney": ""
},
{
    "x": 1464019200000,
    "y": 1.009,
    "equityReturn": -1.4648,
    "unitMoney": ""
},
{
    "x": 1464105600000,
    "y": 1.002,
    "equityReturn": -0.6938,
    "unitMoney": ""
},
{
    "x": 1464192000000,
    "y": 1.005,
    "equityReturn": 0.2994,
    "unitMoney": ""
},
{
    "x": 1464278400000,
    "y": 1.006,
    "equityReturn": 0.0995,
    "unitMoney": ""
},
{
    "x": 1464537600000,
    "y": 1.011,
    "equityReturn": 0.497,
    "unitMoney": ""
},
{
    "x": 1464624000000,
    "y": 1.047,
    "equityReturn": 3.5608,
    "unitMoney": ""
},
{
    "x": 1464710400000,
    "y": 1.059,
    "equityReturn": 1.1461,
    "unitMoney": ""
},
{
    "x": 1464796800000,
    "y": 1.075,
    "equityReturn": 1.5109,
    "unitMoney": ""
},
{
    "x": 1464883200000,
    "y": 1.08,
    "equityReturn": 0.4651,
    "unitMoney": ""
},
{
    "x": 1465142400000,
    "y": 1.085,
    "equityReturn": 0.463,
    "unitMoney": ""
},
{
    "x": 1465228800000,
    "y": 1.091,
    "equityReturn": 0.553,
    "unitMoney": ""
},
{
    "x": 1465315200000,
    "y": 1.09,
    "equityReturn": -0.0917,
    "unitMoney": ""
},
{
    "x": 1465747200000,
    "y": 1.052,
    "equityReturn": -3.4862,
    "unitMoney": ""
},
{
    "x": 1465833600000,
    "y": 1.062,
    "equityReturn": 0.9506,
    "unitMoney": ""
},
{
    "x": 1465920000000,
    "y": 1.108,
    "equityReturn": 4.3315,
    "unitMoney": ""
},
{
    "x": 1466006400000,
    "y": 1.128,
    "equityReturn": 1.8051,
    "unitMoney": ""
},
{
    "x": 1466092800000,
    "y": 1.124,
    "equityReturn": -0.3546,
    "unitMoney": ""
},
{
    "x": 1466352000000,
    "y": 1.13,
    "equityReturn": 0.5338,
    "unitMoney": ""
},
{
    "x": 1466438400000,
    "y": 1.065,
    "equityReturn": -1.3274,
    "unitMoney": "分红：每份派现金0.05元"
},
{
    "x": 1466524800000,
    "y": 1.077,
    "equityReturn": 1.1268,
    "unitMoney": ""
},
{
    "x": 1466611200000,
    "y": 1.066,
    "equityReturn": -1.0214,
    "unitMoney": ""
},
{
    "x": 1466697600000,
    "y": 1.059,
    "equityReturn": -0.6567,
    "unitMoney": ""
},
{
    "x": 1466956800000,
    "y": 1.089,
    "equityReturn": 2.8329,
    "unitMoney": ""
},
{
    "x": 1467043200000,
    "y": 1.101,
    "equityReturn": 1.1019,
    "unitMoney": ""
},
{
    "x": 1467129600000,
    "y": 1.109,
    "equityReturn": 0.7266,
    "unitMoney": ""
},
{
    "x": 1467216000000,
    "y": 1.105,
    "equityReturn": -0.3607,
    "unitMoney": ""
},
{
    "x": 1467302400000,
    "y": 1.102,
    "equityReturn": -0.2715,
    "unitMoney": ""
},
{
    "x": 1467561600000,
    "y": 1.122,
    "equityReturn": 1.8149,
    "unitMoney": ""
},
{
    "x": 1467648000000,
    "y": 1.123,
    "equityReturn": 0.0891,
    "unitMoney": ""
},
{
    "x": 1467734400000,
    "y": 1.126,
    "equityReturn": 0.2671,
    "unitMoney": ""
},
{
    "x": 1467820800000,
    "y": 1.124,
    "equityReturn": -0.1776,
    "unitMoney": ""
},
{
    "x": 1467907200000,
    "y": 1.115,
    "equityReturn": -0.8007,
    "unitMoney": ""
},
{
    "x": 1468166400000,
    "y": 1.12,
    "equityReturn": 0.4484,
    "unitMoney": ""
},
{
    "x": 1468252800000,
    "y": 1.123,
    "equityReturn": 0.2679,
    "unitMoney": ""
},
{
    "x": 1468339200000,
    "y": 1.125,
    "equityReturn": 0.1781,
    "unitMoney": ""
},
{
    "x": 1468425600000,
    "y": 1.123,
    "equityReturn": -0.1778,
    "unitMoney": ""
},
{
    "x": 1468512000000,
    "y": 1.119,
    "equityReturn": -0.3562,
    "unitMoney": ""
},
{
    "x": 1468771200000,
    "y": 1.119,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1468857600000,
    "y": 1.125,
    "equityReturn": 0.5362,
    "unitMoney": ""
},
{
    "x": 1468944000000,
    "y": 1.127,
    "equityReturn": 0.1778,
    "unitMoney": ""
},
{
    "x": 1469030400000,
    "y": 1.13,
    "equityReturn": 0.2662,
    "unitMoney": ""
},
{
    "x": 1469116800000,
    "y": 1.129,
    "equityReturn": -0.0885,
    "unitMoney": ""
},
{
    "x": 1469376000000,
    "y": 1.124,
    "equityReturn": -0.4429,
    "unitMoney": ""
},
{
    "x": 1469462400000,
    "y": 1.146,
    "equityReturn": 1.9573,
    "unitMoney": ""
},
{
    "x": 1469548800000,
    "y": 1.105,
    "equityReturn": -3.5777,
    "unitMoney": ""
},
{
    "x": 1469635200000,
    "y": 1.103,
    "equityReturn": -0.181,
    "unitMoney": ""
},
{
    "x": 1469721600000,
    "y": 1.095,
    "equityReturn": -0.7253,
    "unitMoney": ""
},
{
    "x": 1469980800000,
    "y": 1.079,
    "equityReturn": -1.4612,
    "unitMoney": ""
},
{
    "x": 1470067200000,
    "y": 1.09,
    "equityReturn": 1.0195,
    "unitMoney": ""
},
{
    "x": 1470153600000,
    "y": 1.091,
    "equityReturn": 0.0917,
    "unitMoney": ""
},
{
    "x": 1470240000000,
    "y": 1.099,
    "equityReturn": 0.7333,
    "unitMoney": ""
},
{
    "x": 1470326400000,
    "y": 1.093,
    "equityReturn": -0.546,
    "unitMoney": ""
},
{
    "x": 1470585600000,
    "y": 1.105,
    "equityReturn": 1.0979,
    "unitMoney": ""
},
{
    "x": 1470672000000,
    "y": 1.11,
    "equityReturn": 0.4525,
    "unitMoney": ""
},
{
    "x": 1470758400000,
    "y": 1.103,
    "equityReturn": -0.6306,
    "unitMoney": ""
},
{
    "x": 1470844800000,
    "y": 1.096,
    "equityReturn": -0.6346,
    "unitMoney": ""
},
{
    "x": 1470931200000,
    "y": 1.104,
    "equityReturn": 0.7299,
    "unitMoney": ""
},
{
    "x": 1471190400000,
    "y": 1.125,
    "equityReturn": 1.9022,
    "unitMoney": ""
},
{
    "x": 1471276800000,
    "y": 1.129,
    "equityReturn": 0.3556,
    "unitMoney": ""
},
{
    "x": 1471363200000,
    "y": 1.131,
    "equityReturn": 0.1771,
    "unitMoney": ""
},
{
    "x": 1471449600000,
    "y": 1.13,
    "equityReturn": -0.0884,
    "unitMoney": ""
},
{
    "x": 1471536000000,
    "y": 1.126,
    "equityReturn": -0.354,
    "unitMoney": ""
},
{
    "x": 1471795200000,
    "y": 1.118,
    "equityReturn": -0.7105,
    "unitMoney": ""
},
{
    "x": 1471881600000,
    "y": 1.126,
    "equityReturn": 0.7156,
    "unitMoney": ""
},
{
    "x": 1471968000000,
    "y": 1.088,
    "equityReturn": 0.3552,
    "unitMoney": "分红：每份派现金0.042元"
},
{
    "x": 1472054400000,
    "y": 1.085,
    "equityReturn": -0.2757,
    "unitMoney": ""
},
{
    "x": 1472140800000,
    "y": 1.091,
    "equityReturn": 0.553,
    "unitMoney": ""
},
{
    "x": 1472400000000,
    "y": 1.087,
    "equityReturn": -0.3666,
    "unitMoney": ""
},
{
    "x": 1472486400000,
    "y": 1.093,
    "equityReturn": 0.552,
    "unitMoney": ""
},
{
    "x": 1472572800000,
    "y": 1.085,
    "equityReturn": -0.7319,
    "unitMoney": ""
},
{
    "x": 1472659200000,
    "y": 1.079,
    "equityReturn": -0.553,
    "unitMoney": ""
},
{
    "x": 1472745600000,
    "y": 1.078,
    "equityReturn": -0.0927,
    "unitMoney": ""
},
{
    "x": 1473004800000,
    "y": 1.081,
    "equityReturn": 0.2783,
    "unitMoney": ""
},
{
    "x": 1473091200000,
    "y": 1.106,
    "equityReturn": 2.3127,
    "unitMoney": ""
},
{
    "x": 1473177600000,
    "y": 1.101,
    "equityReturn": -0.4521,
    "unitMoney": ""
},
{
    "x": 1473264000000,
    "y": 1.101,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1473350400000,
    "y": 1.086,
    "equityReturn": -1.3624,
    "unitMoney": ""
},
{
    "x": 1473609600000,
    "y": 1.059,
    "equityReturn": -2.4862,
    "unitMoney": ""
},
{
    "x": 1473696000000,
    "y": 1.068,
    "equityReturn": 0.8499,
    "unitMoney": ""
},
{
    "x": 1473782400000,
    "y": 1.072,
    "equityReturn": 0.3745,
    "unitMoney": ""
},
{
    "x": 1474214400000,
    "y": 1.077,
    "equityReturn": 0.4664,
    "unitMoney": ""
},
{
    "x": 1474300800000,
    "y": 1.083,
    "equityReturn": 0.5571,
    "unitMoney": ""
},
{
    "x": 1474387200000,
    "y": 1.084,
    "equityReturn": 0.0923,
    "unitMoney": ""
},
{
    "x": 1474473600000,
    "y": 1.092,
    "equityReturn": 0.738,
    "unitMoney": ""
},
{
    "x": 1474560000000,
    "y": 1.094,
    "equityReturn": 0.1832,
    "unitMoney": ""
},
{
    "x": 1474819200000,
    "y": 1.068,
    "equityReturn": -2.3766,
    "unitMoney": ""
},
{
    "x": 1474905600000,
    "y": 1.07,
    "equityReturn": 0.1873,
    "unitMoney": ""
},
{
    "x": 1474992000000,
    "y": 1.073,
    "equityReturn": 0.2804,
    "unitMoney": ""
},
{
    "x": 1475078400000,
    "y": 1.079,
    "equityReturn": 0.5592,
    "unitMoney": ""
},
{
    "x": 1475164800000,
    "y": 1.084,
    "equityReturn": 0.4634,
    "unitMoney": ""
},
{
    "x": 1476028800000,
    "y": 1.094,
    "equityReturn": 0.9225,
    "unitMoney": ""
},
{
    "x": 1476115200000,
    "y": 1.106,
    "equityReturn": 1.0969,
    "unitMoney": ""
},
{
    "x": 1476201600000,
    "y": 1.097,
    "equityReturn": -0.8137,
    "unitMoney": ""
},
{
    "x": 1476288000000,
    "y": 1.1,
    "equityReturn": 0.2735,
    "unitMoney": ""
},
{
    "x": 1476374400000,
    "y": 1.091,
    "equityReturn": -0.8182,
    "unitMoney": ""
},
{
    "x": 1476633600000,
    "y": 1.081,
    "equityReturn": -0.9166,
    "unitMoney": ""
},
{
    "x": 1476720000000,
    "y": 1.097,
    "equityReturn": 1.4801,
    "unitMoney": ""
},
{
    "x": 1476806400000,
    "y": 1.093,
    "equityReturn": -0.3646,
    "unitMoney": ""
},
{
    "x": 1476892800000,
    "y": 1.099,
    "equityReturn": 0.5489,
    "unitMoney": ""
},
{
    "x": 1476979200000,
    "y": 1.09,
    "equityReturn": -0.8189,
    "unitMoney": ""
},
{
    "x": 1477238400000,
    "y": 1.093,
    "equityReturn": 0.2752,
    "unitMoney": ""
},
{
    "x": 1477324800000,
    "y": 1.094,
    "equityReturn": 0.0915,
    "unitMoney": ""
},
{
    "x": 1477411200000,
    "y": 1.087,
    "equityReturn": -0.6399,
    "unitMoney": ""
},
{
    "x": 1477497600000,
    "y": 1.083,
    "equityReturn": -0.368,
    "unitMoney": ""
},
{
    "x": 1477584000000,
    "y": 1.079,
    "equityReturn": -0.3693,
    "unitMoney": ""
},
{
    "x": 1477843200000,
    "y": 1.073,
    "equityReturn": -0.5561,
    "unitMoney": ""
},
{
    "x": 1477929600000,
    "y": 1.08,
    "equityReturn": 0.6524,
    "unitMoney": ""
},
{
    "x": 1478016000000,
    "y": 1.071,
    "equityReturn": -0.8333,
    "unitMoney": ""
},
{
    "x": 1478102400000,
    "y": 1.075,
    "equityReturn": 0.3735,
    "unitMoney": ""
},
{
    "x": 1478188800000,
    "y": 1.067,
    "equityReturn": -0.7442,
    "unitMoney": ""
},
{
    "x": 1478448000000,
    "y": 1.077,
    "equityReturn": 0.9372,
    "unitMoney": ""
},
{
    "x": 1478534400000,
    "y": 1.081,
    "equityReturn": 0.3714,
    "unitMoney": ""
},
{
    "x": 1478620800000,
    "y": 1.083,
    "equityReturn": 0.185,
    "unitMoney": ""
},
{
    "x": 1478707200000,
    "y": 1.093,
    "equityReturn": 0.9234,
    "unitMoney": ""
},
{
    "x": 1478793600000,
    "y": 1.105,
    "equityReturn": 1.0979,
    "unitMoney": ""
},
{
    "x": 1479052800000,
    "y": 1.113,
    "equityReturn": 0.724,
    "unitMoney": ""
},
{
    "x": 1479139200000,
    "y": 1.119,
    "equityReturn": 0.5391,
    "unitMoney": ""
},
{
    "x": 1479225600000,
    "y": 1.116,
    "equityReturn": -0.2681,
    "unitMoney": ""
},
{
    "x": 1479312000000,
    "y": 1.124,
    "equityReturn": 0.7168,
    "unitMoney": ""
},
{
    "x": 1479398400000,
    "y": 1.117,
    "equityReturn": -0.6228,
    "unitMoney": ""
},
{
    "x": 1479657600000,
    "y": 1.117,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1479744000000,
    "y": 1.13,
    "equityReturn": 1.1638,
    "unitMoney": ""
},
{
    "x": 1479830400000,
    "y": 1.127,
    "equityReturn": -0.2655,
    "unitMoney": ""
},
{
    "x": 1479916800000,
    "y": 1.128,
    "equityReturn": 0.0887,
    "unitMoney": ""
},
{
    "x": 1480003200000,
    "y": 1.095,
    "equityReturn": 0.6206,
    "unitMoney": "分红：每份派现金0.04元"
},
{
    "x": 1480262400000,
    "y": 1.103,
    "equityReturn": 0.7306,
    "unitMoney": ""
},
{
    "x": 1480348800000,
    "y": 1.097,
    "equityReturn": -0.544,
    "unitMoney": ""
},
{
    "x": 1480435200000,
    "y": 1.084,
    "equityReturn": -1.1851,
    "unitMoney": ""
},
{
    "x": 1480521600000,
    "y": 1.103,
    "equityReturn": 1.7528,
    "unitMoney": ""
},
{
    "x": 1480608000000,
    "y": 1.095,
    "equityReturn": -0.7253,
    "unitMoney": ""
},
{
    "x": 1480867200000,
    "y": 1.084,
    "equityReturn": -1.0046,
    "unitMoney": ""
},
{
    "x": 1480953600000,
    "y": 1.084,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1481040000000,
    "y": 1.096,
    "equityReturn": 1.107,
    "unitMoney": ""
},
{
    "x": 1481126400000,
    "y": 1.096,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1481212800000,
    "y": 1.101,
    "equityReturn": 0.4562,
    "unitMoney": ""
},
{
    "x": 1481472000000,
    "y": 1.078,
    "equityReturn": -2.089,
    "unitMoney": ""
},
{
    "x": 1481558400000,
    "y": 1.089,
    "equityReturn": 1.0204,
    "unitMoney": ""
},
{
    "x": 1481644800000,
    "y": 1.086,
    "equityReturn": -0.2755,
    "unitMoney": ""
},
{
    "x": 1481731200000,
    "y": 1.086,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1481817600000,
    "y": 1.084,
    "equityReturn": -0.1842,
    "unitMoney": ""
},
{
    "x": 1482076800000,
    "y": 1.086,
    "equityReturn": 0.1845,
    "unitMoney": ""
},
{
    "x": 1482163200000,
    "y": 1.074,
    "equityReturn": -1.105,
    "unitMoney": ""
},
{
    "x": 1482249600000,
    "y": 1.088,
    "equityReturn": 1.3035,
    "unitMoney": ""
},
{
    "x": 1482336000000,
    "y": 1.09,
    "equityReturn": 0.1838,
    "unitMoney": ""
},
{
    "x": 1482422400000,
    "y": 1.08,
    "equityReturn": -0.9174,
    "unitMoney": ""
},
{
    "x": 1482681600000,
    "y": 1.082,
    "equityReturn": 0.1852,
    "unitMoney": ""
},
{
    "x": 1482768000000,
    "y": 1.08,
    "equityReturn": -0.1848,
    "unitMoney": ""
},
{
    "x": 1482854400000,
    "y": 1.074,
    "equityReturn": -0.5556,
    "unitMoney": ""
},
{
    "x": 1482940800000,
    "y": 1.07,
    "equityReturn": -0.3724,
    "unitMoney": ""
},
{
    "x": 1483027200000,
    "y": 1.075,
    "equityReturn": 0.4673,
    "unitMoney": ""
},
{
    "x": 1483113600000,
    "y": 1.075,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1483372800000,
    "y": 1.09,
    "equityReturn": 1.3953,
    "unitMoney": ""
},
{
    "x": 1483459200000,
    "y": 1.105,
    "equityReturn": 1.3761,
    "unitMoney": ""
},
{
    "x": 1483545600000,
    "y": 1.118,
    "equityReturn": 1.1765,
    "unitMoney": ""
},
{
    "x": 1483632000000,
    "y": 1.117,
    "equityReturn": -0.0894,
    "unitMoney": ""
},
{
    "x": 1483891200000,
    "y": 1.123,
    "equityReturn": 0.5372,
    "unitMoney": ""
},
{
    "x": 1483977600000,
    "y": 1.119,
    "equityReturn": -0.3562,
    "unitMoney": ""
},
{
    "x": 1484064000000,
    "y": 1.107,
    "equityReturn": -1.0724,
    "unitMoney": ""
},
{
    "x": 1484150400000,
    "y": 1.098,
    "equityReturn": -0.813,
    "unitMoney": ""
},
{
    "x": 1484236800000,
    "y": 1.09,
    "equityReturn": -0.7286,
    "unitMoney": ""
},
{
    "x": 1484496000000,
    "y": 1.078,
    "equityReturn": -1.1009,
    "unitMoney": ""
},
{
    "x": 1484582400000,
    "y": 1.087,
    "equityReturn": 0.8349,
    "unitMoney": ""
},
{
    "x": 1484668800000,
    "y": 1.092,
    "equityReturn": 0.46,
    "unitMoney": ""
},
{
    "x": 1484755200000,
    "y": 1.0883,
    "equityReturn": -0.3388,
    "unitMoney": ""
},
{
    "x": 1484841600000,
    "y": 1.0962,
    "equityReturn": 0.7259,
    "unitMoney": ""
},
{
    "x": 1485100800000,
    "y": 1.1071,
    "equityReturn": 0.9943,
    "unitMoney": ""
},
{
    "x": 1485187200000,
    "y": 1.1071,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1485273600000,
    "y": 1.1071,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1485360000000,
    "y": 1.1162,
    "equityReturn": 0.822,
    "unitMoney": ""
},
{
    "x": 1486051200000,
    "y": 1.1095,
    "equityReturn": -0.6003,
    "unitMoney": ""
},
{
    "x": 1486310400000,
    "y": 1.1173,
    "equityReturn": 0.703,
    "unitMoney": ""
},
{
    "x": 1486396800000,
    "y": 1.1192,
    "equityReturn": 0.1701,
    "unitMoney": ""
},
{
    "x": 1486483200000,
    "y": 1.1235,
    "equityReturn": 0.3842,
    "unitMoney": ""
},
{
    "x": 1486569600000,
    "y": 1.1249,
    "equityReturn": 0.1246,
    "unitMoney": ""
},
{
    "x": 1486656000000,
    "y": 1.1327,
    "equityReturn": 0.6934,
    "unitMoney": ""
},
{
    "x": 1486915200000,
    "y": 1.1477,
    "equityReturn": 1.3243,
    "unitMoney": ""
},
{
    "x": 1487001600000,
    "y": 1.1502,
    "equityReturn": 0.2178,
    "unitMoney": ""
},
{
    "x": 1487088000000,
    "y": 1.1372,
    "equityReturn": -1.1302,
    "unitMoney": ""
},
{
    "x": 1487174400000,
    "y": 1.1507,
    "equityReturn": 1.1871,
    "unitMoney": ""
},
{
    "x": 1487260800000,
    "y": 1.1398,
    "equityReturn": -0.9472,
    "unitMoney": ""
},
{
    "x": 1487520000000,
    "y": 1.1555,
    "equityReturn": 1.3774,
    "unitMoney": ""
},
{
    "x": 1487606400000,
    "y": 1.1627,
    "equityReturn": 0.6231,
    "unitMoney": ""
},
{
    "x": 1487692800000,
    "y": 1.1746,
    "equityReturn": 1.0235,
    "unitMoney": ""
},
{
    "x": 1487779200000,
    "y": 1.1767,
    "equityReturn": 0.1788,
    "unitMoney": ""
},
{
    "x": 1487865600000,
    "y": 1.1696,
    "equityReturn": -0.6034,
    "unitMoney": ""
},
{
    "x": 1488124800000,
    "y": 1.1556,
    "equityReturn": -1.197,
    "unitMoney": ""
},
{
    "x": 1488211200000,
    "y": 1.1625,
    "equityReturn": 0.5971,
    "unitMoney": ""
},
{
    "x": 1488297600000,
    "y": 1.1652,
    "equityReturn": 0.2323,
    "unitMoney": ""
},
{
    "x": 1488384000000,
    "y": 1.1613,
    "equityReturn": -0.3347,
    "unitMoney": ""
},
{
    "x": 1488470400000,
    "y": 1.166,
    "equityReturn": 0.4047,
    "unitMoney": ""
},
{
    "x": 1488729600000,
    "y": 1.176,
    "equityReturn": 0.8576,
    "unitMoney": ""
},
{
    "x": 1488816000000,
    "y": 1.1773,
    "equityReturn": 0.1105,
    "unitMoney": ""
},
{
    "x": 1488902400000,
    "y": 1.1187,
    "equityReturn": -0.3907,
    "unitMoney": "分红：每份派现金0.054元"
},
{
    "x": 1488988800000,
    "y": 1.1073,
    "equityReturn": -1.019,
    "unitMoney": ""
},
{
    "x": 1489075200000,
    "y": 1.1154,
    "equityReturn": 0.7315,
    "unitMoney": ""
},
{
    "x": 1489334400000,
    "y": 1.1284,
    "equityReturn": 1.1655,
    "unitMoney": ""
},
{
    "x": 1489420800000,
    "y": 1.1267,
    "equityReturn": -0.1507,
    "unitMoney": ""
},
{
    "x": 1489507200000,
    "y": 1.1325,
    "equityReturn": 0.5148,
    "unitMoney": ""
},
{
    "x": 1489593600000,
    "y": 1.14,
    "equityReturn": 0.6623,
    "unitMoney": ""
},
{
    "x": 1489680000000,
    "y": 1.1236,
    "equityReturn": -1.4386,
    "unitMoney": ""
},
{
    "x": 1489939200000,
    "y": 1.1216,
    "equityReturn": -0.178,
    "unitMoney": ""
},
{
    "x": 1490025600000,
    "y": 1.1254,
    "equityReturn": 0.3388,
    "unitMoney": ""
},
{
    "x": 1490112000000,
    "y": 1.1293,
    "equityReturn": 0.3465,
    "unitMoney": ""
},
{
    "x": 1490198400000,
    "y": 1.1321,
    "equityReturn": 0.2479,
    "unitMoney": ""
},
{
    "x": 1490284800000,
    "y": 1.1343,
    "equityReturn": 0.1943,
    "unitMoney": ""
},
{
    "x": 1490544000000,
    "y": 1.1249,
    "equityReturn": -0.8287,
    "unitMoney": ""
},
{
    "x": 1490630400000,
    "y": 1.1209,
    "equityReturn": -0.3556,
    "unitMoney": ""
},
{
    "x": 1490716800000,
    "y": 1.1176,
    "equityReturn": -0.2944,
    "unitMoney": ""
},
{
    "x": 1490803200000,
    "y": 1.1023,
    "equityReturn": -1.369,
    "unitMoney": ""
},
{
    "x": 1490889600000,
    "y": 1.1108,
    "equityReturn": 0.7711,
    "unitMoney": ""
},
{
    "x": 1491321600000,
    "y": 1.1392,
    "equityReturn": 2.5567,
    "unitMoney": ""
},
{
    "x": 1491408000000,
    "y": 1.1447,
    "equityReturn": 0.4828,
    "unitMoney": ""
},
{
    "x": 1491494400000,
    "y": 1.1538,
    "equityReturn": 0.795,
    "unitMoney": ""
},
{
    "x": 1491753600000,
    "y": 1.1527,
    "equityReturn": -0.0953,
    "unitMoney": ""
},
{
    "x": 1491840000000,
    "y": 1.1644,
    "equityReturn": 1.015,
    "unitMoney": ""
},
{
    "x": 1491926400000,
    "y": 1.1581,
    "equityReturn": -0.5411,
    "unitMoney": ""
},
{
    "x": 1492012800000,
    "y": 1.1659,
    "equityReturn": 0.6735,
    "unitMoney": ""
},
{
    "x": 1492099200000,
    "y": 1.1543,
    "equityReturn": -0.9949,
    "unitMoney": ""
},
{
    "x": 1492358400000,
    "y": 1.1496,
    "equityReturn": -0.4072,
    "unitMoney": ""
},
{
    "x": 1492444800000,
    "y": 1.1455,
    "equityReturn": -0.3566,
    "unitMoney": ""
},
{
    "x": 1492531200000,
    "y": 1.1354,
    "equityReturn": -0.8817,
    "unitMoney": ""
},
{
    "x": 1492617600000,
    "y": 1.1022,
    "equityReturn": 0.5989,
    "unitMoney": "分红：每份派现金0.04元"
},
{
    "x": 1492704000000,
    "y": 1.0961,
    "equityReturn": -0.5534,
    "unitMoney": ""
},
{
    "x": 1492963200000,
    "y": 1.073,
    "equityReturn": -2.1075,
    "unitMoney": ""
},
{
    "x": 1493049600000,
    "y": 1.0791,
    "equityReturn": 0.5685,
    "unitMoney": ""
},
{
    "x": 1493136000000,
    "y": 1.0801,
    "equityReturn": 0.0927,
    "unitMoney": ""
},
{
    "x": 1493222400000,
    "y": 1.0857,
    "equityReturn": 0.5185,
    "unitMoney": ""
},
{
    "x": 1493308800000,
    "y": 1.0821,
    "equityReturn": -0.3316,
    "unitMoney": ""
},
{
    "x": 1493654400000,
    "y": 1.0865,
    "equityReturn": 0.4066,
    "unitMoney": ""
},
{
    "x": 1493740800000,
    "y": 1.0844,
    "equityReturn": -0.1933,
    "unitMoney": ""
},
{
    "x": 1493827200000,
    "y": 1.083,
    "equityReturn": -0.1291,
    "unitMoney": ""
},
{
    "x": 1493913600000,
    "y": 1.0728,
    "equityReturn": -0.9418,
    "unitMoney": ""
},
{
    "x": 1494172800000,
    "y": 1.0626,
    "equityReturn": -0.9508,
    "unitMoney": ""
},
{
    "x": 1494259200000,
    "y": 1.0704,
    "equityReturn": 0.734,
    "unitMoney": ""
},
{
    "x": 1494345600000,
    "y": 1.0605,
    "equityReturn": -0.9249,
    "unitMoney": ""
},
{
    "x": 1494432000000,
    "y": 1.0658,
    "equityReturn": 0.4998,
    "unitMoney": ""
},
{
    "x": 1494518400000,
    "y": 1.0684,
    "equityReturn": 0.2439,
    "unitMoney": ""
},
{
    "x": 1494777600000,
    "y": 1.075,
    "equityReturn": 0.6177,
    "unitMoney": ""
},
{
    "x": 1494864000000,
    "y": 1.091,
    "equityReturn": 1.4884,
    "unitMoney": ""
},
{
    "x": 1494950400000,
    "y": 1.086,
    "equityReturn": -0.4583,
    "unitMoney": ""
},
{
    "x": 1495036800000,
    "y": 1.0843,
    "equityReturn": -0.1565,
    "unitMoney": ""
},
{
    "x": 1495123200000,
    "y": 1.0848,
    "equityReturn": 0.0461,
    "unitMoney": ""
},
{
    "x": 1495382400000,
    "y": 1.0799,
    "equityReturn": -0.4517,
    "unitMoney": ""
},
{
    "x": 1495468800000,
    "y": 1.0789,
    "equityReturn": -0.0926,
    "unitMoney": ""
},
{
    "x": 1495555200000,
    "y": 1.0807,
    "equityReturn": 0.1668,
    "unitMoney": ""
},
{
    "x": 1495641600000,
    "y": 1.0925,
    "equityReturn": 1.0919,
    "unitMoney": ""
},
{
    "x": 1495728000000,
    "y": 1.0914,
    "equityReturn": -0.1007,
    "unitMoney": ""
},
{
    "x": 1496160000000,
    "y": 1.0948,
    "equityReturn": 0.3115,
    "unitMoney": ""
},
{
    "x": 1496246400000,
    "y": 1.0902,
    "equityReturn": -0.4202,
    "unitMoney": ""
},
{
    "x": 1496332800000,
    "y": 1.09,
    "equityReturn": -0.0183,
    "unitMoney": ""
},
{
    "x": 1496592000000,
    "y": 1.0881,
    "equityReturn": -0.1743,
    "unitMoney": ""
},
{
    "x": 1496678400000,
    "y": 1.0982,
    "equityReturn": 0.9282,
    "unitMoney": ""
},
{
    "x": 1496764800000,
    "y": 1.1171,
    "equityReturn": 1.721,
    "unitMoney": ""
},
{
    "x": 1496851200000,
    "y": 1.1357,
    "equityReturn": 1.665,
    "unitMoney": ""
},
{
    "x": 1496937600000,
    "y": 1.1525,
    "equityReturn": 1.4793,
    "unitMoney": ""
},
{
    "x": 1497196800000,
    "y": 1.1528,
    "equityReturn": 0.026,
    "unitMoney": ""
},
{
    "x": 1497283200000,
    "y": 1.1568,
    "equityReturn": 0.347,
    "unitMoney": ""
},
{
    "x": 1497369600000,
    "y": 1.1481,
    "equityReturn": -0.7521,
    "unitMoney": ""
},
{
    "x": 1497456000000,
    "y": 1.1438,
    "equityReturn": -0.3745,
    "unitMoney": ""
},
{
    "x": 1497542400000,
    "y": 1.1422,
    "equityReturn": -0.1399,
    "unitMoney": ""
},
{
    "x": 1497801600000,
    "y": 1.1491,
    "equityReturn": 0.6041,
    "unitMoney": ""
},
{
    "x": 1497888000000,
    "y": 1.1501,
    "equityReturn": 0.087,
    "unitMoney": ""
},
{
    "x": 1497974400000,
    "y": 1.1569,
    "equityReturn": 0.5913,
    "unitMoney": ""
},
{
    "x": 1498060800000,
    "y": 1.1434,
    "equityReturn": -1.1669,
    "unitMoney": ""
},
{
    "x": 1498147200000,
    "y": 1.141,
    "equityReturn": -0.2099,
    "unitMoney": ""
},
{
    "x": 1498406400000,
    "y": 1.1645,
    "equityReturn": 2.0596,
    "unitMoney": ""
},
{
    "x": 1498492800000,
    "y": 1.1679,
    "equityReturn": 0.292,
    "unitMoney": ""
},
{
    "x": 1498579200000,
    "y": 1.1601,
    "equityReturn": -0.6679,
    "unitMoney": ""
},
{
    "x": 1498665600000,
    "y": 1.1637,
    "equityReturn": 0.3103,
    "unitMoney": ""
},
{
    "x": 1498752000000,
    "y": 1.168,
    "equityReturn": 0.3695,
    "unitMoney": ""
},
{
    "x": 1499011200000,
    "y": 1.173,
    "equityReturn": 0.4281,
    "unitMoney": ""
},
{
    "x": 1499097600000,
    "y": 1.1652,
    "equityReturn": -0.665,
    "unitMoney": ""
},
{
    "x": 1499184000000,
    "y": 1.1835,
    "equityReturn": 1.5705,
    "unitMoney": ""
},
{
    "x": 1499270400000,
    "y": 1.1951,
    "equityReturn": 0.9801,
    "unitMoney": ""
},
{
    "x": 1499356800000,
    "y": 1.2058,
    "equityReturn": 0.8953,
    "unitMoney": ""
},
{
    "x": 1499616000000,
    "y": 1.2103,
    "equityReturn": 0.3732,
    "unitMoney": ""
},
{
    "x": 1499702400000,
    "y": 1.1917,
    "equityReturn": -1.5368,
    "unitMoney": ""
},
{
    "x": 1499788800000,
    "y": 1.192,
    "equityReturn": 0.0252,
    "unitMoney": ""
},
{
    "x": 1499875200000,
    "y": 1.1982,
    "equityReturn": 0.5201,
    "unitMoney": ""
},
{
    "x": 1499961600000,
    "y": 1.202,
    "equityReturn": 0.3171,
    "unitMoney": ""
},
{
    "x": 1500220800000,
    "y": 1.176,
    "equityReturn": -2.1631,
    "unitMoney": ""
},
{
    "x": 1500307200000,
    "y": 1.1904,
    "equityReturn": 1.2245,
    "unitMoney": ""
},
{
    "x": 1500393600000,
    "y": 1.2303,
    "equityReturn": 3.3518,
    "unitMoney": ""
},
{
    "x": 1500480000000,
    "y": 1.2348,
    "equityReturn": 0.3658,
    "unitMoney": ""
},
{
    "x": 1500566400000,
    "y": 1.2329,
    "equityReturn": -0.1539,
    "unitMoney": ""
},
{
    "x": 1500825600000,
    "y": 1.233,
    "equityReturn": 0.0081,
    "unitMoney": ""
},
{
    "x": 1500912000000,
    "y": 1.2232,
    "equityReturn": -0.7948,
    "unitMoney": ""
},
{
    "x": 1500998400000,
    "y": 1.2276,
    "equityReturn": 0.3597,
    "unitMoney": ""
},
{
    "x": 1501084800000,
    "y": 1.2168,
    "equityReturn": -0.8798,
    "unitMoney": ""
},
{
    "x": 1501171200000,
    "y": 1.18,
    "equityReturn": 1.0848,
    "unitMoney": "分红：每份派现金0.05元"
},
{
    "x": 1501430400000,
    "y": 1.2057,
    "equityReturn": 2.178,
    "unitMoney": ""
},
{
    "x": 1501516800000,
    "y": 1.2045,
    "equityReturn": -0.0995,
    "unitMoney": ""
},
{
    "x": 1501603200000,
    "y": 1.1972,
    "equityReturn": -0.6061,
    "unitMoney": ""
},
{
    "x": 1501689600000,
    "y": 1.1991,
    "equityReturn": 0.1587,
    "unitMoney": ""
},
{
    "x": 1501776000000,
    "y": 1.1996,
    "equityReturn": 0.0417,
    "unitMoney": ""
},
{
    "x": 1502035200000,
    "y": 1.2178,
    "equityReturn": 1.5172,
    "unitMoney": ""
},
{
    "x": 1502121600000,
    "y": 1.2163,
    "equityReturn": -0.1232,
    "unitMoney": ""
},
{
    "x": 1502208000000,
    "y": 1.2254,
    "equityReturn": 0.7482,
    "unitMoney": ""
},
{
    "x": 1502294400000,
    "y": 1.217,
    "equityReturn": -0.6855,
    "unitMoney": ""
},
{
    "x": 1502380800000,
    "y": 1.1795,
    "equityReturn": -3.0813,
    "unitMoney": ""
},
{
    "x": 1502640000000,
    "y": 1.1939,
    "equityReturn": 1.2209,
    "unitMoney": ""
},
{
    "x": 1502726400000,
    "y": 1.1999,
    "equityReturn": 0.5026,
    "unitMoney": ""
},
{
    "x": 1502812800000,
    "y": 1.1972,
    "equityReturn": -0.225,
    "unitMoney": ""
},
{
    "x": 1502899200000,
    "y": 1.2061,
    "equityReturn": 0.7434,
    "unitMoney": ""
},
{
    "x": 1502985600000,
    "y": 1.2048,
    "equityReturn": -0.1078,
    "unitMoney": ""
},
{
    "x": 1503244800000,
    "y": 1.2183,
    "equityReturn": 1.1205,
    "unitMoney": ""
},
{
    "x": 1503331200000,
    "y": 1.2152,
    "equityReturn": -0.2545,
    "unitMoney": ""
},
{
    "x": 1503417600000,
    "y": 1.2011,
    "equityReturn": -1.1603,
    "unitMoney": ""
},
{
    "x": 1503504000000,
    "y": 1.1929,
    "equityReturn": -0.6827,
    "unitMoney": ""
},
{
    "x": 1503590400000,
    "y": 1.213,
    "equityReturn": 1.685,
    "unitMoney": ""
},
{
    "x": 1503849600000,
    "y": 1.2245,
    "equityReturn": 0.9481,
    "unitMoney": ""
},
{
    "x": 1503936000000,
    "y": 1.221,
    "equityReturn": -0.2858,
    "unitMoney": ""
},
{
    "x": 1504022400000,
    "y": 1.235,
    "equityReturn": 1.1466,
    "unitMoney": ""
},
{
    "x": 1504108800000,
    "y": 1.2396,
    "equityReturn": 0.3725,
    "unitMoney": ""
},
{
    "x": 1504195200000,
    "y": 1.2488,
    "equityReturn": 0.7422,
    "unitMoney": ""
},
{
    "x": 1504454400000,
    "y": 1.2493,
    "equityReturn": 0.04,
    "unitMoney": ""
},
{
    "x": 1504540800000,
    "y": 1.247,
    "equityReturn": -0.1841,
    "unitMoney": ""
},
{
    "x": 1504627200000,
    "y": 1.2496,
    "equityReturn": 0.2085,
    "unitMoney": ""
},
{
    "x": 1504713600000,
    "y": 1.2354,
    "equityReturn": -1.1364,
    "unitMoney": ""
},
{
    "x": 1504800000000,
    "y": 1.2365,
    "equityReturn": 0.089,
    "unitMoney": ""
},
{
    "x": 1505059200000,
    "y": 1.2473,
    "equityReturn": 0.8734,
    "unitMoney": ""
},
{
    "x": 1505145600000,
    "y": 1.2567,
    "equityReturn": 0.7536,
    "unitMoney": ""
},
{
    "x": 1505232000000,
    "y": 1.2592,
    "equityReturn": 0.1989,
    "unitMoney": ""
},
{
    "x": 1505318400000,
    "y": 1.2604,
    "equityReturn": 0.0953,
    "unitMoney": ""
},
{
    "x": 1505404800000,
    "y": 1.2522,
    "equityReturn": -0.6506,
    "unitMoney": ""
},
{
    "x": 1505664000000,
    "y": 1.2594,
    "equityReturn": 0.575,
    "unitMoney": ""
},
{
    "x": 1505750400000,
    "y": 1.2597,
    "equityReturn": 0.0238,
    "unitMoney": ""
},
{
    "x": 1505836800000,
    "y": 1.2716,
    "equityReturn": 0.9447,
    "unitMoney": ""
},
{
    "x": 1505923200000,
    "y": 1.2561,
    "equityReturn": -1.2189,
    "unitMoney": ""
},
{
    "x": 1506009600000,
    "y": 1.2475,
    "equityReturn": -0.6847,
    "unitMoney": ""
},
{
    "x": 1506268800000,
    "y": 1.2216,
    "equityReturn": -2.0762,
    "unitMoney": ""
},
{
    "x": 1506355200000,
    "y": 1.2288,
    "equityReturn": 0.5894,
    "unitMoney": ""
},
{
    "x": 1506441600000,
    "y": 1.2477,
    "equityReturn": 1.5381,
    "unitMoney": ""
},
{
    "x": 1506528000000,
    "y": 1.2452,
    "equityReturn": -0.2004,
    "unitMoney": ""
},
{
    "x": 1506614400000,
    "y": 1.2493,
    "equityReturn": 0.3293,
    "unitMoney": ""
},
{
    "x": 1507478400000,
    "y": 1.2616,
    "equityReturn": 0.9846,
    "unitMoney": ""
},
{
    "x": 1507564800000,
    "y": 1.2611,
    "equityReturn": -0.0396,
    "unitMoney": ""
},
{
    "x": 1507651200000,
    "y": 1.2493,
    "equityReturn": -0.9357,
    "unitMoney": ""
},
{
    "x": 1507737600000,
    "y": 1.2457,
    "equityReturn": -0.2882,
    "unitMoney": ""
},
{
    "x": 1507824000000,
    "y": 1.254,
    "equityReturn": 0.6663,
    "unitMoney": ""
},
{
    "x": 1508083200000,
    "y": 1.2437,
    "equityReturn": -0.8214,
    "unitMoney": ""
},
{
    "x": 1508169600000,
    "y": 1.2507,
    "equityReturn": 0.5628,
    "unitMoney": ""
},
{
    "x": 1508256000000,
    "y": 1.2552,
    "equityReturn": 0.3598,
    "unitMoney": ""
},
{
    "x": 1508342400000,
    "y": 1.2391,
    "equityReturn": -1.2827,
    "unitMoney": ""
},
{
    "x": 1508428800000,
    "y": 1.2412,
    "equityReturn": 0.1695,
    "unitMoney": ""
},
{
    "x": 1508688000000,
    "y": 1.2516,
    "equityReturn": 0.8379,
    "unitMoney": ""
},
{
    "x": 1508774400000,
    "y": 1.2502,
    "equityReturn": -0.1119,
    "unitMoney": ""
},
{
    "x": 1508860800000,
    "y": 1.2574,
    "equityReturn": 0.5759,
    "unitMoney": ""
},
{
    "x": 1508947200000,
    "y": 1.275,
    "equityReturn": 1.3997,
    "unitMoney": ""
},
{
    "x": 1509033600000,
    "y": 1.2742,
    "equityReturn": -0.0627,
    "unitMoney": ""
},
{
    "x": 1509292800000,
    "y": 1.2764,
    "equityReturn": 0.1727,
    "unitMoney": ""
},
{
    "x": 1509379200000,
    "y": 1.2865,
    "equityReturn": 0.7913,
    "unitMoney": ""
},
{
    "x": 1509465600000,
    "y": 1.2746,
    "equityReturn": -0.925,
    "unitMoney": ""
},
{
    "x": 1509552000000,
    "y": 1.2646,
    "equityReturn": -0.7846,
    "unitMoney": ""
},
{
    "x": 1509638400000,
    "y": 1.2649,
    "equityReturn": 0.0237,
    "unitMoney": ""
},
{
    "x": 1509897600000,
    "y": 1.2885,
    "equityReturn": 1.8658,
    "unitMoney": ""
},
{
    "x": 1509984000000,
    "y": 1.2923,
    "equityReturn": 0.2949,
    "unitMoney": ""
},
{
    "x": 1510070400000,
    "y": 1.2972,
    "equityReturn": 0.3792,
    "unitMoney": ""
},
{
    "x": 1510156800000,
    "y": 1.3194,
    "equityReturn": 1.7114,
    "unitMoney": ""
},
{
    "x": 1510243200000,
    "y": 1.3523,
    "equityReturn": 2.4936,
    "unitMoney": ""
},
{
    "x": 1510502400000,
    "y": 1.364,
    "equityReturn": 0.8652,
    "unitMoney": ""
},
{
    "x": 1510588800000,
    "y": 1.3555,
    "equityReturn": -0.6232,
    "unitMoney": ""
},
{
    "x": 1510675200000,
    "y": 1.3371,
    "equityReturn": -1.3574,
    "unitMoney": ""
},
{
    "x": 1510761600000,
    "y": 1.3598,
    "equityReturn": 1.6977,
    "unitMoney": ""
},
{
    "x": 1510848000000,
    "y": 1.349,
    "equityReturn": -0.7942,
    "unitMoney": ""
},
{
    "x": 1511107200000,
    "y": 1.3686,
    "equityReturn": 1.4529,
    "unitMoney": ""
},
{
    "x": 1511193600000,
    "y": 1.372,
    "equityReturn": 0.2484,
    "unitMoney": ""
},
{
    "x": 1511280000000,
    "y": 1.3652,
    "equityReturn": -0.4956,
    "unitMoney": ""
},
{
    "x": 1511366400000,
    "y": 1.3126,
    "equityReturn": -3.8529,
    "unitMoney": ""
},
{
    "x": 1511452800000,
    "y": 1.3071,
    "equityReturn": -0.419,
    "unitMoney": ""
},
{
    "x": 1511712000000,
    "y": 1.2911,
    "equityReturn": -1.2241,
    "unitMoney": ""
},
{
    "x": 1511798400000,
    "y": 1.3014,
    "equityReturn": 0.7978,
    "unitMoney": ""
},
{
    "x": 1511884800000,
    "y": 1.3209,
    "equityReturn": 1.4984,
    "unitMoney": ""
},
{
    "x": 1511971200000,
    "y": 1.3,
    "equityReturn": -1.5823,
    "unitMoney": ""
},
{
    "x": 1512057600000,
    "y": 1.3031,
    "equityReturn": 0.2385,
    "unitMoney": ""
},
{
    "x": 1512316800000,
    "y": 1.2422,
    "equityReturn": -0.0691,
    "unitMoney": "分红：每份派现金0.06元"
},
{
    "x": 1512403200000,
    "y": 1.2277,
    "equityReturn": -1.1673,
    "unitMoney": ""
},
{
    "x": 1512489600000,
    "y": 1.2333,
    "equityReturn": 0.4561,
    "unitMoney": ""
},
{
    "x": 1512576000000,
    "y": 1.2208,
    "equityReturn": -1.0135,
    "unitMoney": ""
},
{
    "x": 1512662400000,
    "y": 1.2272,
    "equityReturn": 0.5242,
    "unitMoney": ""
},
{
    "x": 1512921600000,
    "y": 1.2455,
    "equityReturn": 1.4912,
    "unitMoney": ""
},
{
    "x": 1513008000000,
    "y": 1.2283,
    "equityReturn": -1.381,
    "unitMoney": ""
},
{
    "x": 1513094400000,
    "y": 1.2386,
    "equityReturn": 0.8386,
    "unitMoney": ""
},
{
    "x": 1513180800000,
    "y": 1.2307,
    "equityReturn": -0.6378,
    "unitMoney": ""
},
{
    "x": 1513267200000,
    "y": 1.2128,
    "equityReturn": -1.4545,
    "unitMoney": ""
},
{
    "x": 1513526400000,
    "y": 1.2035,
    "equityReturn": -0.7668,
    "unitMoney": ""
},
{
    "x": 1513612800000,
    "y": 1.2159,
    "equityReturn": 1.0303,
    "unitMoney": ""
},
{
    "x": 1513699200000,
    "y": 1.2111,
    "equityReturn": -0.3948,
    "unitMoney": ""
},
{
    "x": 1513785600000,
    "y": 1.2267,
    "equityReturn": 1.2881,
    "unitMoney": ""
},
{
    "x": 1513872000000,
    "y": 1.2243,
    "equityReturn": -0.1956,
    "unitMoney": ""
},
{
    "x": 1514131200000,
    "y": 1.2123,
    "equityReturn": -0.9802,
    "unitMoney": ""
},
{
    "x": 1514217600000,
    "y": 1.2201,
    "equityReturn": 0.6434,
    "unitMoney": ""
},
{
    "x": 1514304000000,
    "y": 1.2019,
    "equityReturn": -1.4917,
    "unitMoney": ""
},
{
    "x": 1514390400000,
    "y": 1.2074,
    "equityReturn": 0.4576,
    "unitMoney": ""
},
{
    "x": 1514476800000,
    "y": 1.2202,
    "equityReturn": 1.0601,
    "unitMoney": ""
},
{
    "x": 1514649600000,
    "y": 1.2201,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1514822400000,
    "y": 1.2395,
    "equityReturn": 1.5817,
    "unitMoney": ""
},
{
    "x": 1514908800000,
    "y": 1.2491,
    "equityReturn": 0.7745,
    "unitMoney": ""
},
{
    "x": 1514995200000,
    "y": 1.2562,
    "equityReturn": 0.5684,
    "unitMoney": ""
},
{
    "x": 1515081600000,
    "y": 1.2585,
    "equityReturn": 0.1831,
    "unitMoney": ""
},
{
    "x": 1515340800000,
    "y": 1.2665,
    "equityReturn": 0.6357,
    "unitMoney": ""
},
{
    "x": 1515427200000,
    "y": 1.2652,
    "equityReturn": -0.1026,
    "unitMoney": ""
},
{
    "x": 1515513600000,
    "y": 1.2608,
    "equityReturn": -0.3478,
    "unitMoney": ""
},
{
    "x": 1515600000000,
    "y": 1.2556,
    "equityReturn": -0.4124,
    "unitMoney": ""
},
{
    "x": 1515686400000,
    "y": 1.251,
    "equityReturn": -0.3664,
    "unitMoney": ""
},
{
    "x": 1515945600000,
    "y": 1.2309,
    "equityReturn": -1.6067,
    "unitMoney": ""
},
{
    "x": 1516032000000,
    "y": 1.2441,
    "equityReturn": 1.0724,
    "unitMoney": ""
},
{
    "x": 1516118400000,
    "y": 1.2426,
    "equityReturn": -0.1206,
    "unitMoney": ""
},
{
    "x": 1516204800000,
    "y": 1.2472,
    "equityReturn": 0.3702,
    "unitMoney": ""
},
{
    "x": 1516291200000,
    "y": 1.237,
    "equityReturn": -0.8178,
    "unitMoney": ""
},
{
    "x": 1516550400000,
    "y": 1.2518,
    "equityReturn": 1.1964,
    "unitMoney": ""
},
{
    "x": 1516636800000,
    "y": 1.2595,
    "equityReturn": 0.6151,
    "unitMoney": ""
},
{
    "x": 1516723200000,
    "y": 1.2654,
    "equityReturn": 0.4684,
    "unitMoney": ""
},
{
    "x": 1516809600000,
    "y": 1.2641,
    "equityReturn": -0.1027,
    "unitMoney": ""
},
{
    "x": 1516896000000,
    "y": 1.2631,
    "equityReturn": -0.0791,
    "unitMoney": ""
},
{
    "x": 1517155200000,
    "y": 1.2463,
    "equityReturn": -1.3301,
    "unitMoney": ""
},
{
    "x": 1517241600000,
    "y": 1.2368,
    "equityReturn": -0.7623,
    "unitMoney": ""
},
{
    "x": 1517328000000,
    "y": 1.2363,
    "equityReturn": -0.0404,
    "unitMoney": ""
},
{
    "x": 1517414400000,
    "y": 1.2223,
    "equityReturn": -1.1324,
    "unitMoney": ""
},
{
    "x": 1517500800000,
    "y": 1.2343,
    "equityReturn": 0.9818,
    "unitMoney": ""
},
{
    "x": 1517760000000,
    "y": 1.2363,
    "equityReturn": 0.162,
    "unitMoney": ""
},
{
    "x": 1517846400000,
    "y": 1.1914,
    "equityReturn": -3.6318,
    "unitMoney": ""
},
{
    "x": 1517932800000,
    "y": 1.1688,
    "equityReturn": -1.8969,
    "unitMoney": ""
},
{
    "x": 1518019200000,
    "y": 1.163,
    "equityReturn": -0.4962,
    "unitMoney": ""
},
{
    "x": 1518105600000,
    "y": 1.1185,
    "equityReturn": -3.8263,
    "unitMoney": ""
},
{
    "x": 1518364800000,
    "y": 1.1417,
    "equityReturn": 2.0742,
    "unitMoney": ""
},
{
    "x": 1518451200000,
    "y": 1.1515,
    "equityReturn": 0.8584,
    "unitMoney": ""
},
{
    "x": 1518537600000,
    "y": 1.1548,
    "equityReturn": 0.2866,
    "unitMoney": ""
},
{
    "x": 1519228800000,
    "y": 1.189,
    "equityReturn": 2.9616,
    "unitMoney": ""
},
{
    "x": 1519315200000,
    "y": 1.1845,
    "equityReturn": -0.3785,
    "unitMoney": ""
},
{
    "x": 1519574400000,
    "y": 1.2247,
    "equityReturn": 3.3938,
    "unitMoney": ""
},
{
    "x": 1519660800000,
    "y": 1.2244,
    "equityReturn": -0.0245,
    "unitMoney": ""
},
{
    "x": 1519747200000,
    "y": 1.2282,
    "equityReturn": 0.3104,
    "unitMoney": ""
},
{
    "x": 1519833600000,
    "y": 1.2501,
    "equityReturn": 1.7831,
    "unitMoney": ""
},
{
    "x": 1519920000000,
    "y": 1.2359,
    "equityReturn": -1.1359,
    "unitMoney": ""
},
{
    "x": 1520179200000,
    "y": 1.2512,
    "equityReturn": 1.238,
    "unitMoney": ""
},
{
    "x": 1520265600000,
    "y": 1.2606,
    "equityReturn": 0.7513,
    "unitMoney": ""
},
{
    "x": 1520352000000,
    "y": 1.2481,
    "equityReturn": -0.9916,
    "unitMoney": ""
},
{
    "x": 1520438400000,
    "y": 1.2484,
    "equityReturn": 0.024,
    "unitMoney": ""
},
{
    "x": 1520524800000,
    "y": 1.2789,
    "equityReturn": 2.4431,
    "unitMoney": ""
},
{
    "x": 1520784000000,
    "y": 1.3024,
    "equityReturn": 1.8375,
    "unitMoney": ""
},
{
    "x": 1520870400000,
    "y": 1.2888,
    "equityReturn": -1.0442,
    "unitMoney": ""
},
{
    "x": 1520956800000,
    "y": 1.2695,
    "equityReturn": -1.4975,
    "unitMoney": ""
},
{
    "x": 1521043200000,
    "y": 1.2784,
    "equityReturn": 0.7011,
    "unitMoney": ""
},
{
    "x": 1521129600000,
    "y": 1.2616,
    "equityReturn": -1.3141,
    "unitMoney": ""
},
{
    "x": 1521388800000,
    "y": 1.2798,
    "equityReturn": 1.4426,
    "unitMoney": ""
},
{
    "x": 1521475200000,
    "y": 1.2857,
    "equityReturn": 0.461,
    "unitMoney": ""
},
{
    "x": 1521561600000,
    "y": 1.2647,
    "equityReturn": -1.6334,
    "unitMoney": ""
},
{
    "x": 1521648000000,
    "y": 1.2521,
    "equityReturn": -0.9963,
    "unitMoney": ""
},
{
    "x": 1521734400000,
    "y": 1.1993,
    "equityReturn": -4.2169,
    "unitMoney": ""
},
{
    "x": 1521993600000,
    "y": 1.2324,
    "equityReturn": 2.7599,
    "unitMoney": ""
},
{
    "x": 1522080000000,
    "y": 1.2717,
    "equityReturn": 3.1889,
    "unitMoney": ""
},
{
    "x": 1522166400000,
    "y": 1.2097,
    "equityReturn": -0.9436,
    "unitMoney": "分红：每份派现金0.05元"
},
{
    "x": 1522252800000,
    "y": 1.2104,
    "equityReturn": 0.0579,
    "unitMoney": ""
},
{
    "x": 1522339200000,
    "y": 1.2484,
    "equityReturn": 3.1395,
    "unitMoney": ""
},
{
    "x": 1522598400000,
    "y": 1.2562,
    "equityReturn": 0.6248,
    "unitMoney": ""
},
{
    "x": 1522684800000,
    "y": 1.253,
    "equityReturn": -0.2547,
    "unitMoney": ""
},
{
    "x": 1522771200000,
    "y": 1.2268,
    "equityReturn": -2.091,
    "unitMoney": ""
},
{
    "x": 1523203200000,
    "y": 1.2294,
    "equityReturn": 0.2119,
    "unitMoney": ""
},
{
    "x": 1523289600000,
    "y": 1.2254,
    "equityReturn": -0.3254,
    "unitMoney": ""
},
{
    "x": 1523376000000,
    "y": 1.2299,
    "equityReturn": 0.3672,
    "unitMoney": ""
},
{
    "x": 1523462400000,
    "y": 1.2206,
    "equityReturn": -0.7562,
    "unitMoney": ""
},
{
    "x": 1523548800000,
    "y": 1.2266,
    "equityReturn": 0.4916,
    "unitMoney": ""
},
{
    "x": 1523808000000,
    "y": 1.2403,
    "equityReturn": 1.1169,
    "unitMoney": ""
},
{
    "x": 1523894400000,
    "y": 1.2022,
    "equityReturn": -3.0718,
    "unitMoney": ""
},
{
    "x": 1523980800000,
    "y": 1.238,
    "equityReturn": 2.9779,
    "unitMoney": ""
},
{
    "x": 1524067200000,
    "y": 1.242,
    "equityReturn": 0.3231,
    "unitMoney": ""
},
{
    "x": 1524153600000,
    "y": 1.2173,
    "equityReturn": -1.9887,
    "unitMoney": ""
},
{
    "x": 1524412800000,
    "y": 1.1914,
    "equityReturn": -2.1277,
    "unitMoney": ""
},
{
    "x": 1524499200000,
    "y": 1.2184,
    "equityReturn": 2.2662,
    "unitMoney": ""
},
{
    "x": 1524585600000,
    "y": 1.2247,
    "equityReturn": 0.5171,
    "unitMoney": ""
},
{
    "x": 1524672000000,
    "y": 1.205,
    "equityReturn": -1.6086,
    "unitMoney": ""
},
{
    "x": 1524758400000,
    "y": 1.2074,
    "equityReturn": 0.1992,
    "unitMoney": ""
},
{
    "x": 1525190400000,
    "y": 1.2091,
    "equityReturn": 0.1408,
    "unitMoney": ""
},
{
    "x": 1525276800000,
    "y": 1.2205,
    "equityReturn": 0.9429,
    "unitMoney": ""
},
{
    "x": 1525363200000,
    "y": 1.2242,
    "equityReturn": 0.3032,
    "unitMoney": ""
},
{
    "x": 1525622400000,
    "y": 1.2517,
    "equityReturn": 2.2464,
    "unitMoney": ""
},
{
    "x": 1525708800000,
    "y": 1.2601,
    "equityReturn": 0.6711,
    "unitMoney": ""
},
{
    "x": 1525795200000,
    "y": 1.2598,
    "equityReturn": -0.0238,
    "unitMoney": ""
},
{
    "x": 1525881600000,
    "y": 1.2623,
    "equityReturn": 0.1984,
    "unitMoney": ""
},
{
    "x": 1525968000000,
    "y": 1.2377,
    "equityReturn": -1.9488,
    "unitMoney": ""
},
{
    "x": 1526227200000,
    "y": 1.2389,
    "equityReturn": 0.097,
    "unitMoney": ""
},
{
    "x": 1526313600000,
    "y": 1.2605,
    "equityReturn": 1.7435,
    "unitMoney": ""
},
{
    "x": 1526400000000,
    "y": 1.2556,
    "equityReturn": -0.3887,
    "unitMoney": ""
},
{
    "x": 1526486400000,
    "y": 1.2411,
    "equityReturn": -1.1548,
    "unitMoney": ""
},
{
    "x": 1526572800000,
    "y": 1.2493,
    "equityReturn": 0.6607,
    "unitMoney": ""
},
{
    "x": 1526832000000,
    "y": 1.2685,
    "equityReturn": 1.5369,
    "unitMoney": ""
},
{
    "x": 1526918400000,
    "y": 1.2716,
    "equityReturn": 0.2444,
    "unitMoney": ""
},
{
    "x": 1527004800000,
    "y": 1.2667,
    "equityReturn": -0.3853,
    "unitMoney": ""
},
{
    "x": 1527091200000,
    "y": 1.2549,
    "equityReturn": -0.9316,
    "unitMoney": ""
},
{
    "x": 1527177600000,
    "y": 1.246,
    "equityReturn": -0.7092,
    "unitMoney": ""
},
{
    "x": 1527436800000,
    "y": 1.243,
    "equityReturn": -0.2408,
    "unitMoney": ""
},
{
    "x": 1527523200000,
    "y": 1.2289,
    "equityReturn": -1.1344,
    "unitMoney": ""
},
{
    "x": 1527609600000,
    "y": 1.2029,
    "equityReturn": -2.1157,
    "unitMoney": ""
},
{
    "x": 1527696000000,
    "y": 1.2199,
    "equityReturn": 1.4133,
    "unitMoney": ""
},
{
    "x": 1527782400000,
    "y": 1.1933,
    "equityReturn": -2.1805,
    "unitMoney": ""
},
{
    "x": 1528041600000,
    "y": 1.1886,
    "equityReturn": -0.3939,
    "unitMoney": ""
},
{
    "x": 1528128000000,
    "y": 1.2213,
    "equityReturn": 2.7511,
    "unitMoney": ""
},
{
    "x": 1528214400000,
    "y": 1.2264,
    "equityReturn": 0.4176,
    "unitMoney": ""
},
{
    "x": 1528300800000,
    "y": 1.2176,
    "equityReturn": -0.7175,
    "unitMoney": ""
},
{
    "x": 1528387200000,
    "y": 1.2042,
    "equityReturn": -1.1005,
    "unitMoney": ""
},
{
    "x": 1528646400000,
    "y": 1.2013,
    "equityReturn": -0.2408,
    "unitMoney": ""
},
{
    "x": 1528732800000,
    "y": 1.2141,
    "equityReturn": 1.0655,
    "unitMoney": ""
},
{
    "x": 1528819200000,
    "y": 1.1974,
    "equityReturn": -1.3755,
    "unitMoney": ""
},
{
    "x": 1528905600000,
    "y": 1.1896,
    "equityReturn": -0.6514,
    "unitMoney": ""
},
{
    "x": 1528992000000,
    "y": 1.1797,
    "equityReturn": -0.8322,
    "unitMoney": ""
},
{
    "x": 1529337600000,
    "y": 1.1246,
    "equityReturn": -4.6707,
    "unitMoney": ""
},
{
    "x": 1529424000000,
    "y": 1.1308,
    "equityReturn": 0.5513,
    "unitMoney": ""
},
{
    "x": 1529510400000,
    "y": 1.1017,
    "equityReturn": -2.5734,
    "unitMoney": ""
},
{
    "x": 1529596800000,
    "y": 1.1227,
    "equityReturn": 1.9061,
    "unitMoney": ""
},
{
    "x": 1529856000000,
    "y": 1.1034,
    "equityReturn": -1.7191,
    "unitMoney": ""
},
{
    "x": 1529942400000,
    "y": 1.1138,
    "equityReturn": 0.9425,
    "unitMoney": ""
},
{
    "x": 1530028800000,
    "y": 1.1016,
    "equityReturn": -1.0953,
    "unitMoney": ""
},
{
    "x": 1530115200000,
    "y": 1.0958,
    "equityReturn": -0.5265,
    "unitMoney": ""
},
{
    "x": 1530201600000,
    "y": 1.1426,
    "equityReturn": 4.2709,
    "unitMoney": ""
},
{
    "x": 1530288000000,
    "y": 1.1426,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1530460800000,
    "y": 1.1288,
    "equityReturn": -1.2078,
    "unitMoney": ""
},
{
    "x": 1530547200000,
    "y": 1.1404,
    "equityReturn": 1.0276,
    "unitMoney": ""
},
{
    "x": 1530633600000,
    "y": 1.1063,
    "equityReturn": -2.9902,
    "unitMoney": ""
},
{
    "x": 1530720000000,
    "y": 1.0892,
    "equityReturn": -1.5457,
    "unitMoney": ""
},
{
    "x": 1530806400000,
    "y": 1.0986,
    "equityReturn": 0.863,
    "unitMoney": ""
},
{
    "x": 1531065600000,
    "y": 1.132,
    "equityReturn": 3.0402,
    "unitMoney": ""
},
{
    "x": 1531152000000,
    "y": 1.1348,
    "equityReturn": 0.2473,
    "unitMoney": ""
},
{
    "x": 1531238400000,
    "y": 1.1154,
    "equityReturn": -1.7096,
    "unitMoney": ""
},
{
    "x": 1531324800000,
    "y": 1.1517,
    "equityReturn": 3.2544,
    "unitMoney": ""
},
{
    "x": 1531411200000,
    "y": 1.1556,
    "equityReturn": 0.3386,
    "unitMoney": ""
},
{
    "x": 1531670400000,
    "y": 1.165,
    "equityReturn": 0.8134,
    "unitMoney": ""
},
{
    "x": 1531756800000,
    "y": 1.1665,
    "equityReturn": 0.1288,
    "unitMoney": ""
},
{
    "x": 1531843200000,
    "y": 1.1536,
    "equityReturn": -1.1059,
    "unitMoney": ""
},
{
    "x": 1531929600000,
    "y": 1.1486,
    "equityReturn": -0.4334,
    "unitMoney": ""
},
{
    "x": 1532016000000,
    "y": 1.1715,
    "equityReturn": 1.9937,
    "unitMoney": ""
},
{
    "x": 1532275200000,
    "y": 1.1819,
    "equityReturn": 0.8878,
    "unitMoney": ""
},
{
    "x": 1532361600000,
    "y": 1.1889,
    "equityReturn": 0.5923,
    "unitMoney": ""
},
{
    "x": 1532448000000,
    "y": 1.1948,
    "equityReturn": 0.4963,
    "unitMoney": ""
},
{
    "x": 1532534400000,
    "y": 1.1704,
    "equityReturn": -2.0422,
    "unitMoney": ""
},
{
    "x": 1532620800000,
    "y": 1.1642,
    "equityReturn": -0.5297,
    "unitMoney": ""
},
{
    "x": 1532880000000,
    "y": 1.1482,
    "equityReturn": -1.3743,
    "unitMoney": ""
},
{
    "x": 1532966400000,
    "y": 1.1451,
    "equityReturn": -0.27,
    "unitMoney": ""
},
{
    "x": 1533052800000,
    "y": 1.1345,
    "equityReturn": -0.9257,
    "unitMoney": ""
},
{
    "x": 1533139200000,
    "y": 1.1208,
    "equityReturn": -1.2076,
    "unitMoney": ""
},
{
    "x": 1533225600000,
    "y": 1.0939,
    "equityReturn": -2.4001,
    "unitMoney": ""
},
{
    "x": 1533484800000,
    "y": 1.0717,
    "equityReturn": -2.0294,
    "unitMoney": ""
},
{
    "x": 1533571200000,
    "y": 1.1116,
    "equityReturn": 3.7231,
    "unitMoney": ""
},
{
    "x": 1533657600000,
    "y": 1.0903,
    "equityReturn": -1.9162,
    "unitMoney": ""
},
{
    "x": 1533744000000,
    "y": 1.1309,
    "equityReturn": 3.7237,
    "unitMoney": ""
},
{
    "x": 1533830400000,
    "y": 1.1374,
    "equityReturn": 0.5748,
    "unitMoney": ""
},
{
    "x": 1534089600000,
    "y": 1.15,
    "equityReturn": 1.1078,
    "unitMoney": ""
},
{
    "x": 1534176000000,
    "y": 1.1417,
    "equityReturn": -0.7217,
    "unitMoney": ""
},
{
    "x": 1534262400000,
    "y": 1.1184,
    "equityReturn": -2.0408,
    "unitMoney": ""
},
{
    "x": 1534348800000,
    "y": 1.1062,
    "equityReturn": -1.0908,
    "unitMoney": ""
},
{
    "x": 1534435200000,
    "y": 1.0922,
    "equityReturn": -1.2656,
    "unitMoney": ""
},
{
    "x": 1534694400000,
    "y": 1.1005,
    "equityReturn": 0.7599,
    "unitMoney": ""
},
{
    "x": 1534780800000,
    "y": 1.1113,
    "equityReturn": 0.9814,
    "unitMoney": ""
},
{
    "x": 1534867200000,
    "y": 1.1017,
    "equityReturn": -0.8639,
    "unitMoney": ""
},
{
    "x": 1534953600000,
    "y": 1.1147,
    "equityReturn": 1.18,
    "unitMoney": ""
},
{
    "x": 1535040000000,
    "y": 1.111,
    "equityReturn": -0.3319,
    "unitMoney": ""
},
{
    "x": 1535299200000,
    "y": 1.1395,
    "equityReturn": 2.5653,
    "unitMoney": ""
},
{
    "x": 1535385600000,
    "y": 1.1463,
    "equityReturn": 0.5968,
    "unitMoney": ""
},
{
    "x": 1535472000000,
    "y": 1.1468,
    "equityReturn": 0.0436,
    "unitMoney": ""
},
{
    "x": 1535558400000,
    "y": 1.1287,
    "equityReturn": -1.5783,
    "unitMoney": ""
},
{
    "x": 1535644800000,
    "y": 1.1239,
    "equityReturn": -0.4253,
    "unitMoney": ""
},
{
    "x": 1535904000000,
    "y": 1.1301,
    "equityReturn": 0.5517,
    "unitMoney": ""
},
{
    "x": 1535990400000,
    "y": 1.1551,
    "equityReturn": 2.2122,
    "unitMoney": ""
},
{
    "x": 1536076800000,
    "y": 1.1335,
    "equityReturn": -1.87,
    "unitMoney": ""
},
{
    "x": 1536163200000,
    "y": 1.1267,
    "equityReturn": -0.5999,
    "unitMoney": ""
},
{
    "x": 1536249600000,
    "y": 1.1171,
    "equityReturn": -0.852,
    "unitMoney": ""
},
{
    "x": 1536508800000,
    "y": 1.0952,
    "equityReturn": -1.9604,
    "unitMoney": ""
},
{
    "x": 1536595200000,
    "y": 1.0996,
    "equityReturn": 0.4018,
    "unitMoney": ""
},
{
    "x": 1536681600000,
    "y": 1.0918,
    "equityReturn": -0.7093,
    "unitMoney": ""
},
{
    "x": 1536768000000,
    "y": 1.1039,
    "equityReturn": 1.1083,
    "unitMoney": ""
},
{
    "x": 1536854400000,
    "y": 1.0787,
    "equityReturn": -2.2828,
    "unitMoney": ""
},
{
    "x": 1537113600000,
    "y": 1.0673,
    "equityReturn": -1.0568,
    "unitMoney": ""
},
{
    "x": 1537200000000,
    "y": 1.0894,
    "equityReturn": 2.0706,
    "unitMoney": ""
},
{
    "x": 1537286400000,
    "y": 1.1029,
    "equityReturn": 1.2392,
    "unitMoney": ""
},
{
    "x": 1537372800000,
    "y": 1.1,
    "equityReturn": -0.2629,
    "unitMoney": ""
},
{
    "x": 1537459200000,
    "y": 1.1151,
    "equityReturn": 1.3727,
    "unitMoney": ""
},
{
    "x": 1537804800000,
    "y": 1.1115,
    "equityReturn": -0.3228,
    "unitMoney": ""
},
{
    "x": 1537891200000,
    "y": 1.1208,
    "equityReturn": 0.8367,
    "unitMoney": ""
},
{
    "x": 1537977600000,
    "y": 1.1088,
    "equityReturn": -1.0707,
    "unitMoney": ""
},
{
    "x": 1538064000000,
    "y": 1.1183,
    "equityReturn": 0.8568,
    "unitMoney": ""
},
{
    "x": 1538928000000,
    "y": 1.0719,
    "equityReturn": -4.1492,
    "unitMoney": ""
},
{
    "x": 1539014400000,
    "y": 1.0695,
    "equityReturn": -0.2239,
    "unitMoney": ""
},
{
    "x": 1539100800000,
    "y": 1.0675,
    "equityReturn": -0.187,
    "unitMoney": ""
},
{
    "x": 1539187200000,
    "y": 1.0002,
    "equityReturn": -6.3044,
    "unitMoney": ""
},
{
    "x": 1539273600000,
    "y": 1.0217,
    "equityReturn": 2.1496,
    "unitMoney": ""
},
{
    "x": 1539532800000,
    "y": 1.0132,
    "equityReturn": -0.8319,
    "unitMoney": ""
},
{
    "x": 1539619200000,
    "y": 0.9955,
    "equityReturn": -1.7469,
    "unitMoney": ""
},
{
    "x": 1539705600000,
    "y": 1.0103,
    "equityReturn": 1.4867,
    "unitMoney": ""
},
{
    "x": 1539792000000,
    "y": 0.9945,
    "equityReturn": -1.5639,
    "unitMoney": ""
},
{
    "x": 1539878400000,
    "y": 1.0372,
    "equityReturn": 4.2936,
    "unitMoney": ""
},
{
    "x": 1540137600000,
    "y": 1.0897,
    "equityReturn": 5.0617,
    "unitMoney": ""
},
{
    "x": 1540224000000,
    "y": 1.0676,
    "equityReturn": -2.0281,
    "unitMoney": ""
},
{
    "x": 1540310400000,
    "y": 1.0629,
    "equityReturn": -0.4402,
    "unitMoney": ""
},
{
    "x": 1540396800000,
    "y": 1.062,
    "equityReturn": -0.0847,
    "unitMoney": ""
},
{
    "x": 1540483200000,
    "y": 1.0477,
    "equityReturn": -1.3465,
    "unitMoney": ""
},
{
    "x": 1540742400000,
    "y": 1.0328,
    "equityReturn": -1.4222,
    "unitMoney": ""
},
{
    "x": 1540828800000,
    "y": 1.0425,
    "equityReturn": 0.9392,
    "unitMoney": ""
},
{
    "x": 1540915200000,
    "y": 1.0535,
    "equityReturn": 1.0552,
    "unitMoney": ""
},
{
    "x": 1541001600000,
    "y": 1.0609,
    "equityReturn": 0.7024,
    "unitMoney": ""
},
{
    "x": 1541088000000,
    "y": 1.1016,
    "equityReturn": 3.8364,
    "unitMoney": ""
},
{
    "x": 1541347200000,
    "y": 1.0934,
    "equityReturn": -0.7444,
    "unitMoney": ""
},
{
    "x": 1541433600000,
    "y": 1.0911,
    "equityReturn": -0.2104,
    "unitMoney": ""
},
{
    "x": 1541520000000,
    "y": 1.0915,
    "equityReturn": 0.0367,
    "unitMoney": ""
},
{
    "x": 1541606400000,
    "y": 1.0816,
    "equityReturn": -0.907,
    "unitMoney": ""
},
{
    "x": 1541692800000,
    "y": 1.078,
    "equityReturn": -0.3328,
    "unitMoney": ""
},
{
    "x": 1541952000000,
    "y": 1.1043,
    "equityReturn": 2.4397,
    "unitMoney": ""
},
{
    "x": 1542038400000,
    "y": 1.111,
    "equityReturn": 0.6067,
    "unitMoney": ""
},
{
    "x": 1542124800000,
    "y": 1.1027,
    "equityReturn": -0.7471,
    "unitMoney": ""
},
{
    "x": 1542211200000,
    "y": 1.1164,
    "equityReturn": 1.2424,
    "unitMoney": ""
},
{
    "x": 1542297600000,
    "y": 1.1259,
    "equityReturn": 0.8509,
    "unitMoney": ""
},
{
    "x": 1542556800000,
    "y": 1.1296,
    "equityReturn": 0.3286,
    "unitMoney": ""
},
{
    "x": 1542643200000,
    "y": 1.1008,
    "equityReturn": -2.5496,
    "unitMoney": ""
},
{
    "x": 1542729600000,
    "y": 1.0985,
    "equityReturn": -0.2089,
    "unitMoney": ""
},
{
    "x": 1542816000000,
    "y": 1.0933,
    "equityReturn": -0.4734,
    "unitMoney": ""
},
{
    "x": 1542902400000,
    "y": 1.0659,
    "equityReturn": -2.5062,
    "unitMoney": ""
},
{
    "x": 1543161600000,
    "y": 1.0637,
    "equityReturn": -0.2064,
    "unitMoney": ""
},
{
    "x": 1543248000000,
    "y": 1.0677,
    "equityReturn": 0.376,
    "unitMoney": ""
},
{
    "x": 1543334400000,
    "y": 1.0858,
    "equityReturn": 1.6952,
    "unitMoney": ""
},
{
    "x": 1543420800000,
    "y": 1.0664,
    "equityReturn": -1.7867,
    "unitMoney": ""
},
{
    "x": 1543507200000,
    "y": 1.0803,
    "equityReturn": 1.3035,
    "unitMoney": ""
},
{
    "x": 1543766400000,
    "y": 1.1106,
    "equityReturn": 2.8048,
    "unitMoney": ""
},
{
    "x": 1543852800000,
    "y": 1.1114,
    "equityReturn": 0.072,
    "unitMoney": ""
},
{
    "x": 1543939200000,
    "y": 1.1193,
    "equityReturn": 0.7108,
    "unitMoney": ""
},
{
    "x": 1544025600000,
    "y": 1.0891,
    "equityReturn": -2.6981,
    "unitMoney": ""
},
{
    "x": 1544112000000,
    "y": 1.0924,
    "equityReturn": 0.303,
    "unitMoney": ""
},
{
    "x": 1544371200000,
    "y": 1.0867,
    "equityReturn": -0.5218,
    "unitMoney": ""
},
{
    "x": 1544457600000,
    "y": 1.0945,
    "equityReturn": 0.7178,
    "unitMoney": ""
},
{
    "x": 1544544000000,
    "y": 1.0967,
    "equityReturn": 0.201,
    "unitMoney": ""
},
{
    "x": 1544630400000,
    "y": 1.1088,
    "equityReturn": 1.1033,
    "unitMoney": ""
},
{
    "x": 1544716800000,
    "y": 1.0817,
    "equityReturn": -2.4441,
    "unitMoney": ""
},
{
    "x": 1544976000000,
    "y": 1.0669,
    "equityReturn": -1.3682,
    "unitMoney": ""
},
{
    "x": 1545062400000,
    "y": 1.0616,
    "equityReturn": -0.4968,
    "unitMoney": ""
},
{
    "x": 1545148800000,
    "y": 1.0397,
    "equityReturn": -2.0629,
    "unitMoney": ""
},
{
    "x": 1545235200000,
    "y": 1.0451,
    "equityReturn": 0.5194,
    "unitMoney": ""
},
{
    "x": 1545321600000,
    "y": 1.0385,
    "equityReturn": -0.6315,
    "unitMoney": ""
},
{
    "x": 1545580800000,
    "y": 1.049,
    "equityReturn": 1.0111,
    "unitMoney": ""
},
{
    "x": 1545667200000,
    "y": 1.0447,
    "equityReturn": -0.4099,
    "unitMoney": ""
},
{
    "x": 1545753600000,
    "y": 1.0394,
    "equityReturn": -0.5073,
    "unitMoney": ""
},
{
    "x": 1545840000000,
    "y": 1.0282,
    "equityReturn": -1.0775,
    "unitMoney": ""
},
{
    "x": 1545926400000,
    "y": 1.0339,
    "equityReturn": 0.5544,
    "unitMoney": ""
},
{
    "x": 1546185600000,
    "y": 1.0338,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1546358400000,
    "y": 1.0211,
    "equityReturn": -1.238,
    "unitMoney": ""
},
{
    "x": 1546444800000,
    "y": 1.0055,
    "equityReturn": -1.5278,
    "unitMoney": ""
},
{
    "x": 1546531200000,
    "y": 1.0312,
    "equityReturn": 2.5559,
    "unitMoney": ""
},
{
    "x": 1546790400000,
    "y": 1.0605,
    "equityReturn": 2.8413,
    "unitMoney": ""
},
{
    "x": 1546876800000,
    "y": 1.0579,
    "equityReturn": -0.2452,
    "unitMoney": ""
},
{
    "x": 1546963200000,
    "y": 1.0545,
    "equityReturn": -0.3214,
    "unitMoney": ""
},
{
    "x": 1547049600000,
    "y": 1.0606,
    "equityReturn": 0.5785,
    "unitMoney": ""
},
{
    "x": 1547136000000,
    "y": 1.062,
    "equityReturn": 0.132,
    "unitMoney": ""
},
{
    "x": 1547395200000,
    "y": 1.0477,
    "equityReturn": -1.3465,
    "unitMoney": ""
},
{
    "x": 1547481600000,
    "y": 1.0689,
    "equityReturn": 2.0235,
    "unitMoney": ""
},
{
    "x": 1547568000000,
    "y": 1.0632,
    "equityReturn": -0.5333,
    "unitMoney": ""
},
{
    "x": 1547654400000,
    "y": 1.0515,
    "equityReturn": -1.1005,
    "unitMoney": ""
},
{
    "x": 1547740800000,
    "y": 1.0642,
    "equityReturn": 1.2078,
    "unitMoney": ""
},
{
    "x": 1548000000000,
    "y": 1.0766,
    "equityReturn": 1.1652,
    "unitMoney": ""
},
{
    "x": 1548086400000,
    "y": 1.0679,
    "equityReturn": -0.8081,
    "unitMoney": ""
},
{
    "x": 1548172800000,
    "y": 1.0748,
    "equityReturn": 0.6461,
    "unitMoney": ""
},
{
    "x": 1548259200000,
    "y": 1.0875,
    "equityReturn": 1.1816,
    "unitMoney": ""
},
{
    "x": 1548345600000,
    "y": 1.0979,
    "equityReturn": 0.9563,
    "unitMoney": ""
},
{
    "x": 1548604800000,
    "y": 1.1053,
    "equityReturn": 0.674,
    "unitMoney": ""
},
{
    "x": 1548691200000,
    "y": 1.0966,
    "equityReturn": -0.7871,
    "unitMoney": ""
},
{
    "x": 1548777600000,
    "y": 1.0809,
    "equityReturn": -1.4317,
    "unitMoney": ""
},
{
    "x": 1548864000000,
    "y": 1.0792,
    "equityReturn": -0.1573,
    "unitMoney": ""
},
{
    "x": 1548950400000,
    "y": 1.1106,
    "equityReturn": 2.9096,
    "unitMoney": ""
},
{
    "x": 1549814400000,
    "y": 1.1448,
    "equityReturn": 3.0794,
    "unitMoney": ""
},
{
    "x": 1549900800000,
    "y": 1.149,
    "equityReturn": 0.3669,
    "unitMoney": ""
},
{
    "x": 1549987200000,
    "y": 1.1705,
    "equityReturn": 1.8712,
    "unitMoney": ""
},
{
    "x": 1550073600000,
    "y": 1.1766,
    "equityReturn": 0.5211,
    "unitMoney": ""
},
{
    "x": 1550160000000,
    "y": 1.163,
    "equityReturn": -1.1559,
    "unitMoney": ""
},
{
    "x": 1550419200000,
    "y": 1.2081,
    "equityReturn": 3.8779,
    "unitMoney": ""
},
{
    "x": 1550505600000,
    "y": 1.2026,
    "equityReturn": -0.4553,
    "unitMoney": ""
},
{
    "x": 1550592000000,
    "y": 1.206,
    "equityReturn": 0.2827,
    "unitMoney": ""
},
{
    "x": 1550678400000,
    "y": 1.2125,
    "equityReturn": 0.539,
    "unitMoney": ""
},
{
    "x": 1550764800000,
    "y": 1.2492,
    "equityReturn": 3.0268,
    "unitMoney": ""
},
{
    "x": 1551024000000,
    "y": 1.3047,
    "equityReturn": 4.4428,
    "unitMoney": ""
},
{
    "x": 1551110400000,
    "y": 1.2953,
    "equityReturn": -0.7205,
    "unitMoney": ""
},
{
    "x": 1551196800000,
    "y": 1.2645,
    "equityReturn": -2.3778,
    "unitMoney": ""
},
{
    "x": 1551283200000,
    "y": 1.2714,
    "equityReturn": 0.5457,
    "unitMoney": ""
},
{
    "x": 1551369600000,
    "y": 1.284,
    "equityReturn": 0.991,
    "unitMoney": ""
},
{
    "x": 1551628800000,
    "y": 1.3021,
    "equityReturn": 1.4097,
    "unitMoney": ""
},
{
    "x": 1551715200000,
    "y": 1.3261,
    "equityReturn": 1.8432,
    "unitMoney": ""
},
{
    "x": 1551801600000,
    "y": 1.3273,
    "equityReturn": 0.0905,
    "unitMoney": ""
},
{
    "x": 1551888000000,
    "y": 1.3232,
    "equityReturn": -0.3089,
    "unitMoney": ""
},
{
    "x": 1551974400000,
    "y": 1.293,
    "equityReturn": -2.2823,
    "unitMoney": ""
},
{
    "x": 1552233600000,
    "y": 1.3514,
    "equityReturn": 4.5166,
    "unitMoney": ""
},
{
    "x": 1552320000000,
    "y": 1.3985,
    "equityReturn": 3.4853,
    "unitMoney": ""
},
{
    "x": 1552406400000,
    "y": 1.3586,
    "equityReturn": -2.8531,
    "unitMoney": ""
},
{
    "x": 1552492800000,
    "y": 1.3285,
    "equityReturn": -2.2155,
    "unitMoney": ""
},
{
    "x": 1552579200000,
    "y": 1.3419,
    "equityReturn": 1.0087,
    "unitMoney": ""
},
{
    "x": 1552838400000,
    "y": 1.3662,
    "equityReturn": 1.8109,
    "unitMoney": ""
},
{
    "x": 1552924800000,
    "y": 1.3698,
    "equityReturn": 0.2635,
    "unitMoney": ""
},
{
    "x": 1553011200000,
    "y": 1.3507,
    "equityReturn": -1.3944,
    "unitMoney": ""
},
{
    "x": 1553097600000,
    "y": 1.3589,
    "equityReturn": 0.6071,
    "unitMoney": ""
},
{
    "x": 1553184000000,
    "y": 1.3575,
    "equityReturn": -0.103,
    "unitMoney": ""
},
{
    "x": 1553443200000,
    "y": 1.3368,
    "equityReturn": -1.5249,
    "unitMoney": ""
},
{
    "x": 1553529600000,
    "y": 1.316,
    "equityReturn": -1.556,
    "unitMoney": ""
},
{
    "x": 1553616000000,
    "y": 1.3277,
    "equityReturn": 0.8891,
    "unitMoney": ""
},
{
    "x": 1553702400000,
    "y": 1.3263,
    "equityReturn": -0.1054,
    "unitMoney": ""
},
{
    "x": 1553788800000,
    "y": 1.364,
    "equityReturn": 2.8425,
    "unitMoney": ""
},
{
    "x": 1554048000000,
    "y": 1.4137,
    "equityReturn": 3.6437,
    "unitMoney": ""
},
{
    "x": 1554134400000,
    "y": 1.4146,
    "equityReturn": 0.0637,
    "unitMoney": ""
},
{
    "x": 1554220800000,
    "y": 1.4204,
    "equityReturn": 0.41,
    "unitMoney": ""
},
{
    "x": 1554307200000,
    "y": 1.4263,
    "equityReturn": 0.4154,
    "unitMoney": ""
},
{
    "x": 1554652800000,
    "y": 1.4016,
    "equityReturn": -1.7318,
    "unitMoney": ""
},
{
    "x": 1554739200000,
    "y": 1.4107,
    "equityReturn": 0.6493,
    "unitMoney": ""
},
{
    "x": 1554825600000,
    "y": 1.4081,
    "equityReturn": -0.1843,
    "unitMoney": ""
},
{
    "x": 1554912000000,
    "y": 1.3841,
    "equityReturn": -1.7044,
    "unitMoney": ""
},
{
    "x": 1554998400000,
    "y": 1.3809,
    "equityReturn": -0.2312,
    "unitMoney": ""
},
{
    "x": 1555257600000,
    "y": 1.3685,
    "equityReturn": -0.898,
    "unitMoney": ""
},
{
    "x": 1555344000000,
    "y": 1.3926,
    "equityReturn": 1.7611,
    "unitMoney": ""
},
{
    "x": 1555430400000,
    "y": 1.4182,
    "equityReturn": 1.8383,
    "unitMoney": ""
},
{
    "x": 1555516800000,
    "y": 1.4082,
    "equityReturn": -0.7051,
    "unitMoney": ""
},
{
    "x": 1555603200000,
    "y": 1.4227,
    "equityReturn": 1.0297,
    "unitMoney": ""
},
{
    "x": 1555862400000,
    "y": 1.4018,
    "equityReturn": -1.469,
    "unitMoney": ""
},
{
    "x": 1555948800000,
    "y": 1.3934,
    "equityReturn": -0.5992,
    "unitMoney": ""
},
{
    "x": 1556035200000,
    "y": 1.4017,
    "equityReturn": 0.5957,
    "unitMoney": ""
},
{
    "x": 1556121600000,
    "y": 1.3664,
    "equityReturn": -2.5184,
    "unitMoney": ""
},
{
    "x": 1556208000000,
    "y": 1.3509,
    "equityReturn": -1.1344,
    "unitMoney": ""
},
{
    "x": 1556467200000,
    "y": 1.3394,
    "equityReturn": -0.8513,
    "unitMoney": ""
},
{
    "x": 1556553600000,
    "y": 1.3406,
    "equityReturn": 0.0896,
    "unitMoney": ""
},
{
    "x": 1557072000000,
    "y": 1.2569,
    "equityReturn": -6.2435,
    "unitMoney": ""
},
{
    "x": 1557158400000,
    "y": 1.2742,
    "equityReturn": 1.3764,
    "unitMoney": ""
},
{
    "x": 1557244800000,
    "y": 1.2565,
    "equityReturn": -1.3891,
    "unitMoney": ""
},
{
    "x": 1557331200000,
    "y": 1.243,
    "equityReturn": -1.0744,
    "unitMoney": ""
},
{
    "x": 1557417600000,
    "y": 1.2937,
    "equityReturn": 4.0788,
    "unitMoney": ""
},
{
    "x": 1557676800000,
    "y": 1.2706,
    "equityReturn": -1.7856,
    "unitMoney": ""
},
{
    "x": 1557763200000,
    "y": 1.2631,
    "equityReturn": -0.5903,
    "unitMoney": ""
},
{
    "x": 1557849600000,
    "y": 1.2992,
    "equityReturn": 2.858,
    "unitMoney": ""
},
{
    "x": 1557936000000,
    "y": 1.2988,
    "equityReturn": -0.0308,
    "unitMoney": ""
},
{
    "x": 1558022400000,
    "y": 1.2652,
    "equityReturn": -2.587,
    "unitMoney": ""
},
{
    "x": 1558281600000,
    "y": 1.2392,
    "equityReturn": -2.055,
    "unitMoney": ""
},
{
    "x": 1558368000000,
    "y": 1.2603,
    "equityReturn": 1.7027,
    "unitMoney": ""
},
{
    "x": 1558454400000,
    "y": 1.2625,
    "equityReturn": 0.1746,
    "unitMoney": ""
},
{
    "x": 1558540800000,
    "y": 1.2271,
    "equityReturn": -2.804,
    "unitMoney": ""
},
{
    "x": 1558627200000,
    "y": 1.2313,
    "equityReturn": 0.3423,
    "unitMoney": ""
},
{
    "x": 1558886400000,
    "y": 1.25,
    "equityReturn": 1.5187,
    "unitMoney": ""
},
{
    "x": 1558972800000,
    "y": 1.2637,
    "equityReturn": 1.096,
    "unitMoney": ""
},
{
    "x": 1559059200000,
    "y": 1.2551,
    "equityReturn": -0.6805,
    "unitMoney": ""
},
{
    "x": 1559145600000,
    "y": 1.2427,
    "equityReturn": -0.988,
    "unitMoney": ""
},
{
    "x": 1559232000000,
    "y": 1.2446,
    "equityReturn": 0.1529,
    "unitMoney": ""
},
{
    "x": 1559491200000,
    "y": 1.2388,
    "equityReturn": -0.466,
    "unitMoney": ""
},
{
    "x": 1559577600000,
    "y": 1.2253,
    "equityReturn": -1.0898,
    "unitMoney": ""
},
{
    "x": 1559664000000,
    "y": 1.2264,
    "equityReturn": 0.0898,
    "unitMoney": ""
},
{
    "x": 1559750400000,
    "y": 1.2034,
    "equityReturn": -1.8754,
    "unitMoney": ""
},
{
    "x": 1560096000000,
    "y": 1.2226,
    "equityReturn": 1.5955,
    "unitMoney": ""
},
{
    "x": 1560182400000,
    "y": 1.2571,
    "equityReturn": 2.8219,
    "unitMoney": ""
},
{
    "x": 1560268800000,
    "y": 1.2454,
    "equityReturn": -0.9307,
    "unitMoney": ""
},
{
    "x": 1560355200000,
    "y": 1.2409,
    "equityReturn": -0.3613,
    "unitMoney": ""
},
{
    "x": 1560441600000,
    "y": 1.2264,
    "equityReturn": -1.1685,
    "unitMoney": ""
},
{
    "x": 1560700800000,
    "y": 1.219,
    "equityReturn": -0.6034,
    "unitMoney": ""
},
{
    "x": 1560787200000,
    "y": 1.2234,
    "equityReturn": 0.361,
    "unitMoney": ""
},
{
    "x": 1560873600000,
    "y": 1.2498,
    "equityReturn": 2.1579,
    "unitMoney": ""
},
{
    "x": 1560960000000,
    "y": 1.281,
    "equityReturn": 2.4964,
    "unitMoney": ""
},
{
    "x": 1561046400000,
    "y": 1.2896,
    "equityReturn": 0.6714,
    "unitMoney": ""
},
{
    "x": 1561305600000,
    "y": 1.2895,
    "equityReturn": -0.0078,
    "unitMoney": ""
},
{
    "x": 1561392000000,
    "y": 1.278,
    "equityReturn": -0.8918,
    "unitMoney": ""
},
{
    "x": 1561478400000,
    "y": 1.2909,
    "equityReturn": 1.0094,
    "unitMoney": ""
},
{
    "x": 1561564800000,
    "y": 1.3191,
    "equityReturn": 2.1845,
    "unitMoney": ""
},
{
    "x": 1561651200000,
    "y": 1.3116,
    "equityReturn": -0.5686,
    "unitMoney": ""
},
{
    "x": 1561824000000,
    "y": 1.3115,
    "equityReturn": 0,
    "unitMoney": ""
},
{
    "x": 1561910400000,
    "y": 1.3648,
    "equityReturn": 4.0561,
    "unitMoney": ""
},
{
    "x": 1561996800000,
    "y": 1.3692,
    "equityReturn": 0.3224,
    "unitMoney": ""
},
{
    "x": 1562083200000,
    "y": 1.3482,
    "equityReturn": -1.5337,
    "unitMoney": ""
},
{
    "x": 1562169600000,
    "y": 1.3379,
    "equityReturn": -0.764,
    "unitMoney": ""
},
{
    "x": 1562256000000,
    "y": 1.3503,
    "equityReturn": 0.9268,
    "unitMoney": ""
},
{
    "x": 1562515200000,
    "y": 1.3267,
    "equityReturn": -1.7478,
    "unitMoney": ""
},
{
    "x": 1562601600000,
    "y": 1.3284,
    "equityReturn": 0.1281,
    "unitMoney": ""
},
{
    "x": 1562688000000,
    "y": 1.3333,
    "equityReturn": 0.3689,
    "unitMoney": ""
},
{
    "x": 1562774400000,
    "y": 1.3284,
    "equityReturn": -0.3675,
    "unitMoney": ""
},
{
    "x": 1562860800000,
    "y": 1.3342,
    "equityReturn": 0.4366,
    "unitMoney": ""
},
{
    "x": 1563120000000,
    "y": 1.3463,
    "equityReturn": 0.9069,
    "unitMoney": ""
},
{
    "x": 1563206400000,
    "y": 1.3405,
    "equityReturn": -0.4308,
    "unitMoney": ""
},
{
    "x": 1563292800000,
    "y": 1.3409,
    "equityReturn": 0.0298,
    "unitMoney": ""
},
{
    "x": 1563379200000,
    "y": 1.3191,
    "equityReturn": -1.6258,
    "unitMoney": ""
},
{
    "x": 1563465600000,
    "y": 1.3279,
    "equityReturn": 0.6671,
    "unitMoney": ""
},
{
    "x": 1563724800000,
    "y": 1.318,
    "equityReturn": -0.7455,
    "unitMoney": ""
},
{
    "x": 1563811200000,
    "y": 1.3346,
    "equityReturn": 1.2595,
    "unitMoney": ""
},
{
    "x": 1563897600000,
    "y": 1.3595,
    "equityReturn": 1.8657,
    "unitMoney": ""
},
{
    "x": 1563984000000,
    "y": 1.3691,
    "equityReturn": 0.7061,
    "unitMoney": ""
},
{
    "x": 1564070400000,
    "y": 1.3795,
    "equityReturn": 0.7596,
    "unitMoney": ""
},
{
    "x": 1564329600000,
    "y": 1.3813,
    "equityReturn": 0.1305,
    "unitMoney": ""
},
{
    "x": 1564416000000,
    "y": 1.3837,
    "equityReturn": 0.1737,
    "unitMoney": ""
},
{
    "x": 1564502400000,
    "y": 1.378,
    "equityReturn": -0.4119,
    "unitMoney": ""
},
{
    "x": 1564588800000,
    "y": 1.3728,
    "equityReturn": -0.3774,
    "unitMoney": ""
},
{
    "x": 1564675200000,
    "y": 1.3603,
    "equityReturn": -0.9105,
    "unitMoney": ""
},
{
    "x": 1564934400000,
    "y": 1.3396,
    "equityReturn": -1.5217,
    "unitMoney": ""
},
{
    "x": 1565020800000,
    "y": 1.3358,
    "equityReturn": -0.2837,
    "unitMoney": ""
},
{
    "x": 1565107200000,
    "y": 1.3318,
    "equityReturn": -0.2994,
    "unitMoney": ""
},
{
    "x": 1565193600000,
    "y": 1.3503,
    "equityReturn": 1.3891,
    "unitMoney": ""
},
{
    "x": 1565280000000,
    "y": 1.3381,
    "equityReturn": -0.9035,
    "unitMoney": ""
},
{
    "x": 1565539200000,
    "y": 1.3816,
    "equityReturn": 3.2509,
    "unitMoney": ""
},
{
    "x": 1565625600000,
    "y": 1.3802,
    "equityReturn": -0.1013,
    "unitMoney": ""
},
{
    "x": 1565712000000,
    "y": 1.3862,
    "equityReturn": 0.4347,
    "unitMoney": ""
},
{
    "x": 1565798400000,
    "y": 1.4006,
    "equityReturn": 1.0388,
    "unitMoney": ""
},
{
    "x": 1565884800000,
    "y": 1.4076,
    "equityReturn": 0.4998,
    "unitMoney": ""
},
{
    "x": 1566144000000,
    "y": 1.4485,
    "equityReturn": 2.9057,
    "unitMoney": ""
},
{
    "x": 1566230400000,
    "y": 1.4526,
    "equityReturn": 0.2831,
    "unitMoney": ""
},
{
    "x": 1566316800000,
    "y": 1.4546,
    "equityReturn": 0.1377,
    "unitMoney": ""
},
{
    "x": 1566403200000,
    "y": 1.447,
    "equityReturn": -0.5225,
    "unitMoney": ""
},
{
    "x": 1566489600000,
    "y": 1.4592,
    "equityReturn": 0.8431,
    "unitMoney": ""
},
{
    "x": 1566748800000,
    "y": 1.4431,
    "equityReturn": -1.1033,
    "unitMoney": ""
},
{
    "x": 1566835200000,
    "y": 1.4213,
    "equityReturn": 1.3166,
    "unitMoney": "分红：每份派现金0.0408元"
},
{
    "x": 1566921600000,
    "y": 1.413,
    "equityReturn": -0.584,
    "unitMoney": ""
},
{
    "x": 1567008000000,
    "y": 1.4149,
    "equityReturn": 0.1345,
    "unitMoney": ""
},
{
    "x": 1567094400000,
    "y": 1.4098,
    "equityReturn": -0.3604,
    "unitMoney": ""
},
{
    "x": 1567353600000,
    "y": 1.4387,
    "equityReturn": 2.0499,
    "unitMoney": ""
},
{
    "x": 1567440000000,
    "y": 1.4421,
    "equityReturn": 0.2363,
    "unitMoney": ""
},
{
    "x": 1567526400000,
    "y": 1.448,
    "equityReturn": 0.4091,
    "unitMoney": ""
},
{
    "x": 1567612800000,
    "y": 1.4614,
    "equityReturn": 0.9254,
    "unitMoney": ""
},
{
    "x": 1567699200000,
    "y": 1.4706,
    "equityReturn": 0.6295,
    "unitMoney": ""
},
{
    "x": 1567958400000,
    "y": 1.5042,
    "equityReturn": 2.2848,
    "unitMoney": ""
},
{
    "x": 1568044800000,
    "y": 1.4972,
    "equityReturn": -0.4654,
    "unitMoney": ""
},
{
    "x": 1568131200000,
    "y": 1.4807,
    "equityReturn": -1.1021,
    "unitMoney": ""
},
{
    "x": 1568217600000,
    "y": 1.4849,
    "equityReturn": 0.2836,
    "unitMoney": ""
},
{
    "x": 1568563200000,
    "y": 1.4939,
    "equityReturn": 0.6061,
    "unitMoney": ""
},
{
    "x": 1568649600000,
    "y": 1.4697,
    "equityReturn": -1.6199,
    "unitMoney": ""
},
{
    "x": 1568736000000,
    "y": 1.4774,
    "equityReturn": 0.5239,
    "unitMoney": ""
},
{
    "x": 1568822400000,
    "y": 1.4966,
    "equityReturn": 1.2996,
    "unitMoney": ""
},
{
    "x": 1568908800000,
    "y": 1.5012,
    "equityReturn": 0.3074,
    "unitMoney": ""
},
{
    "x": 1569168000000,
    "y": 1.4963,
    "equityReturn": -0.3264,
    "unitMoney": ""
},
{
    "x": 1569254400000,
    "y": 1.5118,
    "equityReturn": 1.0359,
    "unitMoney": ""
},
{
    "x": 1569340800000,
    "y": 1.4855,
    "equityReturn": -1.7396,
    "unitMoney": ""
},
{
    "x": 1569427200000,
    "y": 1.4601,
    "equityReturn": -1.7099,
    "unitMoney": ""
},
{
    "x": 1569513600000,
    "y": 1.4815,
    "equityReturn": 1.4657,
    "unitMoney": ""
},
{
    "x": 1569772800000,
    "y": 1.4573,
    "equityReturn": -1.6335,
    "unitMoney": ""
},
{
    "x": 1570464000000,
    "y": 1.4516,
    "equityReturn": -0.3911,
    "unitMoney": ""
},
{
    "x": 1570550400000,
    "y": 1.4597,
    "equityReturn": 0.558,
    "unitMoney": ""
},
{
    "x": 1570636800000,
    "y": 1.4929,
    "equityReturn": 2.2744,
    "unitMoney": ""
},
{
    "x": 1570723200000,
    "y": 1.5021,
    "equityReturn": 0.6163,
    "unitMoney": ""
},
{
    "x": 1570982400000,
    "y": 1.5224,
    "equityReturn": 1.3514,
    "unitMoney": ""
},
{
    "x": 1571068800000,
    "y": 1.4999,
    "equityReturn": -1.4779,
    "unitMoney": ""
},
{
    "x": 1571155200000,
    "y": 1.495,
    "equityReturn": -0.3267,
    "unitMoney": ""
},
{
    "x": 1571241600000,
    "y": 1.4983,
    "equityReturn": 0.2207,
    "unitMoney": ""
},
{
    "x": 1571328000000,
    "y": 1.4885,
    "equityReturn": -0.6541,
    "unitMoney": ""
},
{
    "x": 1571587200000,
    "y": 1.481,
    "equityReturn": -0.5039,
    "unitMoney": ""
},
{
    "x": 1571673600000,
    "y": 1.4977,
    "equityReturn": 1.1276,
    "unitMoney": ""
},
{
    "x": 1571760000000,
    "y": 1.4814,
    "equityReturn": -1.0883,
    "unitMoney": ""
},
{
    "x": 1571846400000,
    "y": 1.4854,
    "equityReturn": 0.27,
    "unitMoney": ""
},
{
    "x": 1571932800000,
    "y": 1.506,
    "equityReturn": 1.3868,
    "unitMoney": ""
},
{
    "x": 1572192000000,
    "y": 1.5194,
    "equityReturn": 0.8898,
    "unitMoney": ""
},
{
    "x": 1572278400000,
    "y": 1.4566,
    "equityReturn": -0.1843,
    "unitMoney": "分红：每份派现金0.06元"
},
{
    "x": 1572364800000,
    "y": 1.4516,
    "equityReturn": -0.3433,
    "unitMoney": ""
},
{
    "x": 1572451200000,
    "y": 1.448,
    "equityReturn": -0.248,
    "unitMoney": ""
},
{
    "x": 1572537600000,
    "y": 1.4715,
    "equityReturn": 1.6229,
    "unitMoney": ""
},
{
    "x": 1572796800000,
    "y": 1.4856,
    "equityReturn": 0.9582,
    "unitMoney": ""
},
{
    "x": 1572883200000,
    "y": 1.4966,
    "equityReturn": 0.7404,
    "unitMoney": ""
},
{
    "x": 1572969600000,
    "y": 1.4862,
    "equityReturn": -0.6949,
    "unitMoney": ""
},
{
    "x": 1573056000000,
    "y": 1.5024,
    "equityReturn": 1.09,
    "unitMoney": ""
},
{
    "x": 1573142400000,
    "y": 1.5001,
    "equityReturn": -0.1531,
    "unitMoney": ""
},
{
    "x": 1573401600000,
    "y": 1.4788,
    "equityReturn": -1.4199,
    "unitMoney": ""
},
{
    "x": 1573488000000,
    "y": 1.4742,
    "equityReturn": -0.3111,
    "unitMoney": ""
},
{
    "x": 1573574400000,
    "y": 1.4837,
    "equityReturn": 0.6444,
    "unitMoney": ""
},
{
    "x": 1573660800000,
    "y": 1.5058,
    "equityReturn": 1.4895,
    "unitMoney": ""
},
{
    "x": 1573747200000,
    "y": 1.5027,
    "equityReturn": -0.2059,
    "unitMoney": ""
},
{
    "x": 1574006400000,
    "y": 1.5084,
    "equityReturn": 0.3793,
    "unitMoney": ""
},
{
    "x": 1574092800000,
    "y": 1.5347,
    "equityReturn": 1.7436,
    "unitMoney": ""
},
{
    "x": 1574179200000,
    "y": 1.521,
    "equityReturn": -0.8927,
    "unitMoney": ""
},
{
    "x": 1574265600000,
    "y": 1.5142,
    "equityReturn": -0.4471,
    "unitMoney": ""
},
{
    "x": 1574352000000,
    "y": 1.4905,
    "equityReturn": -1.5652,
    "unitMoney": ""
},
{
    "x": 1574611200000,
    "y": 1.4758,
    "equityReturn": -0.9862,
    "unitMoney": ""
},
{
    "x": 1574697600000,
    "y": 1.4833,
    "equityReturn": 0.5082,
    "unitMoney": ""
},
{
    "x": 1574784000000,
    "y": 1.485,
    "equityReturn": 0.1146,
    "unitMoney": ""
},
{
    "x": 1574870400000,
    "y": 1.4821,
    "equityReturn": -0.1953,
    "unitMoney": ""
},
{
    "x": 1574956800000,
    "y": 1.4758,
    "equityReturn": -0.4251,
    "unitMoney": ""
},
{
    "x": 1575216000000,
    "y": 1.4799,
    "equityReturn": 0.2778,
    "unitMoney": ""
},
{
    "x": 1575302400000,
    "y": 1.4847,
    "equityReturn": 0.3243,
    "unitMoney": ""
},
{
    "x": 1575388800000,
    "y": 1.4774,
    "equityReturn": -0.4917,
    "unitMoney": ""
},
{
    "x": 1575475200000,
    "y": 1.4963,
    "equityReturn": 1.2793,
    "unitMoney": ""
},
{
    "x": 1575561600000,
    "y": 1.5112,
    "equityReturn": 0.9958,
    "unitMoney": ""
},
{
    "x": 1575820800000,
    "y": 1.5079,
    "equityReturn": -0.2184,
    "unitMoney": ""
},
{
    "x": 1575907200000,
    "y": 1.519,
    "equityReturn": 0.7361,
    "unitMoney": ""
},
{
    "x": 1575993600000,
    "y": 1.5152,
    "equityReturn": -0.2502,
    "unitMoney": ""
},
{
    "x": 1576080000000,
    "y": 1.5146,
    "equityReturn": -0.0396,
    "unitMoney": ""
},
{
    "x": 1576166400000,
    "y": 1.536,
    "equityReturn": 1.4129,
    "unitMoney": ""
},
{
    "x": 1576425600000,
    "y": 1.5593,
    "equityReturn": 1.5169,
    "unitMoney": ""
},
{
    "x": 1576512000000,
    "y": 1.5807,
    "equityReturn": 1.3724,
    "unitMoney": ""
},
{
    "x": 1576598400000,
    "y": 1.5777,
    "equityReturn": -0.1898,
    "unitMoney": ""
},
{
    "x": 1576684800000,
    "y": 1.5777,
    "equityReturn": 0.0,
    "unitMoney": ""
},
{
    "x": 1576771200000,
    "y": 1.5658,
    "equityReturn": -0.7543,
    "unitMoney": ""
},
{
    "x": 1577030400000,
    "y": 1.5417,
    "equityReturn": -1.5391,
    "unitMoney": ""
},
{
    "x": 1577116800000,
    "y": 1.5648,
    "equityReturn": 1.4983,
    "unitMoney": ""
},
{
    "x": 1577203200000,
    "y": 1.5769,
    "equityReturn": 0.7733,
    "unitMoney": ""
},
{
    "x": 1577289600000,
    "y": 1.5882,
    "equityReturn": 0.7166,
    "unitMoney": ""
},
{
    "x": 1577376000000,
    "y": 1.5789,
    "equityReturn": -0.5856,
    "unitMoney": ""
},
{
    "x": 1577635200000,
    "y": 1.5861,
    "equityReturn": 0.456,
    "unitMoney": ""
},
{
    "x": 1577721600000,
    "y": 1.5972,
    "equityReturn": 0.6998,
    "unitMoney": ""
},
{
    "x": 1577894400000,
    "y": 1.6355,
    "equityReturn": 2.3979,
    "unitMoney": ""
},
{
    "x": 1577980800000,
    "y": 1.6345,
    "equityReturn": -0.0611,
    "unitMoney": ""
},
{
    "x": 1578240000000,
    "y": 1.6355,
    "equityReturn": 0.0612,
    "unitMoney": ""
},
{
    "x": 1578326400000,
    "y": 1.6509,
    "equityReturn": 0.9416,
    "unitMoney": ""
},
{
    "x": 1578412800000,
    "y": 1.6315,
    "equityReturn": -1.1751,
    "unitMoney": ""
},
{
    "x": 1578499200000,
    "y": 1.6567,
    "equityReturn": 1.5446,
    "unitMoney": ""
},
{
    "x": 1578585600000,
    "y": 1.6534,
    "equityReturn": -0.1992,
    "unitMoney": ""
},
{
    "x": 1578844800000,
    "y": 1.6784,
    "equityReturn": 1.512,
    "unitMoney": ""
},
{
    "x": 1578931200000,
    "y": 1.6833,
    "equityReturn": 0.2919,
    "unitMoney": ""
},
{
    "x": 1579017600000,
    "y": 1.6699,
    "equityReturn": -0.7961,
    "unitMoney": ""
},
{
    "x": 1579104000000,
    "y": 1.6676,
    "equityReturn": -0.1377,
    "unitMoney": ""
},
{
    "x": 1579190400000,
    "y": 1.6552,
    "equityReturn": -0.7436,
    "unitMoney": ""
},
{
    "x": 1579449600000,
    "y": 1.6723,
    "equityReturn": 1.0331,
    "unitMoney": ""
},
{
    "x": 1579536000000,
    "y": 1.6527,
    "equityReturn": -1.172,
    "unitMoney": ""
},
{
    "x": 1579622400000,
    "y": 1.6851,
    "equityReturn": 1.9604,
    "unitMoney": ""
},
{
    "x": 1579708800000,
    "y": 1.6464,
    "equityReturn": -2.2966,
    "unitMoney": ""
},
{
    "x": 1580659200000,
    "y": 1.5242,
    "equityReturn": -7.4223,
    "unitMoney": ""
},
{
    "x": 1580745600000,
    "y": 1.606,
    "equityReturn": 5.3667,
    "unitMoney": ""
},
{
    "x": 1580832000000,
    "y": 1.6285,
    "equityReturn": 1.401,
    "unitMoney": ""
},
{
    "x": 1580918400000,
    "y": 1.6713,
    "equityReturn": 2.6282,
    "unitMoney": ""
},
{
    "x": 1581004800000,
    "y": 1.6668,
    "equityReturn": -0.2693,
    "unitMoney": ""
},
{
    "x": 1581264000000,
    "y": 1.6862,
    "equityReturn": 1.1639,
    "unitMoney": ""
},
{
    "x": 1581350400000,
    "y": 1.6874,
    "equityReturn": 0.0712,
    "unitMoney": ""
},
{
    "x": 1581436800000,
    "y": 1.722,
    "equityReturn": 2.0505,
    "unitMoney": ""
},
{
    "x": 1581523200000,
    "y": 1.7189,
    "equityReturn": -0.18,
    "unitMoney": ""
},
{
    "x": 1581609600000,
    "y": 1.7295,
    "equityReturn": 0.6167,
    "unitMoney": ""
},
{
    "x": 1581868800000,
    "y": 1.7726,
    "equityReturn": 2.492,
    "unitMoney": ""
},
{
    "x": 1581955200000,
    "y": 1.7714,
    "equityReturn": -0.0677,
    "unitMoney": ""
},
{
    "x": 1582041600000,
    "y": 1.7471,
    "equityReturn": -1.3718,
    "unitMoney": ""
},
{
    "x": 1582128000000,
    "y": 1.7829,
    "equityReturn": 2.0491,
    "unitMoney": ""
},
{
    "x": 1582214400000,
    "y": 1.8041,
    "equityReturn": 1.1891,
    "unitMoney": ""
},
{
    "x": 1582473600000,
    "y": 1.8136,
    "equityReturn": 0.5266,
    "unitMoney": ""
},
{
    "x": 1582560000000,
    "y": 1.8306,
    "equityReturn": 0.9374,
    "unitMoney": ""
},
{
    "x": 1582646400000,
    "y": 1.7633,
    "equityReturn": -3.6764,
    "unitMoney": ""
},
{
    "x": 1582732800000,
    "y": 1.767,
    "equityReturn": 0.2098,
    "unitMoney": ""
},
{
    "x": 1582819200000,
    "y": 1.7021,
    "equityReturn": -3.6729,
    "unitMoney": ""
},
{
    "x": 1583078400000,
    "y": 1.7462,
    "equityReturn": 2.5909,
    "unitMoney": ""
},
{
    "x": 1583164800000,
    "y": 1.7617,
    "equityReturn": 0.8876,
    "unitMoney": ""
},
{
    "x": 1583251200000,
    "y": 1.7565,
    "equityReturn": -0.2952,
    "unitMoney": ""
},
{
    "x": 1583337600000,
    "y": 1.7731,
    "equityReturn": 0.9451,
    "unitMoney": ""
},
{
    "x": 1583424000000,
    "y": 1.7565,
    "equityReturn": -0.9362,
    "unitMoney": ""
},
{
    "x": 1583683200000,
    "y": 1.6824,
    "equityReturn": -4.2186,
    "unitMoney": ""
},
{
    "x": 1583769600000,
    "y": 1.7173,
    "equityReturn": 2.0744,
    "unitMoney": ""
},
{
    "x": 1583856000000,
    "y": 1.6895,
    "equityReturn": -1.6188,
    "unitMoney": ""
},
{
    "x": 1583942400000,
    "y": 1.6549,
    "equityReturn": -2.0479,
    "unitMoney": ""
},
{
    "x": 1584028800000,
    "y": 1.6376,
    "equityReturn": -1.0454,
    "unitMoney": ""
},
{
    "x": 1584288000000,
    "y": 1.5496,
    "equityReturn": -5.3737,
    "unitMoney": ""
},
{
    "x": 1584374400000,
    "y": 1.549,
    "equityReturn": -0.0387,
    "unitMoney": ""
},
{
    "x": 1584460800000,
    "y": 1.5201,
    "equityReturn": -1.8657,
    "unitMoney": ""
},
{
    "x": 1584547200000,
    "y": 1.5107,
    "equityReturn": -0.6184,
    "unitMoney": ""
},
{
    "x": 1584633600000,
    "y": 1.5278,
    "equityReturn": 1.1319,
    "unitMoney": ""
},
{
    "x": 1584892800000,
    "y": 1.4616,
    "equityReturn": -4.333,
    "unitMoney": ""
},
{
    "x": 1584979200000,
    "y": 1.499,
    "equityReturn": 2.5588,
    "unitMoney": ""
},
{
    "x": 1585065600000,
    "y": 1.5497,
    "equityReturn": 3.3823,
    "unitMoney": ""
},
{
    "x": 1585152000000,
    "y": 1.5439,
    "equityReturn": -0.3743,
    "unitMoney": ""
},
{
    "x": 1585238400000,
    "y": 1.5338,
    "equityReturn": -0.6542,
    "unitMoney": ""
},
{
    "x": 1585497600000,
    "y": 1.5007,
    "equityReturn": -2.158,
    "unitMoney": ""
},
{
    "x": 1585584000000,
    "y": 1.5138,
    "equityReturn": 0.8729,
    "unitMoney": ""
},
{
    "x": 1585670400000,
    "y": 1.5105,
    "equityReturn": -0.218,
    "unitMoney": ""
},
{
    "x": 1585756800000,
    "y": 1.5518,
    "equityReturn": 2.7342,
    "unitMoney": ""
},
{
    "x": 1585843200000,
    "y": 1.5418,
    "equityReturn": -0.6444,
    "unitMoney": ""
},
{
    "x": 1586188800000,
    "y": 1.5867,
    "equityReturn": 2.9122,
    "unitMoney": ""
},
{
    "x": 1586275200000,
    "y": 1.5705,
    "equityReturn": -1.021,
    "unitMoney": ""
},
{
    "x": 1586361600000,
    "y": 1.5795,
    "equityReturn": 0.5731,
    "unitMoney": ""
},
{
    "x": 1586448000000,
    "y": 1.5555,
    "equityReturn": -1.5195,
    "unitMoney": ""
},
{
    "x": 1586707200000,
    "y": 1.5317,
    "equityReturn": -1.5301,
    "unitMoney": ""
},
{
    "x": 1586793600000,
    "y": 1.5826,
    "equityReturn": 3.3231,
    "unitMoney": ""
},
{
    "x": 1586880000000,
    "y": 1.5785,
    "equityReturn": -0.2591,
    "unitMoney": ""
},
{
    "x": 1586966400000,
    "y": 1.5955,
    "equityReturn": 1.077,
    "unitMoney": ""
},
{
    "x": 1587052800000,
    "y": 1.5974,
    "equityReturn": 0.1191,
    "unitMoney": ""
},
{
    "x": 1587312000000,
    "y": 1.6052,
    "equityReturn": 0.4883,
    "unitMoney": ""
},
{
    "x": 1587398400000,
    "y": 1.5878,
    "equityReturn": -1.084,
    "unitMoney": ""
},
{
    "x": 1587484800000,
    "y": 1.598,
    "equityReturn": 0.6424,
    "unitMoney": ""
},
{
    "x": 1587571200000,
    "y": 1.5981,
    "equityReturn": 0.0063,
    "unitMoney": ""
},
{
    "x": 1587657600000,
    "y": 1.5812,
    "equityReturn": -1.0575,
    "unitMoney": ""
},
{
    "x": 1587916800000,
    "y": 1.5758,
    "equityReturn": -0.3415,
    "unitMoney": ""
},
{
    "x": 1588003200000,
    "y": 1.5966,
    "equityReturn": 1.32,
    "unitMoney": ""
},
{
    "x": 1588089600000,
    "y": 1.5863,
    "equityReturn": -0.6451,
    "unitMoney": ""
},
{
    "x": 1588176000000,
    "y": 1.6216,
    "equityReturn": 2.2253,
    "unitMoney": ""
},
{
    "x": 1588694400000,
    "y": 1.649,
    "equityReturn": 1.6897,
    "unitMoney": ""
},
{
    "x": 1588780800000,
    "y": 1.647,
    "equityReturn": -0.1213,
    "unitMoney": ""
},
{
    "x": 1588867200000,
    "y": 1.6614,
    "equityReturn": 0.8743,
    "unitMoney": ""
},
{
    "x": 1589126400000,
    "y": 1.6508,
    "equityReturn": -0.638,
    "unitMoney": ""
},
{
    "x": 1589212800000,
    "y": 1.6642,
    "equityReturn": 0.8117,
    "unitMoney": ""
},
{
    "x": 1589299200000,
    "y": 1.6813,
    "equityReturn": 1.0275,
    "unitMoney": ""
},
{
    "x": 1589385600000,
    "y": 1.6596,
    "equityReturn": -1.2907,
    "unitMoney": ""
},
{
    "x": 1589472000000,
    "y": 1.6697,
    "equityReturn": 0.6086,
    "unitMoney": ""
},
{
    "x": 1589731200000,
    "y": 1.6509,
    "equityReturn": -1.126,
    "unitMoney": ""
},
{
    "x": 1589817600000,
    "y": 1.6787,
    "equityReturn": 1.6839,
    "unitMoney": ""
},
{
    "x": 1589904000000,
    "y": 1.6767,
    "equityReturn": -0.1191,
    "unitMoney": ""
},
{
    "x": 1589990400000,
    "y": 1.6483,
    "equityReturn": -1.6938,
    "unitMoney": ""
},
{
    "x": 1590076800000,
    "y": 1.6156,
    "equityReturn": -1.9839,
    "unitMoney": ""
},
{
    "x": 1590336000000,
    "y": 1.6126,
    "equityReturn": -0.1857,
    "unitMoney": ""
},
{
    "x": 1590422400000,
    "y": 1.6518,
    "equityReturn": 2.4309,
    "unitMoney": ""
},
{
    "x": 1590508800000,
    "y": 1.6324,
    "equityReturn": -1.1745,
    "unitMoney": ""
},
{
    "x": 1590595200000,
    "y": 1.6251,
    "equityReturn": -0.4472,
    "unitMoney": ""
},
{
    "x": 1590681600000,
    "y": 1.6577,
    "equityReturn": 2.006,
    "unitMoney": ""
},
{
    "x": 1590940800000,
    "y": 1.7128,
    "equityReturn": 3.3239,
    "unitMoney": ""
},
{
    "x": 1591027200000,
    "y": 1.6972,
    "equityReturn": -0.9108,
    "unitMoney": ""
},
{
    "x": 1591113600000,
    "y": 1.7054,
    "equityReturn": 0.4831,
    "unitMoney": ""
},
{
    "x": 1591200000000,
    "y": 1.7177,
    "equityReturn": 0.7212,
    "unitMoney": ""
},
{
    "x": 1591286400000,
    "y": 1.7245,
    "equityReturn": 0.3959,
    "unitMoney": ""
},
{
    "x": 1591545600000,
    "y": 1.7145,
    "equityReturn": -0.5799,
    "unitMoney": ""
},
{
    "x": 1591632000000,
    "y": 1.7309,
    "equityReturn": 0.9565,
    "unitMoney": ""
},
{
    "x": 1591718400000,
    "y": 1.7389,
    "equityReturn": 0.4622,
    "unitMoney": ""
},
{
    "x": 1591804800000,
    "y": 1.6265,
    "equityReturn": -0.7131,
    "unitMoney": "分红：每份派现金0.1元"
},
{
    "x": 1591891200000,
    "y": 1.6332,
    "equityReturn": 0.4119,
    "unitMoney": ""
},
{
    "x": 1592150400000,
    "y": 1.6334,
    "equityReturn": 0.0122,
    "unitMoney": ""
},
{
    "x": 1592236800000,
    "y": 1.6649,
    "equityReturn": 1.9285,
    "unitMoney": ""
},
{
    "x": 1592323200000,
    "y": 1.6628,
    "equityReturn": -0.1261,
    "unitMoney": ""
},
{
    "x": 1592409600000,
    "y": 1.6788,
    "equityReturn": 0.9622,
    "unitMoney": ""
},
{
    "x": 1592496000000,
    "y": 1.707,
    "equityReturn": 1.6798,
    "unitMoney": ""
},
{
    "x": 1592755200000,
    "y": 1.7132,
    "equityReturn": 0.3632,
    "unitMoney": ""
},
{
    "x": 1592841600000,
    "y": 1.7389,
    "equityReturn": 1.5001,
    "unitMoney": ""
},
{
    "x": 1592928000000,
    "y": 1.7374,
    "equityReturn": -0.0863,
    "unitMoney": ""
},
{
    "x": 1593360000000,
    "y": 1.7369,
    "equityReturn": -0.0288,
    "unitMoney": ""
},
{
    "x": 1593446400000,
    "y": 1.7762,
    "equityReturn": 2.2627,
    "unitMoney": ""
},
{
    "x": 1593532800000,
    "y": 1.7737,
    "equityReturn": -0.1407,
    "unitMoney": ""
},
{
    "x": 1593619200000,
    "y": 1.7815,
    "equityReturn": 0.4398,
    "unitMoney": ""
},
{
    "x": 1593705600000,
    "y": 1.7923,
    "equityReturn": 0.6062,
    "unitMoney": ""
},
{
    "x": 1593964800000,
    "y": 1.831,
    "equityReturn": 2.1592,
    "unitMoney": ""
},
{
    "x": 1594051200000,
    "y": 1.8949,
    "equityReturn": 3.4899,
    "unitMoney": ""
},
{
    "x": 1594137600000,
    "y": 1.9303,
    "equityReturn": 1.8682,
    "unitMoney": ""
},
{
    "x": 1594224000000,
    "y": 1.9706,
    "equityReturn": 2.0878,
    "unitMoney": ""
},
{
    "x": 1594310400000,
    "y": 1.9682,
    "equityReturn": -0.1218,
    "unitMoney": ""
},
{
    "x": 1594569600000,
    "y": 2.0343,
    "equityReturn": 3.3584,
    "unitMoney": ""
},
{
    "x": 1594656000000,
    "y": 2.0007,
    "equityReturn": -1.6517,
    "unitMoney": ""
},
{
    "x": 1594742400000,
    "y": 1.9666,
    "equityReturn": -1.7044,
    "unitMoney": ""
},
{
    "x": 1594828800000,
    "y": 1.8639,
    "equityReturn": -5.2222,
    "unitMoney": ""
},
{
    "x": 1594915200000,
    "y": 1.8907,
    "equityReturn": 1.4378,
    "unitMoney": ""
},
{
    "x": 1595174400000,
    "y": 1.9116,
    "equityReturn": 1.1054,
    "unitMoney": ""
},
{
    "x": 1595260800000,
    "y": 1.9223,
    "equityReturn": 0.5597,
    "unitMoney": ""
},
{
    "x": 1595347200000,
    "y": 1.9446,
    "equityReturn": 1.1601,
    "unitMoney": ""
},
{
    "x": 1595433600000,
    "y": 1.9545,
    "equityReturn": 0.5091,
    "unitMoney": ""
},
{
    "x": 1595520000000,
    "y": 1.8453,
    "equityReturn": -5.5871,
    "unitMoney": ""
},
{
    "x": 1595779200000,
    "y": 1.8574,
    "equityReturn": 0.6557,
    "unitMoney": ""
},
{
    "x": 1595865600000,
    "y": 1.8957,
    "equityReturn": 2.062,
    "unitMoney": ""
},
{
    "x": 1595952000000,
    "y": 1.9554,
    "equityReturn": 3.1492,
    "unitMoney": ""
},
{
    "x": 1596038400000,
    "y": 1.9408,
    "equityReturn": -0.7467,
    "unitMoney": ""
},
{
    "x": 1596124800000,
    "y": 1.9757,
    "equityReturn": 1.7982,
    "unitMoney": ""
},
{
    "x": 1596384000000,
    "y": 2.0196,
    "equityReturn": 2.222,
    "unitMoney": ""
},
{
    "x": 1596470400000,
    "y": 1.9947,
    "equityReturn": -1.2329,
    "unitMoney": ""
},
{
    "x": 1596556800000,
    "y": 2.0291,
    "equityReturn": 1.7246,
    "unitMoney": ""
},
{
    "x": 1596643200000,
    "y": 1.9936,
    "equityReturn": -1.7495,
    "unitMoney": ""
},
{
    "x": 1596729600000,
    "y": 1.9645,
    "equityReturn": -1.4597,
    "unitMoney": ""
},
{
    "x": 1596988800000,
    "y": 1.9516,
    "equityReturn": -0.6567,
    "unitMoney": ""
},
{
    "x": 1597075200000,
    "y": 1.9254,
    "equityReturn": -1.3425,
    "unitMoney": ""
},
{
    "x": 1597161600000,
    "y": 1.9128,
    "equityReturn": -0.6544,
    "unitMoney": ""
},
{
    "x": 1597248000000,
    "y": 1.9062,
    "equityReturn": -0.345,
    "unitMoney": ""
},
{
    "x": 1597334400000,
    "y": 1.9359,
    "equityReturn": 1.5581,
    "unitMoney": ""
},
{
    "x": 1597593600000,
    "y": 1.9621,
    "equityReturn": 1.3534,
    "unitMoney": ""
},
{
    "x": 1597680000000,
    "y": 1.964,
    "equityReturn": 0.0968,
    "unitMoney": ""
},
{
    "x": 1597766400000,
    "y": 1.9085,
    "equityReturn": -2.8259,
    "unitMoney": ""
},
{
    "x": 1597852800000,
    "y": 1.8831,
    "equityReturn": -1.3309,
    "unitMoney": ""
},
{
    "x": 1597939200000,
    "y": 1.9041,
    "equityReturn": 1.1152,
    "unitMoney": ""
},
{
    "x": 1598198400000,
    "y": 1.9472,
    "equityReturn": 2.26,
    "unitMoney": ""
},
{
    "x": 1598284800000,
    "y": 1.9391,
    "equityReturn": -0.42,
    "unitMoney": ""
},
{
    "x": 1598371200000,
    "y": 1.9045,
    "equityReturn": -1.78,
    "unitMoney": ""
},
{
    "x": 1598457600000,
    "y": 1.9221,
    "equityReturn": 0.92,
    "unitMoney": ""
},
{
    "x": 1598544000000,
    "y": 1.9691,
    "equityReturn": 2.45,
    "unitMoney": ""
},
{
    "x": 1598803200000,
    "y": 1.9501,
    "equityReturn": -0.96,
    "unitMoney": ""
},
{
    "x": 1598889600000,
    "y": 1.9683,
    "equityReturn": 0.93,
    "unitMoney": ""
},
{
    "x": 1598976000000,
    "y": 1.9759,
    "equityReturn": 0.39,
    "unitMoney": ""
},
{
    "x": 1599062400000,
    "y": 1.966,
    "equityReturn": -0.5,
    "unitMoney": ""
},
{
    "x": 1599148800000,
    "y": 1.9592,
    "equityReturn": -0.35,
    "unitMoney": ""
},
{
    "x": 1599408000000,
    "y": 1.8993,
    "equityReturn": -3.06,
    "unitMoney": ""
},
{
    "x": 1599494400000,
    "y": 1.8901,
    "equityReturn": -0.48,
    "unitMoney": ""
},
{
    "x": 1599580800000,
    "y": 1.8239,
    "equityReturn": -3.5,
    "unitMoney": ""
},
{
    "x": 1599667200000,
    "y": 1.8202,
    "equityReturn": -0.2,
    "unitMoney": ""
},
{
    "x": 1599753600000,
    "y": 1.8525,
    "equityReturn": 1.77,
    "unitMoney": ""
},
{
    "x": 1600012800000,
    "y": 1.8653,
    "equityReturn": 0.69,
    "unitMoney": ""
},
{
    "x": 1600099200000,
    "y": 1.8856,
    "equityReturn": 1.09,
    "unitMoney": ""
},
{
    "x": 1600185600000,
    "y": 1.8789,
    "equityReturn": -0.36,
    "unitMoney": ""
},
{
    "x": 1600272000000,
    "y": 1.8842,
    "equityReturn": 0.28,
    "unitMoney": ""
},
{
    "x": 1600358400000,
    "y": 1.901,
    "equityReturn": 0.89,
    "unitMoney": ""
},
{
    "x": 1600617600000,
    "y": 1.885,
    "equityReturn": -0.84,
    "unitMoney": ""
},
{
    "x": 1600704000000,
    "y": 1.8578,
    "equityReturn": -1.44,
    "unitMoney": ""
},
{
    "x": 1600790400000,
    "y": 1.8647,
    "equityReturn": 0.37,
    "unitMoney": ""
},
{
    "x": 1600876800000,
    "y": 1.8158,
    "equityReturn": -2.62,
    "unitMoney": ""
},
{
    "x": 1600963200000,
    "y": 1.8192,
    "equityReturn": 0.19,
    "unitMoney": ""
},
{
    "x": 1601222400000,
    "y": 1.8203,
    "equityReturn": 0.06,
    "unitMoney": ""
},
{
    "x": 1601308800000,
    "y": 1.8481,
    "equityReturn": 1.53,
    "unitMoney": ""
},
{
    "x": 1601395200000,
    "y": 1.8537,
    "equityReturn": 0.3,
    "unitMoney": ""
},
{
    "x": 1602172800000,
    "y": 1.907,
    "equityReturn": 2.88,
    "unitMoney": ""
},
{
    "x": 1602432000000,
    "y": 1.9692,
    "equityReturn": 3.26,
    "unitMoney": ""
},
{
    "x": 1602518400000,
    "y": 2.0041,
    "equityReturn": 1.77,
    "unitMoney": ""
},
{
    "x": 1602604800000,
    "y": 1.9822,
    "equityReturn": -1.09,
    "unitMoney": ""
},
{
    "x": 1602691200000,
    "y": 1.9719,
    "equityReturn": -0.52,
    "unitMoney": ""
},
{
    "x": 1602777600000,
    "y": 1.94,
    "equityReturn": -1.62,
    "unitMoney": ""
},
{
    "x": 1603036800000,
    "y": 1.9319,
    "equityReturn": -0.42,
    "unitMoney": ""
},
{
    "x": 1603123200000,
    "y": 1.9742,
    "equityReturn": 2.19,
    "unitMoney": ""
},
{
    "x": 1603209600000,
    "y": 1.9494,
    "equityReturn": -1.26,
    "unitMoney": ""
},
{
    "x": 1603296000000,
    "y": 1.936,
    "equityReturn": -0.69,
    "unitMoney": ""
},
{
    "x": 1603382400000,
    "y": 1.8984,
    "equityReturn": -1.94,
    "unitMoney": ""
},
{
    "x": 1603641600000,
    "y": 1.9128,
    "equityReturn": 0.76,
    "unitMoney": ""
},
{
    "x": 1603728000000,
    "y": 1.9393,
    "equityReturn": 1.39,
    "unitMoney": ""
},
{
    "x": 1603814400000,
    "y": 1.9783,
    "equityReturn": 2.01,
    "unitMoney": ""
},
{
    "x": 1603900800000,
    "y": 1.7533,
    "equityReturn": 0.76,
    "unitMoney": "分红：每份派现金0.24元"
},
{
    "x": 1603987200000,
    "y": 1.7341,
    "equityReturn": -1.1,
    "unitMoney": ""
},
{
    "x": 1604246400000,
    "y": 1.789,
    "equityReturn": 3.17,
    "unitMoney": ""
},
{
    "x": 1604332800000,
    "y": 1.8055,
    "equityReturn": 0.92,
    "unitMoney": ""
},
{
    "x": 1604419200000,
    "y": 1.8288,
    "equityReturn": 1.29,
    "unitMoney": ""
},
{
    "x": 1604505600000,
    "y": 1.8798,
    "equityReturn": 2.79,
    "unitMoney": ""
},
{
    "x": 1604592000000,
    "y": 1.8701,
    "equityReturn": -0.52,
    "unitMoney": ""
},
{
    "x": 1604851200000,
    "y": 1.8904,
    "equityReturn": 1.09,
    "unitMoney": ""
},
{
    "x": 1604937600000,
    "y": 1.8723,
    "equityReturn": -0.96,
    "unitMoney": ""
},
{
    "x": 1605024000000,
    "y": 1.8418,
    "equityReturn": -1.63,
    "unitMoney": ""
},
{
    "x": 1605110400000,
    "y": 1.8571,
    "equityReturn": 0.83,
    "unitMoney": ""
},
{
    "x": 1605196800000,
    "y": 1.8608,
    "equityReturn": 0.2,
    "unitMoney": ""
},
{
    "x": 1605456000000,
    "y": 1.8879,
    "equityReturn": 1.46,
    "unitMoney": ""
},
{
    "x": 1605542400000,
    "y": 1.8727,
    "equityReturn": -0.81,
    "unitMoney": ""
},
{
    "x": 1605628800000,
    "y": 1.8391,
    "equityReturn": -1.79,
    "unitMoney": ""
},
{
    "x": 1605715200000,
    "y": 1.871,
    "equityReturn": 1.73,
    "unitMoney": ""
},
{
    "x": 1605801600000,
    "y": 1.8825,
    "equityReturn": 0.61,
    "unitMoney": ""
},
{
    "x": 1606060800000,
    "y": 1.9063,
    "equityReturn": 1.26,
    "unitMoney": ""
},
{
    "x": 1606147200000,
    "y": 1.8951,
    "equityReturn": -0.59,
    "unitMoney": ""
},
{
    "x": 1606233600000,
    "y": 1.8604,
    "equityReturn": -1.83,
    "unitMoney": ""
},
{
    "x": 1606320000000,
    "y": 1.8466,
    "equityReturn": -0.74,
    "unitMoney": ""
},
{
    "x": 1606406400000,
    "y": 1.8583,
    "equityReturn": 0.63,
    "unitMoney": ""
},
{
    "x": 1606665600000,
    "y": 1.8448,
    "equityReturn": -0.73,
    "unitMoney": ""
},
{
    "x": 1606752000000,
    "y": 1.8759,
    "equityReturn": 1.69,
    "unitMoney": ""
},
{
    "x": 1606838400000,
    "y": 1.8671,
    "equityReturn": -0.47,
    "unitMoney": ""
},
{
    "x": 1606924800000,
    "y": 1.867,
    "equityReturn": -0.01,
    "unitMoney": ""
},
{
    "x": 1607011200000,
    "y": 1.887,
    "equityReturn": 1.07,
    "unitMoney": ""
},
{
    "x": 1607270400000,
    "y": 1.8794,
    "equityReturn": -0.4,
    "unitMoney": ""
},
{
    "x": 1607356800000,
    "y": 1.8921,
    "equityReturn": 0.68,
    "unitMoney": ""
},
{
    "x": 1607443200000,
    "y": 1.8605,
    "equityReturn": -1.67,
    "unitMoney": ""
},
{
    "x": 1607529600000,
    "y": 1.8631,
    "equityReturn": 0.14,
    "unitMoney": ""
},
{
    "x": 1607616000000,
    "y": 1.8538,
    "equityReturn": -0.5,
    "unitMoney": ""
},
{
    "x": 1607875200000,
    "y": 1.8722,
    "equityReturn": 0.99,
    "unitMoney": ""
},
{
    "x": 1607961600000,
    "y": 1.8983,
    "equityReturn": 1.39,
    "unitMoney": ""
},
{
    "x": 1608048000000,
    "y": 1.9,
    "equityReturn": 0.09,
    "unitMoney": ""
},
{
    "x": 1608134400000,
    "y": 1.9124,
    "equityReturn": 0.65,
    "unitMoney": ""
},
{
    "x": 1608220800000,
    "y": 1.9294,
    "equityReturn": 0.89,
    "unitMoney": ""
},
{
    "x": 1608480000000,
    "y": 1.9812,
    "equityReturn": 2.68,
    "unitMoney": ""
},
{
    "x": 1608566400000,
    "y": 1.9479,
    "equityReturn": -1.68,
    "unitMoney": ""
},
{
    "x": 1608652800000,
    "y": 1.9738,
    "equityReturn": 1.33,
    "unitMoney": ""
},
{
    "x": 1608739200000,
    "y": 1.9787,
    "equityReturn": 0.25,
    "unitMoney": ""
},
{
    "x": 1608825600000,
    "y": 2.0223,
    "equityReturn": 2.2,
    "unitMoney": ""
},
{
    "x": 1609084800000,
    "y": 2.0274,
    "equityReturn": 0.25,
    "unitMoney": ""
},
{
    "x": 1609171200000,
    "y": 1.9843,
    "equityReturn": -2.13,
    "unitMoney": ""
},
{
    "x": 1609257600000,
    "y": 2.0403,
    "equityReturn": 2.82,
    "unitMoney": ""
},
{
    "x": 1609344000000,
    "y": 2.0697,
    "equityReturn": 1.44,
    "unitMoney": ""
},
{
    "x": 1609689600000,
    "y": 2.1473,
    "equityReturn": 3.75,
    "unitMoney": ""
},
{
    "x": 1609776000000,
    "y": 2.2008,
    "equityReturn": 2.49,
    "unitMoney": ""
},
{
    "x": 1609862400000,
    "y": 2.1992,
    "equityReturn": -0.07,
    "unitMoney": ""
},
{
    "x": 1609948800000,
    "y": 2.2387,
    "equityReturn": 1.8,
    "unitMoney": ""
},
{
    "x": 1610035200000,
    "y": 2.2343,
    "equityReturn": -0.2,
    "unitMoney": ""
},
{
    "x": 1610294400000,
    "y": 1.9799,
    "equityReturn": 0.25,
    "unitMoney": "分红：每份派现金0.26元"
},
{
    "x": 1610380800000,
    "y": 2.0467,
    "equityReturn": 3.37,
    "unitMoney": ""
},
{
    "x": 1610467200000,
    "y": 2.0067,
    "equityReturn": -1.95,
    "unitMoney": ""
},
{
    "x": 1610553600000,
    "y": 1.9712,
    "equityReturn": -1.77,
    "unitMoney": ""
},
{
    "x": 1610640000000,
    "y": 1.9822,
    "equityReturn": 0.56,
    "unitMoney": ""
},
{
    "x": 1610899200000,
    "y": 2.0331,
    "equityReturn": 2.57,
    "unitMoney": ""
},
{
    "x": 1610985600000,
    "y": 1.9964,
    "equityReturn": -1.81,
    "unitMoney": ""
},
{
    "x": 1611072000000,
    "y": 2.0213,
    "equityReturn": 1.25,
    "unitMoney": ""
},
{
    "x": 1611158400000,
    "y": 2.0721,
    "equityReturn": 2.51,
    "unitMoney": ""
},
{
    "x": 1611244800000,
    "y": 2.1057,
    "equityReturn": 1.62,
    "unitMoney": ""
},
{
    "x": 1611504000000,
    "y": 2.1223,
    "equityReturn": 0.79,
    "unitMoney": ""
},
{
    "x": 1611590400000,
    "y": 2.0723,
    "equityReturn": -2.36,
    "unitMoney": ""
},
{
    "x": 1611676800000,
    "y": 2.0972,
    "equityReturn": 1.2,
    "unitMoney": ""
},
{
    "x": 1611763200000,
    "y": 2.021,
    "equityReturn": -3.63,
    "unitMoney": ""
},
{
    "x": 1611849600000,
    "y": 2.0081,
    "equityReturn": -0.64,
    "unitMoney": ""
},
{
    "x": 1612108800000,
    "y": 2.0303,
    "equityReturn": 1.11,
    "unitMoney": ""
},
{
    "x": 1612195200000,
    "y": 2.069,
    "equityReturn": 1.91,
    "unitMoney": ""
},
{
    "x": 1612281600000,
    "y": 2.0591,
    "equityReturn": -0.48,
    "unitMoney": ""
},
{
    "x": 1612368000000,
    "y": 2.0557,
    "equityReturn": -0.17,
    "unitMoney": ""
},
{
    "x": 1612454400000,
    "y": 2.0218,
    "equityReturn": -1.65,
    "unitMoney": ""
},
{
    "x": 1612713600000,
    "y": 2.0899,
    "equityReturn": 3.37,
    "unitMoney": ""
},
{
    "x": 1612800000000,
    "y": 2.1332,
    "equityReturn": 2.07,
    "unitMoney": ""
},
{
    "x": 1612886400000,
    "y": 2.1783,
    "equityReturn": 2.11,
    "unitMoney": ""
},
{
    "x": 1613577600000,
    "y": 2.1715,
    "equityReturn": -0.31,
    "unitMoney": ""
},
{
    "x": 1613664000000,
    "y": 2.1341,
    "equityReturn": -1.72,
    "unitMoney": ""
},
{
    "x": 1613923200000,
    "y": 2.0691,
    "equityReturn": -3.05,
    "unitMoney": ""
},
{
    "x": 1614009600000,
    "y": 2.0483,
    "equityReturn": -1.01,
    "unitMoney": ""
},
{
    "x": 1614096000000,
    "y": 1.9733,
    "equityReturn": -3.66,
    "unitMoney": ""
},
{
    "x": 1614182400000,
    "y": 1.9737,
    "equityReturn": 0.02,
    "unitMoney": ""
},
{
    "x": 1614268800000,
    "y": 1.9358,
    "equityReturn": -1.92,
    "unitMoney": ""
},
{
    "x": 1614528000000,
    "y": 1.9673,
    "equityReturn": 1.63,
    "unitMoney": ""
},
{
    "x": 1614614400000,
    "y": 1.9438,
    "equityReturn": -1.19,
    "unitMoney": ""
},
{
    "x": 1614700800000,
    "y": 1.9775,
    "equityReturn": 1.73,
    "unitMoney": ""
},
{
    "x": 1614787200000,
    "y": 1.8923,
    "equityReturn": -4.31,
    "unitMoney": ""
},
{
    "x": 1614873600000,
    "y": 1.8778,
    "equityReturn": -0.77,
    "unitMoney": ""
},
{
    "x": 1615132800000,
    "y": 1.8099,
    "equityReturn": -3.62,
    "unitMoney": ""
},
{
    "x": 1615219200000,
    "y": 1.7692,
    "equityReturn": -2.25,
    "unitMoney": ""
},
{
    "x": 1615305600000,
    "y": 1.7926,
    "equityReturn": 1.32,
    "unitMoney": ""
},
{
    "x": 1615392000000,
    "y": 1.8394,
    "equityReturn": 2.61,
    "unitMoney": ""
},
{
    "x": 1615478400000,
    "y": 1.8443,
    "equityReturn": 0.27,
    "unitMoney": ""
},
{
    "x": 1615737600000,
    "y": 1.804,
    "equityReturn": -2.19,
    "unitMoney": ""
},
{
    "x": 1615824000000,
    "y": 1.824,
    "equityReturn": 1.11,
    "unitMoney": ""
},
{
    "x": 1615910400000,
    "y": 1.8405,
    "equityReturn": 0.9,
    "unitMoney": ""
},
{
    "x": 1615996800000,
    "y": 1.8554,
    "equityReturn": 0.81,
    "unitMoney": ""
},
{
    "x": 1616083200000,
    "y": 1.7988,
    "equityReturn": -3.05,
    "unitMoney": ""
},
{
    "x": 1616342400000,
    "y": 1.8129,
    "equityReturn": 0.78,
    "unitMoney": ""
},
{
    "x": 1616428800000,
    "y": 1.7876,
    "equityReturn": -1.4,
    "unitMoney": ""
},
{
    "x": 1616515200000,
    "y": 1.7336,
    "equityReturn": -3.02,
    "unitMoney": ""
},
{
    "x": 1616601600000,
    "y": 1.7452,
    "equityReturn": 0.67,
    "unitMoney": ""
},
{
    "x": 1616688000000,
    "y": 1.7983,
    "equityReturn": 3.04,
    "unitMoney": ""
},
{
    "x": 1616947200000,
    "y": 1.8017,
    "equityReturn": 0.19,
    "unitMoney": ""
},
{
    "x": 1617033600000,
    "y": 1.825,
    "equityReturn": 1.29,
    "unitMoney": ""
},
{
    "x": 1617120000000,
    "y": 1.801,
    "equityReturn": -1.32,
    "unitMoney": ""
},
{
    "x": 1617206400000,
    "y": 1.8243,
    "equityReturn": 1.29,
    "unitMoney": ""
},
{
    "x": 1617292800000,
    "y": 1.8384,
    "equityReturn": 0.77,
    "unitMoney": ""
},
{
    "x": 1617638400000,
    "y": 1.833,
    "equityReturn": -0.29,
    "unitMoney": ""
},
{
    "x": 1617724800000,
    "y": 1.8313,
    "equityReturn": -0.09,
    "unitMoney": ""
},
{
    "x": 1617811200000,
    "y": 1.838,
    "equityReturn": 0.37,
    "unitMoney": ""
},
{
    "x": 1617897600000,
    "y": 1.8032,
    "equityReturn": -1.89,
    "unitMoney": ""
},
{
    "x": 1618156800000,
    "y": 1.7489,
    "equityReturn": -3.01,
    "unitMoney": ""
},
{
    "x": 1618243200000,
    "y": 1.7575,
    "equityReturn": 0.49,
    "unitMoney": ""
},
{
    "x": 1618329600000,
    "y": 1.7975,
    "equityReturn": 2.28,
    "unitMoney": ""
},
{
    "x": 1618416000000,
    "y": 1.7912,
    "equityReturn": -0.35,
    "unitMoney": ""
},
{
    "x": 1618502400000,
    "y": 1.7792,
    "equityReturn": -0.67,
    "unitMoney": ""
},
{
    "x": 1618761600000,
    "y": 1.8582,
    "equityReturn": 4.44,
    "unitMoney": ""
},
{
    "x": 1618848000000,
    "y": 1.8649,
    "equityReturn": 0.36,
    "unitMoney": ""
},
{
    "x": 1618934400000,
    "y": 1.8621,
    "equityReturn": -0.15,
    "unitMoney": ""
},
{
    "x": 1619020800000,
    "y": 1.8683,
    "equityReturn": 0.33,
    "unitMoney": ""
},
{
    "x": 1619107200000,
    "y": 1.8878,
    "equityReturn": 1.04,
    "unitMoney": ""
},
{
    "x": 1619366400000,
    "y": 1.8701,
    "equityReturn": -0.94,
    "unitMoney": ""
},
{
    "x": 1619452800000,
    "y": 1.8652,
    "equityReturn": -0.26,
    "unitMoney": ""
},
{
    "x": 1619539200000,
    "y": 1.8908,
    "equityReturn": 1.37,
    "unitMoney": ""
},
{
    "x": 1619625600000,
    "y": 1.898,
    "equityReturn": 0.38,
    "unitMoney": ""
},
{
    "x": 1619712000000,
    "y": 1.9015,
    "equityReturn": 0.18,
    "unitMoney": ""
},
{
    "x": 1620230400000,
    "y": 1.8785,
    "equityReturn": -1.21,
    "unitMoney": ""
},
{
    "x": 1620316800000,
    "y": 1.8441,
    "equityReturn": -1.83,
    "unitMoney": ""
},
{
    "x": 1620576000000,
    "y": 1.8593,
    "equityReturn": 0.82,
    "unitMoney": ""
},
{
    "x": 1620662400000,
    "y": 1.839,
    "equityReturn": -1.09,
    "unitMoney": ""
},
{
    "x": 1620748800000,
    "y": 1.848,
    "equityReturn": 0.49,
    "unitMoney": ""
},
{
    "x": 1620835200000,
    "y": 1.8155,
    "equityReturn": -1.76,
    "unitMoney": ""
},
{
    "x": 1620921600000,
    "y": 1.8521,
    "equityReturn": 2.02,
    "unitMoney": ""
},
{
    "x": 1621180800000,
    "y": 1.9029,
    "equityReturn": 2.74,
    "unitMoney": ""
},
{
    "x": 1621267200000,
    "y": 1.9041,
    "equityReturn": 0.06,
    "unitMoney": ""
},
{
    "x": 1621353600000,
    "y": 1.9084,
    "equityReturn": 0.23,
    "unitMoney": ""
},
{
    "x": 1621440000000,
    "y": 1.9047,
    "equityReturn": -0.19,
    "unitMoney": ""
},
{
    "x": 1621526400000,
    "y": 1.9032,
    "equityReturn": -0.08,
    "unitMoney": ""
},
{
    "x": 1621785600000,
    "y": 1.9045,
    "equityReturn": 0.07,
    "unitMoney": ""
},
{
    "x": 1621872000000,
    "y": 1.9324,
    "equityReturn": 1.46,
    "unitMoney": ""
},
{
    "x": 1621958400000,
    "y": 1.9336,
    "equityReturn": 0.06,
    "unitMoney": ""
},
{
    "x": 1622044800000,
    "y": 1.9395,
    "equityReturn": 0.31,
    "unitMoney": ""
},
{
    "x": 1622131200000,
    "y": 1.9558,
    "equityReturn": 0.84,
    "unitMoney": ""
},
{
    "x": 1622390400000,
    "y": 1.994,
    "equityReturn": 1.95,
    "unitMoney": ""
},
{
    "x": 1622476800000,
    "y": 1.9833,
    "equityReturn": -0.54,
    "unitMoney": ""
},
{
    "x": 1622563200000,
    "y": 1.9657,
    "equityReturn": -0.89,
    "unitMoney": ""
},
{
    "x": 1622649600000,
    "y": 1.9421,
    "equityReturn": -1.2,
    "unitMoney": ""
},
{
    "x": 1622736000000,
    "y": 1.9776,
    "equityReturn": 1.83,
    "unitMoney": ""
},
{
    "x": 1622995200000,
    "y": 1.9541,
    "equityReturn": -1.19,
    "unitMoney": ""
},
{
    "x": 1623081600000,
    "y": 1.9283,
    "equityReturn": -1.32,
    "unitMoney": ""
},
{
    "x": 1623168000000,
    "y": 1.9347,
    "equityReturn": 0.33,
    "unitMoney": ""
},
{
    "x": 1623254400000,
    "y": 1.9708,
    "equityReturn": 1.87,
    "unitMoney": ""
},
{
    "x": 1623340800000,
    "y": 1.9672,
    "equityReturn": -0.18,
    "unitMoney": ""
},
{
    "x": 1623686400000,
    "y": 1.9526,
    "equityReturn": -0.74,
    "unitMoney": ""
},
{
    "x": 1623772800000,
    "y": 1.8785,
    "equityReturn": -3.79,
    "unitMoney": ""
},
{
    "x": 1623859200000,
    "y": 1.9013,
    "equityReturn": 1.21,
    "unitMoney": ""
},
{
    "x": 1623945600000,
    "y": 1.9415,
    "equityReturn": 2.11,
    "unitMoney": ""
},
{
    "x": 1624204800000,
    "y": 1.9409,
    "equityReturn": -0.03,
    "unitMoney": ""
},
{
    "x": 1624291200000,
    "y": 1.9447,
    "equityReturn": 0.2,
    "unitMoney": ""
},
{
    "x": 1624377600000,
    "y": 1.9729,
    "equityReturn": 1.45,
    "unitMoney": ""
},
{
    "x": 1624464000000,
    "y": 1.9612,
    "equityReturn": -0.59,
    "unitMoney": ""
},
{
    "x": 1624550400000,
    "y": 1.9952,
    "equityReturn": 1.73,
    "unitMoney": ""
},
{
    "x": 1624809600000,
    "y": 2.0181,
    "equityReturn": 1.15,
    "unitMoney": ""
},
{
    "x": 1624896000000,
    "y": 2.0149,
    "equityReturn": -0.16,
    "unitMoney": ""
},
{
    "x": 1624982400000,
    "y": 2.0407,
    "equityReturn": 1.28,
    "unitMoney": ""
},
{
    "x": 1625068800000,
    "y": 2.0366,
    "equityReturn": -0.2,
    "unitMoney": ""
},
{
    "x": 1625155200000,
    "y": 1.9905,
    "equityReturn": -2.26,
    "unitMoney": ""
},
{
    "x": 1625414400000,
    "y": 2.0194,
    "equityReturn": 1.45,
    "unitMoney": ""
},
{
    "x": 1625500800000,
    "y": 2.0067,
    "equityReturn": -0.63,
    "unitMoney": ""
},
{
    "x": 1625587200000,
    "y": 2.0511,
    "equityReturn": 2.21,
    "unitMoney": ""
},
{
    "x": 1625673600000,
    "y": 2.0702,
    "equityReturn": 0.93,
    "unitMoney": ""
},
{
    "x": 1625760000000,
    "y": 2.0893,
    "equityReturn": 0.92,
    "unitMoney": ""
},
{
    "x": 1626019200000,
    "y": 2.1773,
    "equityReturn": 4.21,
    "unitMoney": ""
},
{
    "x": 1626105600000,
    "y": 2.1733,
    "equityReturn": -0.18,
    "unitMoney": ""
},
{
    "x": 1626192000000,
    "y": 2.1194,
    "equityReturn": -2.48,
    "unitMoney": ""
},
{
    "x": 1626278400000,
    "y": 2.1577,
    "equityReturn": 1.81,
    "unitMoney": ""
},
{
    "x": 1626364800000,
    "y": 2.1148,
    "equityReturn": -1.99,
    "unitMoney": ""
},
{
    "x": 1626624000000,
    "y": 2.1117,
    "equityReturn": -0.15,
    "unitMoney": ""
},
{
    "x": 1626710400000,
    "y": 1.96,
    "equityReturn": 0.3,
    "unitMoney": "分红：每份派现金0.158元"
},
{
    "x": 1626796800000,
    "y": 2.0268,
    "equityReturn": 3.41,
    "unitMoney": ""
},
{
    "x": 1626883200000,
    "y": 2.0467,
    "equityReturn": 0.98,
    "unitMoney": ""
}];
/*累计净值走势*/
var Data_ACWorthTrend = [[1446480000000, 1.0], [1446739200000, 1.019], [1447344000000, 1.063], [1447948800000, 1.101], [1448553600000, 1.087], [1448985600000, 1.088], [1449072000000, 1.105], [1449158400000, 1.104], [1449417600000, 1.11], [1449504000000, 1.103], [1449590400000, 1.112], [1449676800000, 1.108], [1449763200000, 1.105], [1450022400000, 1.103], [1450108800000, 1.108], [1450195200000, 1.108], [1450281600000, 1.115], [1450368000000, 1.121], [1450627200000, 1.131], [1450713600000, 1.137], [1450800000000, 1.133], [1450886400000, 1.131], [1450972800000, 1.138], [1451232000000, 1.12], [1451318400000, 1.126], [1451404800000, 1.132], [1451491200000, 1.133], [1451836800000, 1.081], [1451923200000, 1.077], [1452009600000, 1.101], [1452096000000, 1.023], [1452182400000, 1.057], [1452441600000, 1.006], [1452528000000, 0.994], [1452614400000, 0.975], [1452700800000, 1.004], [1452787200000, 0.972], [1453046400000, 0.989], [1453132800000, 1.018], [1453219200000, 1.026], [1453305600000, 0.997], [1453392000000, 1.01], [1453651200000, 1.014], [1453737600000, 0.968], [1453824000000, 0.97], [1453910400000, 0.944], [1453996800000, 0.959], [1454256000000, 0.955], [1454342400000, 0.986], [1454428800000, 0.998], [1454515200000, 1.016], [1454601600000, 0.999], [1455465600000, 1.006], [1455552000000, 1.04], [1455638400000, 1.05], [1455724800000, 1.044], [1455811200000, 1.049], [1456070400000, 1.069], [1456156800000, 1.064], [1456243200000, 1.057], [1456329600000, 0.992], [1456416000000, 0.991], [1456675200000, 0.954], [1456761600000, 0.968], [1456848000000, 0.999], [1456934400000, 0.992], [1457020800000, 0.972], [1457280000000, 0.978], [1457366400000, 0.983], [1457452800000, 0.967], [1457539200000, 0.962], [1457625600000, 0.961], [1457884800000, 0.973], [1457971200000, 0.975], [1458057600000, 0.972], [1458144000000, 1.006], [1458230400000, 1.041], [1458489600000, 1.058], [1458576000000, 1.055], [1458662400000, 1.067], [1458748800000, 1.055], [1458835200000, 1.057], [1459094400000, 1.06], [1459180800000, 1.043], [1459267200000, 1.077], [1459353600000, 1.083], [1459440000000, 1.082], [1459785600000, 1.113], [1459872000000, 1.119], [1459958400000, 1.106], [1460044800000, 1.106], [1460304000000, 1.131], [1460390400000, 1.127], [1460476800000, 1.14], [1460563200000, 1.147], [1460649600000, 1.145], [1460908800000, 1.134], [1460995200000, 1.14], [1461081600000, 1.106], [1461168000000, 1.096], [1461254400000, 1.096], [1461513600000, 1.101], [1461600000000, 1.11], [1461686400000, 1.1], [1461772800000, 1.09], [1461859200000, 1.094], [1462204800000, 1.124], [1462291200000, 1.13], [1462377600000, 1.136], [1462464000000, 1.104], [1462723200000, 1.07], [1462809600000, 1.059], [1462896000000, 1.065], [1462982400000, 1.076], [1463068800000, 1.076], [1463328000000, 1.098], [1463414400000, 1.094], [1463500800000, 1.071], [1463587200000, 1.079], [1463673600000, 1.092], [1463932800000, 1.104], [1464019200000, 1.089], [1464105600000, 1.082], [1464192000000, 1.085], [1464278400000, 1.086], [1464537600000, 1.091], [1464624000000, 1.127], [1464710400000, 1.139], [1464796800000, 1.155], [1464883200000, 1.16], [1465142400000, 1.165], [1465228800000, 1.171], [1465315200000, 1.17], [1465747200000, 1.132], [1465833600000, 1.142], [1465920000000, 1.188], [1466006400000, 1.208], [1466092800000, 1.204], [1466352000000, 1.21], [1466438400000, 1.195], [1466524800000, 1.207], [1466611200000, 1.196], [1466697600000, 1.189], [1466956800000, 1.219], [1467043200000, 1.231], [1467129600000, 1.239], [1467216000000, 1.235], [1467302400000, 1.232], [1467561600000, 1.252], [1467648000000, 1.253], [1467734400000, 1.256], [1467820800000, 1.254], [1467907200000, 1.245], [1468166400000, 1.25], [1468252800000, 1.253], [1468339200000, 1.255], [1468425600000, 1.253], [1468512000000, 1.249], [1468771200000, 1.249], [1468857600000, 1.255], [1468944000000, 1.257], [1469030400000, 1.26], [1469116800000, 1.259], [1469376000000, 1.254], [1469462400000, 1.276], [1469548800000, 1.235], [1469635200000, 1.233], [1469721600000, 1.225], [1469980800000, 1.209], [1470067200000, 1.22], [1470153600000, 1.221], [1470240000000, 1.229], [1470326400000, 1.223], [1470585600000, 1.235], [1470672000000, 1.24], [1470758400000, 1.233], [1470844800000, 1.226], [1470931200000, 1.234], [1471190400000, 1.255], [1471276800000, 1.259], [1471363200000, 1.261], [1471449600000, 1.26], [1471536000000, 1.256], [1471795200000, 1.248], [1471881600000, 1.256], [1471968000000, 1.26], [1472054400000, 1.257], [1472140800000, 1.263], [1472400000000, 1.259], [1472486400000, 1.265], [1472572800000, 1.257], [1472659200000, 1.251], [1472745600000, 1.25], [1473004800000, 1.253], [1473091200000, 1.278], [1473177600000, 1.273], [1473264000000, 1.273], [1473350400000, 1.258], [1473609600000, 1.231], [1473696000000, 1.24], [1473782400000, 1.244], [1474214400000, 1.249], [1474300800000, 1.255], [1474387200000, 1.256], [1474473600000, 1.264], [1474560000000, 1.266], [1474819200000, 1.24], [1474905600000, 1.242], [1474992000000, 1.245], [1475078400000, 1.251], [1475164800000, 1.256], [1476028800000, 1.266], [1476115200000, 1.278], [1476201600000, 1.269], [1476288000000, 1.272], [1476374400000, 1.263], [1476633600000, 1.253], [1476720000000, 1.269], [1476806400000, 1.265], [1476892800000, 1.271], [1476979200000, 1.262], [1477238400000, 1.265], [1477324800000, 1.266], [1477411200000, 1.259], [1477497600000, 1.255], [1477584000000, 1.251], [1477843200000, 1.245], [1477929600000, 1.252], [1478016000000, 1.243], [1478102400000, 1.247], [1478188800000, 1.239], [1478448000000, 1.249], [1478534400000, 1.253], [1478620800000, 1.255], [1478707200000, 1.265], [1478793600000, 1.277], [1479052800000, 1.285], [1479139200000, 1.291], [1479225600000, 1.288], [1479312000000, 1.296], [1479398400000, 1.289], [1479657600000, 1.289], [1479744000000, 1.302], [1479830400000, 1.299], [1479916800000, 1.3], [1480003200000, 1.307], [1480262400000, 1.315], [1480348800000, 1.309], [1480435200000, 1.296], [1480521600000, 1.315], [1480608000000, 1.307], [1480867200000, 1.296], [1480953600000, 1.296], [1481040000000, 1.308], [1481126400000, 1.308], [1481212800000, 1.313], [1481472000000, 1.29], [1481558400000, 1.301], [1481644800000, 1.298], [1481731200000, 1.298], [1481817600000, 1.296], [1482076800000, 1.298], [1482163200000, 1.286], [1482249600000, 1.3], [1482336000000, 1.302], [1482422400000, 1.292], [1482681600000, 1.294], [1482768000000, 1.292], [1482854400000, 1.286], [1482940800000, 1.282], [1483027200000, 1.287], [1483113600000, 1.287], [1483372800000, 1.302], [1483459200000, 1.317], [1483545600000, 1.33], [1483632000000, 1.329], [1483891200000, 1.335], [1483977600000, 1.331], [1484064000000, 1.319], [1484150400000, 1.31], [1484236800000, 1.302], [1484496000000, 1.29], [1484582400000, 1.299], [1484668800000, 1.304], [1484755200000, 1.3003], [1484841600000, 1.3082], [1485100800000, 1.3191], [1485187200000, 1.3191], [1485273600000, 1.3191], [1485360000000, 1.3282], [1486051200000, 1.3215], [1486310400000, 1.3293], [1486396800000, 1.3312], [1486483200000, 1.3355], [1486569600000, 1.3369], [1486656000000, 1.3447], [1486915200000, 1.3597], [1487001600000, 1.3622], [1487088000000, 1.3492], [1487174400000, 1.3627], [1487260800000, 1.3518], [1487520000000, 1.3675], [1487606400000, 1.3747], [1487692800000, 1.3866], [1487779200000, 1.3887], [1487865600000, 1.3816], [1488124800000, 1.3676], [1488211200000, 1.3745], [1488297600000, 1.3772], [1488384000000, 1.3733], [1488470400000, 1.378], [1488729600000, 1.388], [1488816000000, 1.3893], [1488902400000, 1.3847], [1488988800000, 1.3733], [1489075200000, 1.3814], [1489334400000, 1.3944], [1489420800000, 1.3927], [1489507200000, 1.3985], [1489593600000, 1.406], [1489680000000, 1.3896], [1489939200000, 1.3876], [1490025600000, 1.3914], [1490112000000, 1.3953], [1490198400000, 1.3981], [1490284800000, 1.4003], [1490544000000, 1.3909], [1490630400000, 1.3869], [1490716800000, 1.3836], [1490803200000, 1.3683], [1490889600000, 1.3768], [1491321600000, 1.4052], [1491408000000, 1.4107], [1491494400000, 1.4198], [1491753600000, 1.4187], [1491840000000, 1.4304], [1491926400000, 1.4241], [1492012800000, 1.4319], [1492099200000, 1.4203], [1492358400000, 1.4156], [1492444800000, 1.4115], [1492531200000, 1.4014], [1492617600000, 1.4082], [1492704000000, 1.4021], [1492963200000, 1.379], [1493049600000, 1.3851], [1493136000000, 1.3861], [1493222400000, 1.3917], [1493308800000, 1.3881], [1493654400000, 1.3925], [1493740800000, 1.3904], [1493827200000, 1.389], [1493913600000, 1.3788], [1494172800000, 1.3686], [1494259200000, 1.3764], [1494345600000, 1.3665], [1494432000000, 1.3718], [1494518400000, 1.3744], [1494777600000, 1.381], [1494864000000, 1.397], [1494950400000, 1.392], [1495036800000, 1.3903], [1495123200000, 1.3908], [1495382400000, 1.3859], [1495468800000, 1.3849], [1495555200000, 1.3867], [1495641600000, 1.3985], [1495728000000, 1.3974], [1496160000000, 1.4008], [1496246400000, 1.3962], [1496332800000, 1.396], [1496592000000, 1.3941], [1496678400000, 1.4042], [1496764800000, 1.4231], [1496851200000, 1.4417], [1496937600000, 1.4585], [1497196800000, 1.4588], [1497283200000, 1.4628], [1497369600000, 1.4541], [1497456000000, 1.4498], [1497542400000, 1.4482], [1497801600000, 1.4551], [1497888000000, 1.4561], [1497974400000, 1.4629], [1498060800000, 1.4494], [1498147200000, 1.447], [1498406400000, 1.4705], [1498492800000, 1.4739], [1498579200000, 1.4661], [1498665600000, 1.4697], [1498752000000, 1.474], [1499011200000, 1.479], [1499097600000, 1.4712], [1499184000000, 1.4895], [1499270400000, 1.5011], [1499356800000, 1.5118], [1499616000000, 1.5163], [1499702400000, 1.4977], [1499788800000, 1.498], [1499875200000, 1.5042], [1499961600000, 1.508], [1500220800000, 1.482], [1500307200000, 1.4964], [1500393600000, 1.5363], [1500480000000, 1.5408], [1500566400000, 1.5389], [1500825600000, 1.539], [1500912000000, 1.5292], [1500998400000, 1.5336], [1501084800000, 1.5228], [1501171200000, 1.536], [1501430400000, 1.5617], [1501516800000, 1.5605], [1501603200000, 1.5532], [1501689600000, 1.5551], [1501776000000, 1.5556], [1502035200000, 1.5738], [1502121600000, 1.5723], [1502208000000, 1.5814], [1502294400000, 1.573], [1502380800000, 1.5355], [1502640000000, 1.5499], [1502726400000, 1.5559], [1502812800000, 1.5532], [1502899200000, 1.5621], [1502985600000, 1.5608], [1503244800000, 1.5743], [1503331200000, 1.5712], [1503417600000, 1.5571], [1503504000000, 1.5489], [1503590400000, 1.569], [1503849600000, 1.5805], [1503936000000, 1.577], [1504022400000, 1.591], [1504108800000, 1.5956], [1504195200000, 1.6048], [1504454400000, 1.6053], [1504540800000, 1.603], [1504627200000, 1.6056], [1504713600000, 1.5914], [1504800000000, 1.5925], [1505059200000, 1.6033], [1505145600000, 1.6127], [1505232000000, 1.6152], [1505318400000, 1.6164], [1505404800000, 1.6082], [1505664000000, 1.6154], [1505750400000, 1.6157], [1505836800000, 1.6276], [1505923200000, 1.6121], [1506009600000, 1.6035], [1506268800000, 1.5776], [1506355200000, 1.5848], [1506441600000, 1.6037], [1506528000000, 1.6012], [1506614400000, 1.6053], [1507478400000, 1.6176], [1507564800000, 1.6171], [1507651200000, 1.6053], [1507737600000, 1.6017], [1507824000000, 1.61], [1508083200000, 1.5997], [1508169600000, 1.6067], [1508256000000, 1.6112], [1508342400000, 1.5951], [1508428800000, 1.5972], [1508688000000, 1.6076], [1508774400000, 1.6062], [1508860800000, 1.6134], [1508947200000, 1.631], [1509033600000, 1.6302], [1509292800000, 1.6324], [1509379200000, 1.6425], [1509465600000, 1.6306], [1509552000000, 1.6206], [1509638400000, 1.6209], [1509897600000, 1.6445], [1509984000000, 1.6483], [1510070400000, 1.6532], [1510156800000, 1.6754], [1510243200000, 1.7083], [1510502400000, 1.72], [1510588800000, 1.7115], [1510675200000, 1.6931], [1510761600000, 1.7158], [1510848000000, 1.705], [1511107200000, 1.7246], [1511193600000, 1.728], [1511280000000, 1.7212], [1511366400000, 1.6686], [1511452800000, 1.6631], [1511712000000, 1.6471], [1511798400000, 1.6574], [1511884800000, 1.6769], [1511971200000, 1.656], [1512057600000, 1.6591], [1512316800000, 1.6582], [1512403200000, 1.6437], [1512489600000, 1.6493], [1512576000000, 1.6368], [1512662400000, 1.6432], [1512921600000, 1.6615], [1513008000000, 1.6443], [1513094400000, 1.6546], [1513180800000, 1.6467], [1513267200000, 1.6288], [1513526400000, 1.6195], [1513612800000, 1.6319], [1513699200000, 1.6271], [1513785600000, 1.6427], [1513872000000, 1.6403], [1514131200000, 1.6283], [1514217600000, 1.6361], [1514304000000, 1.6179], [1514390400000, 1.6234], [1514476800000, 1.6362], [1514649600000, 1.6361], [1514822400000, 1.6555], [1514908800000, 1.6651], [1514995200000, 1.6722], [1515081600000, 1.6745], [1515340800000, 1.6825], [1515427200000, 1.6812], [1515513600000, 1.6768], [1515600000000, 1.6716], [1515686400000, 1.667], [1515945600000, 1.6469], [1516032000000, 1.6601], [1516118400000, 1.6586], [1516204800000, 1.6632], [1516291200000, 1.653], [1516550400000, 1.6678], [1516636800000, 1.6755], [1516723200000, 1.6814], [1516809600000, 1.6801], [1516896000000, 1.6791], [1517155200000, 1.6623], [1517241600000, 1.6528], [1517328000000, 1.6523], [1517414400000, 1.6383], [1517500800000, 1.6503], [1517760000000, 1.6523], [1517846400000, 1.6074], [1517932800000, 1.5848], [1518019200000, 1.579], [1518105600000, 1.5345], [1518364800000, 1.5577], [1518451200000, 1.5675], [1518537600000, 1.5708], [1519228800000, 1.605], [1519315200000, 1.6005], [1519574400000, 1.6407], [1519660800000, 1.6404], [1519747200000, 1.6442], [1519833600000, 1.6661], [1519920000000, 1.6519], [1520179200000, 1.6672], [1520265600000, 1.6766], [1520352000000, 1.6641], [1520438400000, 1.6644], [1520524800000, 1.6949], [1520784000000, 1.7184], [1520870400000, 1.7048], [1520956800000, 1.6855], [1521043200000, 1.6944], [1521129600000, 1.6776], [1521388800000, 1.6958], [1521475200000, 1.7017], [1521561600000, 1.6807], [1521648000000, 1.6681], [1521734400000, 1.6153], [1521993600000, 1.6484], [1522080000000, 1.6877], [1522166400000, 1.6757], [1522252800000, 1.6764], [1522339200000, 1.7144], [1522598400000, 1.7222], [1522684800000, 1.719], [1522771200000, 1.6928], [1523203200000, 1.6954], [1523289600000, 1.6914], [1523376000000, 1.6959], [1523462400000, 1.6866], [1523548800000, 1.6926], [1523808000000, 1.7063], [1523894400000, 1.6682], [1523980800000, 1.704], [1524067200000, 1.708], [1524153600000, 1.6833], [1524412800000, 1.6574], [1524499200000, 1.6844], [1524585600000, 1.6907], [1524672000000, 1.671], [1524758400000, 1.6734], [1525190400000, 1.6751], [1525276800000, 1.6865], [1525363200000, 1.6902], [1525622400000, 1.7177], [1525708800000, 1.7261], [1525795200000, 1.7258], [1525881600000, 1.7283], [1525968000000, 1.7037], [1526227200000, 1.7049], [1526313600000, 1.7265], [1526400000000, 1.7216], [1526486400000, 1.7071], [1526572800000, 1.7153], [1526832000000, 1.7345], [1526918400000, 1.7376], [1527004800000, 1.7327], [1527091200000, 1.7209], [1527177600000, 1.712], [1527436800000, 1.709], [1527523200000, 1.6949], [1527609600000, 1.6689], [1527696000000, 1.6859], [1527782400000, 1.6593], [1528041600000, 1.6546], [1528128000000, 1.6873], [1528214400000, 1.6924], [1528300800000, 1.6836], [1528387200000, 1.6702], [1528646400000, 1.6673], [1528732800000, 1.6801], [1528819200000, 1.6634], [1528905600000, 1.6556], [1528992000000, 1.6457], [1529337600000, 1.5906], [1529424000000, 1.5968], [1529510400000, 1.5677], [1529596800000, 1.5887], [1529856000000, 1.5694], [1529942400000, 1.5798], [1530028800000, 1.5676], [1530115200000, 1.5618], [1530201600000, 1.6086], [1530288000000, 1.6086], [1530460800000, 1.5948], [1530547200000, 1.6064], [1530633600000, 1.5723], [1530720000000, 1.5552], [1530806400000, 1.5646], [1531065600000, 1.598], [1531152000000, 1.6008], [1531238400000, 1.5814], [1531324800000, 1.6177], [1531411200000, 1.6216], [1531670400000, 1.631], [1531756800000, 1.6325], [1531843200000, 1.6196], [1531929600000, 1.6146], [1532016000000, 1.6375], [1532275200000, 1.6479], [1532361600000, 1.6549], [1532448000000, 1.6608], [1532534400000, 1.6364], [1532620800000, 1.6302], [1532880000000, 1.6142], [1532966400000, 1.6111], [1533052800000, 1.6005], [1533139200000, 1.5868], [1533225600000, 1.5599], [1533484800000, 1.5377], [1533571200000, 1.5776], [1533657600000, 1.5563], [1533744000000, 1.5969], [1533830400000, 1.6034], [1534089600000, 1.616], [1534176000000, 1.6077], [1534262400000, 1.5844], [1534348800000, 1.5722], [1534435200000, 1.5582], [1534694400000, 1.5665], [1534780800000, 1.5773], [1534867200000, 1.5677], [1534953600000, 1.5807], [1535040000000, 1.577], [1535299200000, 1.6055], [1535385600000, 1.6123], [1535472000000, 1.6128], [1535558400000, 1.5947], [1535644800000, 1.5899], [1535904000000, 1.5961], [1535990400000, 1.6211], [1536076800000, 1.5995], [1536163200000, 1.5927], [1536249600000, 1.5831], [1536508800000, 1.5612], [1536595200000, 1.5656], [1536681600000, 1.5578], [1536768000000, 1.5699], [1536854400000, 1.5447], [1537113600000, 1.5333], [1537200000000, 1.5554], [1537286400000, 1.5689], [1537372800000, 1.566], [1537459200000, 1.5811], [1537804800000, 1.5775], [1537891200000, 1.5868], [1537977600000, 1.5748], [1538064000000, 1.5843], [1538928000000, 1.5379], [1539014400000, 1.5355], [1539100800000, 1.5335], [1539187200000, 1.4662], [1539273600000, 1.4877], [1539532800000, 1.4792], [1539619200000, 1.4615], [1539705600000, 1.4763], [1539792000000, 1.4605], [1539878400000, 1.5032], [1540137600000, 1.5557], [1540224000000, 1.5336], [1540310400000, 1.5289], [1540396800000, 1.528], [1540483200000, 1.5137], [1540742400000, 1.4988], [1540828800000, 1.5085], [1540915200000, 1.5195], [1541001600000, 1.5269], [1541088000000, 1.5676], [1541347200000, 1.5594], [1541433600000, 1.5571], [1541520000000, 1.5575], [1541606400000, 1.5476], [1541692800000, 1.544], [1541952000000, 1.5703], [1542038400000, 1.577], [1542124800000, 1.5687], [1542211200000, 1.5824], [1542297600000, 1.5919], [1542556800000, 1.5956], [1542643200000, 1.5668], [1542729600000, 1.5645], [1542816000000, 1.5593], [1542902400000, 1.5319], [1543161600000, 1.5297], [1543248000000, 1.5337], [1543334400000, 1.5518], [1543420800000, 1.5324], [1543507200000, 1.5463], [1543766400000, 1.5766], [1543852800000, 1.5774], [1543939200000, 1.5853], [1544025600000, 1.5551], [1544112000000, 1.5584], [1544371200000, 1.5527], [1544457600000, 1.5605], [1544544000000, 1.5627], [1544630400000, 1.5748], [1544716800000, 1.5477], [1544976000000, 1.5329], [1545062400000, 1.5276], [1545148800000, 1.5057], [1545235200000, 1.5111], [1545321600000, 1.5045], [1545580800000, 1.515], [1545667200000, 1.5107], [1545753600000, 1.5054], [1545840000000, 1.4942], [1545926400000, 1.4999], [1546185600000, 1.4998], [1546358400000, 1.4871], [1546444800000, 1.4715], [1546531200000, 1.4972], [1546790400000, 1.5265], [1546876800000, 1.5239], [1546963200000, 1.5205], [1547049600000, 1.5266], [1547136000000, 1.528], [1547395200000, 1.5137], [1547481600000, 1.5349], [1547568000000, 1.5292], [1547654400000, 1.5175], [1547740800000, 1.5302], [1548000000000, 1.5426], [1548086400000, 1.5339], [1548172800000, 1.5408], [1548259200000, 1.5535], [1548345600000, 1.5639], [1548604800000, 1.5713], [1548691200000, 1.5626], [1548777600000, 1.5469], [1548864000000, 1.5452], [1548950400000, 1.5766], [1549814400000, 1.6108], [1549900800000, 1.615], [1549987200000, 1.6365], [1550073600000, 1.6426], [1550160000000, 1.629], [1550419200000, 1.6741], [1550505600000, 1.6686], [1550592000000, 1.672], [1550678400000, 1.6785], [1550764800000, 1.7152], [1551024000000, 1.7707], [1551110400000, 1.7613], [1551196800000, 1.7305], [1551283200000, 1.7374], [1551369600000, 1.75], [1551628800000, 1.7681], [1551715200000, 1.7921], [1551801600000, 1.7933], [1551888000000, 1.7892], [1551974400000, 1.759], [1552233600000, 1.8174], [1552320000000, 1.8645], [1552406400000, 1.8246], [1552492800000, 1.7945], [1552579200000, 1.8079], [1552838400000, 1.8322], [1552924800000, 1.8358], [1553011200000, 1.8167], [1553097600000, 1.8249], [1553184000000, 1.8235], [1553443200000, 1.8028], [1553529600000, 1.782], [1553616000000, 1.7937], [1553702400000, 1.7923], [1553788800000, 1.83], [1554048000000, 1.8797], [1554134400000, 1.8806], [1554220800000, 1.8864], [1554307200000, 1.8923], [1554652800000, 1.8676], [1554739200000, 1.8767], [1554825600000, 1.8741], [1554912000000, 1.8501], [1554998400000, 1.8469], [1555257600000, 1.8345], [1555344000000, 1.8586], [1555430400000, 1.8842], [1555516800000, 1.8742], [1555603200000, 1.8887], [1555862400000, 1.8678], [1555948800000, 1.8594], [1556035200000, 1.8677], [1556121600000, 1.8324], [1556208000000, 1.8169], [1556467200000, 1.8054], [1556553600000, 1.8066], [1557072000000, 1.7229], [1557158400000, 1.7402], [1557244800000, 1.7225], [1557331200000, 1.709], [1557417600000, 1.7597], [1557676800000, 1.7366], [1557763200000, 1.7291], [1557849600000, 1.7652], [1557936000000, 1.7648], [1558022400000, 1.7312], [1558281600000, 1.7052], [1558368000000, 1.7263], [1558454400000, 1.7285], [1558540800000, 1.6931], [1558627200000, 1.6973], [1558886400000, 1.716], [1558972800000, 1.7297], [1559059200000, 1.7211], [1559145600000, 1.7087], [1559232000000, 1.7106], [1559491200000, 1.7048], [1559577600000, 1.6913], [1559664000000, 1.6924], [1559750400000, 1.6694], [1560096000000, 1.6886], [1560182400000, 1.7231], [1560268800000, 1.7114], [1560355200000, 1.7069], [1560441600000, 1.6924], [1560700800000, 1.685], [1560787200000, 1.6894], [1560873600000, 1.7158], [1560960000000, 1.747], [1561046400000, 1.7556], [1561305600000, 1.7555], [1561392000000, 1.744], [1561478400000, 1.7569], [1561564800000, 1.7851], [1561651200000, 1.7776], [1561824000000, 1.7775], [1561910400000, 1.8308], [1561996800000, 1.8352], [1562083200000, 1.8142], [1562169600000, 1.8039], [1562256000000, 1.8163], [1562515200000, 1.7927], [1562601600000, 1.7944], [1562688000000, 1.7993], [1562774400000, 1.7944], [1562860800000, 1.8002], [1563120000000, 1.8123], [1563206400000, 1.8065], [1563292800000, 1.8069], [1563379200000, 1.7851], [1563465600000, 1.7939], [1563724800000, 1.784], [1563811200000, 1.8006], [1563897600000, 1.8255], [1563984000000, 1.8351], [1564070400000, 1.8455], [1564329600000, 1.8473], [1564416000000, 1.8497], [1564502400000, 1.844], [1564588800000, 1.8388], [1564675200000, 1.8263], [1564934400000, 1.8056], [1565020800000, 1.8018], [1565107200000, 1.7978], [1565193600000, 1.8163], [1565280000000, 1.8041], [1565539200000, 1.8476], [1565625600000, 1.8462], [1565712000000, 1.8522], [1565798400000, 1.8666], [1565884800000, 1.8736], [1566144000000, 1.9145], [1566230400000, 1.9186], [1566316800000, 1.9206], [1566403200000, 1.913], [1566489600000, 1.9252], [1566748800000, 1.9091], [1566835200000, 1.9281], [1566921600000, 1.9198], [1567008000000, 1.9217], [1567094400000, 1.9166], [1567353600000, 1.9455], [1567440000000, 1.9489], [1567526400000, 1.9548], [1567612800000, 1.9682], [1567699200000, 1.9774], [1567958400000, 2.011], [1568044800000, 2.004], [1568131200000, 1.9875], [1568217600000, 1.9917], [1568563200000, 2.0007], [1568649600000, 1.9765], [1568736000000, 1.9842], [1568822400000, 2.0034], [1568908800000, 2.008], [1569168000000, 2.0031], [1569254400000, 2.0186], [1569340800000, 1.9923], [1569427200000, 1.9669], [1569513600000, 1.9883], [1569772800000, 1.9641], [1570464000000, 1.9584], [1570550400000, 1.9665], [1570636800000, 1.9997], [1570723200000, 2.0089], [1570982400000, 2.0292], [1571068800000, 2.0067], [1571155200000, 2.0018], [1571241600000, 2.0051], [1571328000000, 1.9953], [1571587200000, 1.9878], [1571673600000, 2.0045], [1571760000000, 1.9882], [1571846400000, 1.9922], [1571932800000, 2.0128], [1572192000000, 2.0262], [1572278400000, 2.0234], [1572364800000, 2.0184], [1572451200000, 2.0148], [1572537600000, 2.0383], [1572796800000, 2.0524], [1572883200000, 2.0634], [1572969600000, 2.053], [1573056000000, 2.0692], [1573142400000, 2.0669], [1573401600000, 2.0456], [1573488000000, 2.041], [1573574400000, 2.0505], [1573660800000, 2.0726], [1573747200000, 2.0695], [1574006400000, 2.0752], [1574092800000, 2.1015], [1574179200000, 2.0878], [1574265600000, 2.081], [1574352000000, 2.0573], [1574611200000, 2.0426], [1574697600000, 2.0501], [1574784000000, 2.0518], [1574870400000, 2.0489], [1574956800000, 2.0426], [1575216000000, 2.0467], [1575302400000, 2.0515], [1575388800000, 2.0442], [1575475200000, 2.0631], [1575561600000, 2.078], [1575820800000, 2.0747], [1575907200000, 2.0858], [1575993600000, 2.082], [1576080000000, 2.0814], [1576166400000, 2.1028], [1576425600000, 2.1261], [1576512000000, 2.1475], [1576598400000, 2.1445], [1576684800000, 2.1445], [1576771200000, 2.1326], [1577030400000, 2.1085], [1577116800000, 2.1316], [1577203200000, 2.1437], [1577289600000, 2.155], [1577376000000, 2.1457], [1577635200000, 2.1529], [1577721600000, 2.164], [1577894400000, 2.2023], [1577980800000, 2.2013], [1578240000000, 2.2023], [1578326400000, 2.2177], [1578412800000, 2.1983], [1578499200000, 2.2235], [1578585600000, 2.2202], [1578844800000, 2.2452], [1578931200000, 2.2501], [1579017600000, 2.2367], [1579104000000, 2.2344], [1579190400000, 2.222], [1579449600000, 2.2391], [1579536000000, 2.2195], [1579622400000, 2.2519], [1579708800000, 2.2132], [1580659200000, 2.091], [1580745600000, 2.1728], [1580832000000, 2.1953], [1580918400000, 2.2381], [1581004800000, 2.2336], [1581264000000, 2.253], [1581350400000, 2.2542], [1581436800000, 2.2888], [1581523200000, 2.2857], [1581609600000, 2.2963], [1581868800000, 2.3394], [1581955200000, 2.3382], [1582041600000, 2.3139], [1582128000000, 2.3497], [1582214400000, 2.3709], [1582473600000, 2.3804], [1582560000000, 2.3974], [1582646400000, 2.3301], [1582732800000, 2.3338], [1582819200000, 2.2689], [1583078400000, 2.313], [1583164800000, 2.3285], [1583251200000, 2.3233], [1583337600000, 2.3399], [1583424000000, 2.3233], [1583683200000, 2.2492], [1583769600000, 2.2841], [1583856000000, 2.2563], [1583942400000, 2.2217], [1584028800000, 2.2044], [1584288000000, 2.1164], [1584374400000, 2.1158], [1584460800000, 2.0869], [1584547200000, 2.0775], [1584633600000, 2.0946], [1584892800000, 2.0284], [1584979200000, 2.0658], [1585065600000, 2.1165], [1585152000000, 2.1107], [1585238400000, 2.1006], [1585497600000, 2.0675], [1585584000000, 2.0806], [1585670400000, 2.0773], [1585756800000, 2.1186], [1585843200000, 2.1086], [1586188800000, 2.1535], [1586275200000, 2.1373], [1586361600000, 2.1463], [1586448000000, 2.1223], [1586707200000, 2.0985], [1586793600000, 2.1494], [1586880000000, 2.1453], [1586966400000, 2.1623], [1587052800000, 2.1642], [1587312000000, 2.172], [1587398400000, 2.1546], [1587484800000, 2.1648], [1587571200000, 2.1649], [1587657600000, 2.148], [1587916800000, 2.1426], [1588003200000, 2.1634], [1588089600000, 2.1531], [1588176000000, 2.1884], [1588694400000, 2.2158], [1588780800000, 2.2138], [1588867200000, 2.2282], [1589126400000, 2.2176], [1589212800000, 2.231], [1589299200000, 2.2481], [1589385600000, 2.2264], [1589472000000, 2.2365], [1589731200000, 2.2177], [1589817600000, 2.2455], [1589904000000, 2.2435], [1589990400000, 2.2151], [1590076800000, 2.1824], [1590336000000, 2.1794], [1590422400000, 2.2186], [1590508800000, 2.1992], [1590595200000, 2.1919], [1590681600000, 2.2245], [1590940800000, 2.2796], [1591027200000, 2.264], [1591113600000, 2.2722], [1591200000000, 2.2845], [1591286400000, 2.2913], [1591545600000, 2.2813], [1591632000000, 2.2977], [1591718400000, 2.3057], [1591804800000, 2.2933], [1591891200000, 2.3], [1592150400000, 2.3002], [1592236800000, 2.3317], [1592323200000, 2.3296], [1592409600000, 2.3456], [1592496000000, 2.3738], [1592755200000, 2.38], [1592841600000, 2.4057], [1592928000000, 2.4042], [1593360000000, 2.4037], [1593446400000, 2.443], [1593532800000, 2.4405], [1593619200000, 2.4483], [1593705600000, 2.4591], [1593964800000, 2.4978], [1594051200000, 2.5617], [1594137600000, 2.5971], [1594224000000, 2.6374], [1594310400000, 2.635], [1594569600000, 2.7011], [1594656000000, 2.6675], [1594742400000, 2.6334], [1594828800000, 2.5307], [1594915200000, 2.5575], [1595174400000, 2.5784], [1595260800000, 2.5891], [1595347200000, 2.6114], [1595433600000, 2.6213], [1595520000000, 2.5121], [1595779200000, 2.5242], [1595865600000, 2.5625], [1595952000000, 2.6222], [1596038400000, 2.6076], [1596124800000, 2.6425], [1596384000000, 2.6864], [1596470400000, 2.6615], [1596556800000, 2.6959], [1596643200000, 2.6604], [1596729600000, 2.6313], [1596988800000, 2.6184], [1597075200000, 2.5922], [1597161600000, 2.5796], [1597248000000, 2.573], [1597334400000, 2.6027], [1597593600000, 2.6289], [1597680000000, 2.6308], [1597766400000, 2.5753], [1597852800000, 2.5499], [1597939200000, 2.5709], [1598198400000, 2.614], [1598284800000, 2.6059], [1598371200000, 2.5713], [1598457600000, 2.5889], [1598544000000, 2.6359], [1598803200000, 2.6169], [1598889600000, 2.6351], [1598976000000, 2.6427], [1599062400000, 2.6328], [1599148800000, 2.626], [1599408000000, 2.5661], [1599494400000, 2.5569], [1599580800000, 2.4907], [1599667200000, 2.487], [1599753600000, 2.5193], [1600012800000, 2.5321], [1600099200000, 2.5524], [1600185600000, 2.5457], [1600272000000, 2.551], [1600358400000, 2.5678], [1600617600000, 2.5518], [1600704000000, 2.5246], [1600790400000, 2.5315], [1600876800000, 2.4826], [1600963200000, 2.486], [1601222400000, 2.4871], [1601308800000, 2.5149], [1601395200000, 2.5205], [1602172800000, 2.5738], [1602432000000, 2.636], [1602518400000, 2.6709], [1602604800000, 2.649], [1602691200000, 2.6387], [1602777600000, 2.6068], [1603036800000, 2.5987], [1603123200000, 2.641], [1603209600000, 2.6162], [1603296000000, 2.6028], [1603382400000, 2.5652], [1603641600000, 2.5796], [1603728000000, 2.6061], [1603814400000, 2.6451], [1603900800000, 2.6601], [1603987200000, 2.6409], [1604246400000, 2.6958], [1604332800000, 2.7123], [1604419200000, 2.7356], [1604505600000, 2.7866], [1604592000000, 2.7769], [1604851200000, 2.7972], [1604937600000, 2.7791], [1605024000000, 2.7486], [1605110400000, 2.7639], [1605196800000, 2.7676], [1605456000000, 2.7947], [1605542400000, 2.7795], [1605628800000, 2.7459], [1605715200000, 2.7778], [1605801600000, 2.7893], [1606060800000, 2.8131], [1606147200000, 2.8019], [1606233600000, 2.7672], [1606320000000, 2.7534], [1606406400000, 2.7651], [1606665600000, 2.7516], [1606752000000, 2.7827], [1606838400000, 2.7739], [1606924800000, 2.7738], [1607011200000, 2.7938], [1607270400000, 2.7862], [1607356800000, 2.7989], [1607443200000, 2.7673], [1607529600000, 2.7699], [1607616000000, 2.7606], [1607875200000, 2.779], [1607961600000, 2.8051], [1608048000000, 2.8068], [1608134400000, 2.8192], [1608220800000, 2.8362], [1608480000000, 2.888], [1608566400000, 2.8547], [1608652800000, 2.8806], [1608739200000, 2.8855], [1608825600000, 2.9291], [1609084800000, 2.9342], [1609171200000, 2.8911], [1609257600000, 2.9471], [1609344000000, 2.9765], [1609689600000, 3.0541], [1609776000000, 3.1076], [1609862400000, 3.106], [1609948800000, 3.1455], [1610035200000, 3.1411], [1610294400000, 3.1467], [1610380800000, 3.2135], [1610467200000, 3.1735], [1610553600000, 3.138], [1610640000000, 3.149], [1610899200000, 3.1999], [1610985600000, 3.1632], [1611072000000, 3.1881], [1611158400000, 3.2389], [1611244800000, 3.2725], [1611504000000, 3.2891], [1611590400000, 3.2391], [1611676800000, 3.264], [1611763200000, 3.1878], [1611849600000, 3.1749], [1612108800000, 3.1971], [1612195200000, 3.2358], [1612281600000, 3.2259], [1612368000000, 3.2225], [1612454400000, 3.1886], [1612713600000, 3.2567], [1612800000000, 3.3], [1612886400000, 3.3451], [1613577600000, 3.3383], [1613664000000, 3.3009], [1613923200000, 3.2359], [1614009600000, 3.2151], [1614096000000, 3.1401], [1614182400000, 3.1405], [1614268800000, 3.1026], [1614528000000, 3.1341], [1614614400000, 3.1106], [1614700800000, 3.1443], [1614787200000, 3.0591], [1614873600000, 3.0446], [1615132800000, 2.9767], [1615219200000, 2.936], [1615305600000, 2.9594], [1615392000000, 3.0062], [1615478400000, 3.0111], [1615737600000, 2.9708], [1615824000000, 2.9908], [1615910400000, 3.0073], [1615996800000, 3.0222], [1616083200000, 2.9656], [1616342400000, 2.9797], [1616428800000, 2.9544], [1616515200000, 2.9004], [1616601600000, 2.912], [1616688000000, 2.9651], [1616947200000, 2.9685], [1617033600000, 2.9918], [1617120000000, 2.9678], [1617206400000, 2.9911], [1617292800000, 3.0052], [1617638400000, 2.9998], [1617724800000, 2.9981], [1617811200000, 3.0048], [1617897600000, 2.97], [1618156800000, 2.9157], [1618243200000, 2.9243], [1618329600000, 2.9643], [1618416000000, 2.958], [1618502400000, 2.946], [1618761600000, 3.025], [1618848000000, 3.0317], [1618934400000, 3.0289], [1619020800000, 3.0351], [1619107200000, 3.0546], [1619366400000, 3.0369], [1619452800000, 3.032], [1619539200000, 3.0576], [1619625600000, 3.0648], [1619712000000, 3.0683], [1620230400000, 3.0453], [1620316800000, 3.0109], [1620576000000, 3.0261], [1620662400000, 3.0058], [1620748800000, 3.0148], [1620835200000, 2.9823], [1620921600000, 3.0189], [1621180800000, 3.0697], [1621267200000, 3.0709], [1621353600000, 3.0752], [1621440000000, 3.0715], [1621526400000, 3.07], [1621785600000, 3.0713], [1621872000000, 3.0992], [1621958400000, 3.1004], [1622044800000, 3.1063], [1622131200000, 3.1226], [1622390400000, 3.1608], [1622476800000, 3.1501], [1622563200000, 3.1325], [1622649600000, 3.1089], [1622736000000, 3.1444], [1622995200000, 3.1209], [1623081600000, 3.0951], [1623168000000, 3.1015], [1623254400000, 3.1376], [1623340800000, 3.134], [1623686400000, 3.1194], [1623772800000, 3.0453], [1623859200000, 3.0681], [1623945600000, 3.1083], [1624204800000, 3.1077], [1624291200000, 3.1115], [1624377600000, 3.1397], [1624464000000, 3.128], [1624550400000, 3.162], [1624809600000, 3.1849], [1624896000000, 3.1817], [1624982400000, 3.2075], [1625068800000, 3.2034], [1625155200000, 3.1573], [1625414400000, 3.1862], [1625500800000, 3.1735], [1625587200000, 3.2179], [1625673600000, 3.237], [1625760000000, 3.2561], [1626019200000, 3.3441], [1626105600000, 3.3401], [1626192000000, 3.2862], [1626278400000, 3.3245], [1626364800000, 3.2816], [1626624000000, 3.2785], [1626710400000, 3.2848], [1626796800000, 3.3516], [1626883200000, 3.3715]];
/*累计收益率走势*/
var Data_grandTotal = [{
    "name": "中欧时代先锋股票A",
    "data": [[1611244800000, 0], [1611504000000, 0.79], [1611590400000, -1.59], [1611676800000, -0.40], [1611763200000, -4.02], [1611849600000, -4.64], [1612108800000, -3.58], [1612195200000, -1.74], [1612281600000, -2.21], [1612368000000, -2.37], [1612454400000, -3.98], [1612713600000, -0.75], [1612800000000, 1.31], [1612886400000, 3.45], [1613577600000, 3.12], [1613664000000, 1.35], [1613923200000, -1.74], [1614009600000, -2.73], [1614096000000, -6.29], [1614182400000, -6.27], [1614268800000, -8.07], [1614528000000, -6.57], [1614614400000, -7.69], [1614700800000, -6.09], [1614787200000, -10.13], [1614873600000, -10.82], [1615132800000, -14.05], [1615219200000, -15.98], [1615305600000, -14.87], [1615392000000, -12.65], [1615478400000, -12.41], [1615737600000, -14.33], [1615824000000, -13.38], [1615910400000, -12.59], [1615996800000, -11.89], [1616083200000, -14.57], [1616342400000, -13.91], [1616428800000, -15.11], [1616515200000, -17.67], [1616601600000, -17.12], [1616688000000, -14.60], [1616947200000, -14.44], [1617033600000, -13.33], [1617120000000, -14.47], [1617206400000, -13.36], [1617292800000, -12.69], [1617638400000, -12.95], [1617724800000, -13.03], [1617811200000, -12.71], [1617897600000, -14.37], [1618156800000, -16.94], [1618243200000, -16.54], [1618329600000, -14.64], [1618416000000, -14.94], [1618502400000, -15.51], [1618761600000, -11.75], [1618848000000, -11.44], [1618934400000, -11.57], [1619020800000, -11.27], [1619107200000, -10.35], [1619366400000, -11.19], [1619452800000, -11.42], [1619539200000, -10.21], [1619625600000, -9.86], [1619712000000, -9.70], [1620230400000, -10.79], [1620316800000, -12.42], [1620576000000, -11.70], [1620662400000, -12.67], [1620748800000, -12.24], [1620835200000, -13.78], [1620921600000, -12.04], [1621180800000, -9.63], [1621267200000, -9.57], [1621353600000, -9.37], [1621440000000, -9.55], [1621526400000, -9.62], [1621785600000, -9.56], [1621872000000, -8.23], [1621958400000, -8.17], [1622044800000, -7.89], [1622131200000, -7.12], [1622390400000, -5.30], [1622476800000, -5.81], [1622563200000, -6.65], [1622649600000, -7.77], [1622736000000, -6.08], [1622995200000, -7.20], [1623081600000, -8.42], [1623168000000, -8.12], [1623254400000, -6.41], [1623340800000, -6.58], [1623686400000, -7.27], [1623772800000, -10.79], [1623859200000, -9.71], [1623945600000, -7.80], [1624204800000, -7.83], [1624291200000, -7.65], [1624377600000, -6.31], [1624464000000, -6.86], [1624550400000, -5.25], [1624809600000, -4.16], [1624896000000, -4.31], [1624982400000, -3.09], [1625068800000, -3.28], [1625155200000, -5.47], [1625414400000, -4.10], [1625500800000, -4.70], [1625587200000, -2.59], [1625673600000, -1.69], [1625760000000, -0.78], [1626019200000, 3.40], [1626105600000, 3.21], [1626192000000, 0.65], [1626278400000, 2.47], [1626364800000, 0.43], [1626624000000, 0.28], [1626710400000, 0.58], [1626796800000, 4.01], [1626883200000, 5.03]]
},
{
    "name": "同类平均",
    "data": [[1611244800000, 0], [1611504000000, 0.98], [1611590400000, -1.39], [1611676800000, -1.17], [1611763200000, -4.05], [1611849600000, -4.56], [1612108800000, -3.29], [1612195200000, -1.31], [1612281600000, -1.28], [1612368000000, -2.14], [1612454400000, -2.55], [1612713600000, -1.04], [1612800000000, 1.12], [1612886400000, 2.83], [1613577600000, 1.78], [1613664000000, 1.37], [1613923200000, -1.76], [1614009600000, -2.18], [1614096000000, -5.08], [1614182400000, -5.02], [1614268800000, -7.32], [1614528000000, -5.28], [1614614400000, -6.21], [1614700800000, -4.85], [1614787200000, -8.30], [1614873600000, -8.51], [1615132800000, -12.01], [1615219200000, -13.90], [1615305600000, -12.91], [1615392000000, -10.77], [1615478400000, -10.72], [1615737600000, -12.87], [1615824000000, -12.06], [1615910400000, -11.18], [1615996800000, -10.14], [1616083200000, -11.99], [1616342400000, -11.27], [1616428800000, -12.41], [1616515200000, -13.90], [1616601600000, -13.53], [1616688000000, -11.33], [1616947200000, -11.17], [1617033600000, -10.14], [1617120000000, -10.82], [1617206400000, -9.35], [1617292800000, -8.60], [1617638400000, -8.71], [1617724800000, -9.39], [1617811200000, -8.95], [1617897600000, -9.92], [1618156800000, -11.81], [1618243200000, -11.78], [1618329600000, -10.59], [1618416000000, -10.82], [1618502400000, -10.60], [1618761600000, -8.53], [1618848000000, -8.38], [1618934400000, -8.16], [1619020800000, -7.83], [1619107200000, -6.96], [1619366400000, -7.57], [1619452800000, -7.07], [1619539200000, -6.17], [1619625600000, -6.03], [1619712000000, -6.13], [1620230400000, -7.08], [1620316800000, -8.92], [1620576000000, -8.97], [1620662400000, -8.99], [1620748800000, -8.29], [1620835200000, -9.17], [1620921600000, -7.68], [1621180800000, -5.97], [1621267200000, -5.88], [1621353600000, -5.82], [1621440000000, -5.40], [1621526400000, -5.90], [1621785600000, -5.50], [1621872000000, -3.42], [1621958400000, -3.69], [1622044800000, -2.99], [1622131200000, -3.29], [1622390400000, -1.83], [1622476800000, -1.41], [1622563200000, -2.45], [1622649600000, -3.07], [1622736000000, -2.37], [1622995200000, -2.20], [1623081600000, -3.15], [1623168000000, -2.87], [1623254400000, -1.75], [1623340800000, -2.11], [1623686400000, -2.63], [1623772800000, -5.08], [1623859200000, -3.74], [1623945600000, -2.71], [1624204800000, -2.03], [1624291200000, -1.45], [1624377600000, -0.59], [1624464000000, -1.10], [1624550400000, 0.26], [1624809600000, 1.08], [1624896000000, 0.62], [1624982400000, 1.60], [1625068800000, 1.42], [1625155200000, -0.97], [1625414400000, -0.31], [1625500800000, -1.20], [1625587200000, 0.93], [1625673600000, 0.45], [1625760000000, 0.50], [1626019200000, 2.49], [1626105600000, 2.69], [1626192000000, 1.89], [1626278400000, 2.93], [1626364800000, 1.53], [1626624000000, 1.44], [1626710400000, 1.65], [1626796800000, 3.54], [1626883200000, 3.78]]
},
{
    "name": "沪深300",
    "data": [[1611244800000, 0], [1611504000000, 1.01], [1611590400000, -1.02], [1611676800000, -0.75], [1611763200000, -3.46], [1611849600000, -3.91], [1612108800000, -2.73], [1612195200000, -1.23], [1612281600000, -1.52], [1612368000000, -1.72], [1612454400000, -1.55], [1612713600000, -0.09], [1612800000000, 2.09], [1612886400000, 4.27], [1613577600000, 3.57], [1613664000000, 3.75], [1613923200000, 0.49], [1614009600000, 0.18], [1614096000000, -2.37], [1614182400000, -1.80], [1614268800000, -4.18], [1614528000000, -2.71], [1614614400000, -3.95], [1614700800000, -2.11], [1614787200000, -5.19], [1614873600000, -5.51], [1615132800000, -8.79], [1615219200000, -10.75], [1615305600000, -10.16], [1615392000000, -7.93], [1615478400000, -7.60], [1615737600000, -9.59], [1615824000000, -8.80], [1615910400000, -8.42], [1615996800000, -7.68], [1616083200000, -10.10], [1616342400000, -9.20], [1616428800000, -10.06], [1616515200000, -11.51], [1616601600000, -11.55], [1616688000000, -9.55], [1616947200000, -9.39], [1617033600000, -8.53], [1617120000000, -9.36], [1617206400000, -8.24], [1617292800000, -7.33], [1617638400000, -7.71], [1617724800000, -8.37], [1617811200000, -8.22], [1617897600000, -9.60], [1618156800000, -11.17], [1618243200000, -11.31], [1618329600000, -10.58], [1618416000000, -11.15], [1618502400000, -10.84], [1618761600000, -8.67], [1618848000000, -8.73], [1618934400000, -8.46], [1619020800000, -8.63], [1619107200000, -7.80], [1619366400000, -8.84], [1619452800000, -8.60], [1619539200000, -8.09], [1619625600000, -7.28], [1619712000000, -8.01], [1620230400000, -9.13], [1620316800000, -10.30], [1620576000000, -10.37], [1620662400000, -9.82], [1620748800000, -9.43], [1620835200000, -10.36], [1620921600000, -8.24], [1621180800000, -6.91], [1621267200000, -6.86], [1621353600000, -7.14], [1621440000000, -6.88], [1621526400000, -7.82], [1621785600000, -7.44], [1621872000000, -4.51], [1621958400000, -4.47], [1622044800000, -4.16], [1622131200000, -4.46], [1622390400000, -4.28], [1622476800000, -4.10], [1622563200000, -5.02], [1622649600000, -5.65], [1622736000000, -5.16], [1622995200000, -5.25], [1623081600000, -6.06], [1623168000000, -5.98], [1623254400000, -5.36], [1623340800000, -6.20], [1623686400000, -7.24], [1623772800000, -8.78], [1623859200000, -8.40], [1623945600000, -8.39], [1624204800000, -8.61], [1624291200000, -8.04], [1624377600000, -7.58], [1624464000000, -7.43], [1624550400000, -5.92], [1624809600000, -5.71], [1624896000000, -6.81], [1624982400000, -6.21], [1625068800000, -6.11], [1625155200000, -8.77], [1625414400000, -8.69], [1625500800000, -8.74], [1625587200000, -7.71], [1625673600000, -8.65], [1625760000000, -8.98], [1626019200000, -7.85], [1626105600000, -7.68], [1626192000000, -8.74], [1626278400000, -7.51], [1626364800000, -8.53], [1626624000000, -8.19], [1626710400000, -8.27], [1626796800000, -7.64], [1626883200000, -7.51]]
}];
/*同类排名走势*/
var Data_rateInSimilarType = [{
    "x": 1454428800000,
    "y": 5,
    "sc": "141"
},
{
    "x": 1454515200000,
    "y": 1,
    "sc": "141"
},
{
    "x": 1454601600000,
    "y": 5,
    "sc": "142"
},
{
    "x": 1455465600000,
    "y": 5,
    "sc": "142"
},
{
    "x": 1455552000000,
    "y": 5,
    "sc": "142"
},
{
    "x": 1455638400000,
    "y": 4,
    "sc": "142"
},
{
    "x": 1455724800000,
    "y": 5,
    "sc": "142"
},
{
    "x": 1455811200000,
    "y": 5,
    "sc": "143"
},
{
    "x": 1456070400000,
    "y": 6,
    "sc": "142"
},
{
    "x": 1456156800000,
    "y": 7,
    "sc": "142"
},
{
    "x": 1456243200000,
    "y": 7,
    "sc": "142"
},
{
    "x": 1456329600000,
    "y": 7,
    "sc": "142"
},
{
    "x": 1456416000000,
    "y": 10,
    "sc": "144"
},
{
    "x": 1456675200000,
    "y": 10,
    "sc": "143"
},
{
    "x": 1456761600000,
    "y": 10,
    "sc": "143"
},
{
    "x": 1456848000000,
    "y": 9,
    "sc": "145"
},
{
    "x": 1456934400000,
    "y": 12,
    "sc": "145"
},
{
    "x": 1457020800000,
    "y": 18,
    "sc": "146"
},
{
    "x": 1457280000000,
    "y": 20,
    "sc": "146"
},
{
    "x": 1457366400000,
    "y": 20,
    "sc": "146"
},
{
    "x": 1457452800000,
    "y": 22,
    "sc": "146"
},
{
    "x": 1457539200000,
    "y": 21,
    "sc": "147"
},
{
    "x": 1457625600000,
    "y": 24,
    "sc": "149"
},
{
    "x": 1457884800000,
    "y": 20,
    "sc": "148"
},
{
    "x": 1457971200000,
    "y": 19,
    "sc": "148"
},
{
    "x": 1458057600000,
    "y": 19,
    "sc": "148"
},
{
    "x": 1458144000000,
    "y": 13,
    "sc": "148"
},
{
    "x": 1458230400000,
    "y": 12,
    "sc": "149"
},
{
    "x": 1458489600000,
    "y": 11,
    "sc": "148"
},
{
    "x": 1458576000000,
    "y": 11,
    "sc": "148"
},
{
    "x": 1458662400000,
    "y": 9,
    "sc": "148"
},
{
    "x": 1458748800000,
    "y": 10,
    "sc": "148"
},
{
    "x": 1458835200000,
    "y": 12,
    "sc": "149"
},
{
    "x": 1459094400000,
    "y": 9,
    "sc": "148"
},
{
    "x": 1459180800000,
    "y": 10,
    "sc": "149"
},
{
    "x": 1459267200000,
    "y": 11,
    "sc": "151"
},
{
    "x": 1459353600000,
    "y": 12,
    "sc": "151"
},
{
    "x": 1459440000000,
    "y": 13,
    "sc": "152"
},
{
    "x": 1459785600000,
    "y": 5,
    "sc": "151"
},
{
    "x": 1459872000000,
    "y": 7,
    "sc": "151"
},
{
    "x": 1459958400000,
    "y": 2,
    "sc": "151"
},
{
    "x": 1460044800000,
    "y": 4,
    "sc": "152"
},
{
    "x": 1460304000000,
    "y": 5,
    "sc": "151"
},
{
    "x": 1460390400000,
    "y": 1,
    "sc": "151"
},
{
    "x": 1460476800000,
    "y": 1,
    "sc": "151"
},
{
    "x": 1460563200000,
    "y": 1,
    "sc": "151"
},
{
    "x": 1460649600000,
    "y": 2,
    "sc": "152"
},
{
    "x": 1460908800000,
    "y": 3,
    "sc": "151"
},
{
    "x": 1460995200000,
    "y": 3,
    "sc": "151"
},
{
    "x": 1461081600000,
    "y": 5,
    "sc": "153"
},
{
    "x": 1461168000000,
    "y": 6,
    "sc": "153"
},
{
    "x": 1461254400000,
    "y": 11,
    "sc": "155"
},
{
    "x": 1461513600000,
    "y": 4,
    "sc": "153"
},
{
    "x": 1461600000000,
    "y": 9,
    "sc": "154"
},
{
    "x": 1461686400000,
    "y": 20,
    "sc": "155"
},
{
    "x": 1461772800000,
    "y": 34,
    "sc": "155"
},
{
    "x": 1461859200000,
    "y": 15,
    "sc": "157"
},
{
    "x": 1462204800000,
    "y": 29,
    "sc": "159"
},
{
    "x": 1462291200000,
    "y": 25,
    "sc": "160"
},
{
    "x": 1462377600000,
    "y": 18,
    "sc": "160"
},
{
    "x": 1462464000000,
    "y": 17,
    "sc": "161"
},
{
    "x": 1462723200000,
    "y": 21,
    "sc": "160"
},
{
    "x": 1462809600000,
    "y": 32,
    "sc": "160"
},
{
    "x": 1462896000000,
    "y": 31,
    "sc": "160"
},
{
    "x": 1462982400000,
    "y": 23,
    "sc": "160"
},
{
    "x": 1463068800000,
    "y": 18,
    "sc": "161"
},
{
    "x": 1463328000000,
    "y": 23,
    "sc": "160"
},
{
    "x": 1463414400000,
    "y": 24,
    "sc": "160"
},
{
    "x": 1463500800000,
    "y": 20,
    "sc": "160"
},
{
    "x": 1463587200000,
    "y": 20,
    "sc": "160"
},
{
    "x": 1463673600000,
    "y": 18,
    "sc": "161"
},
{
    "x": 1463932800000,
    "y": 18,
    "sc": "161"
},
{
    "x": 1464019200000,
    "y": 16,
    "sc": "161"
},
{
    "x": 1464105600000,
    "y": 15,
    "sc": "161"
},
{
    "x": 1464192000000,
    "y": 13,
    "sc": "161"
},
{
    "x": 1464278400000,
    "y": 12,
    "sc": "162"
},
{
    "x": 1464537600000,
    "y": 11,
    "sc": "161"
},
{
    "x": 1464624000000,
    "y": 12,
    "sc": "161"
},
{
    "x": 1464710400000,
    "y": 12,
    "sc": "162"
},
{
    "x": 1464796800000,
    "y": 9,
    "sc": "162"
},
{
    "x": 1464883200000,
    "y": 7,
    "sc": "163"
},
{
    "x": 1465142400000,
    "y": 13,
    "sc": "162"
},
{
    "x": 1465228800000,
    "y": 6,
    "sc": "162"
},
{
    "x": 1465315200000,
    "y": 6,
    "sc": "163"
},
{
    "x": 1465747200000,
    "y": 6,
    "sc": "164"
},
{
    "x": 1465833600000,
    "y": 3,
    "sc": "164"
},
{
    "x": 1465920000000,
    "y": 4,
    "sc": "167"
},
{
    "x": 1466006400000,
    "y": 2,
    "sc": "167"
},
{
    "x": 1466092800000,
    "y": 2,
    "sc": "168"
},
{
    "x": 1466352000000,
    "y": 5,
    "sc": "167"
},
{
    "x": 1466438400000,
    "y": 5,
    "sc": "167"
},
{
    "x": 1466524800000,
    "y": 4,
    "sc": "168"
},
{
    "x": 1466611200000,
    "y": 6,
    "sc": "168"
},
{
    "x": 1466697600000,
    "y": 7,
    "sc": "169"
},
{
    "x": 1466956800000,
    "y": 4,
    "sc": "168"
},
{
    "x": 1467043200000,
    "y": 6,
    "sc": "168"
},
{
    "x": 1467129600000,
    "y": 4,
    "sc": "168"
},
{
    "x": 1467216000000,
    "y": 3,
    "sc": "169"
},
{
    "x": 1467302400000,
    "y": 2,
    "sc": "169"
},
{
    "x": 1467561600000,
    "y": 2,
    "sc": "168"
},
{
    "x": 1467648000000,
    "y": 2,
    "sc": "168"
},
{
    "x": 1467734400000,
    "y": 6,
    "sc": "168"
},
{
    "x": 1467820800000,
    "y": 5,
    "sc": "168"
},
{
    "x": 1467907200000,
    "y": 13,
    "sc": "169"
},
{
    "x": 1468166400000,
    "y": 8,
    "sc": "169"
},
{
    "x": 1468252800000,
    "y": 15,
    "sc": "169"
},
{
    "x": 1468339200000,
    "y": 15,
    "sc": "169"
},
{
    "x": 1468425600000,
    "y": 14,
    "sc": "169"
},
{
    "x": 1468512000000,
    "y": 16,
    "sc": "169"
},
{
    "x": 1468771200000,
    "y": 16,
    "sc": "169"
},
{
    "x": 1468857600000,
    "y": 13,
    "sc": "169"
},
{
    "x": 1468944000000,
    "y": 16,
    "sc": "170"
},
{
    "x": 1469030400000,
    "y": 14,
    "sc": "170"
},
{
    "x": 1469116800000,
    "y": 7,
    "sc": "170"
},
{
    "x": 1469376000000,
    "y": 13,
    "sc": "170"
},
{
    "x": 1469462400000,
    "y": 8,
    "sc": "169"
},
{
    "x": 1469548800000,
    "y": 3,
    "sc": "169"
},
{
    "x": 1469635200000,
    "y": 3,
    "sc": "169"
},
{
    "x": 1469721600000,
    "y": 5,
    "sc": "170"
},
{
    "x": 1469980800000,
    "y": 5,
    "sc": "169"
},
{
    "x": 1470067200000,
    "y": 3,
    "sc": "169"
},
{
    "x": 1470153600000,
    "y": 5,
    "sc": "169"
},
{
    "x": 1470240000000,
    "y": 5,
    "sc": "169"
},
{
    "x": 1470326400000,
    "y": 7,
    "sc": "170"
},
{
    "x": 1470585600000,
    "y": 6,
    "sc": "169"
},
{
    "x": 1470672000000,
    "y": 5,
    "sc": "169"
},
{
    "x": 1470758400000,
    "y": 3,
    "sc": "169"
},
{
    "x": 1470844800000,
    "y": 4,
    "sc": "169"
},
{
    "x": 1470931200000,
    "y": 7,
    "sc": "170"
},
{
    "x": 1471190400000,
    "y": 8,
    "sc": "169"
},
{
    "x": 1471276800000,
    "y": 11,
    "sc": "169"
},
{
    "x": 1471363200000,
    "y": 13,
    "sc": "169"
},
{
    "x": 1471449600000,
    "y": 10,
    "sc": "169"
},
{
    "x": 1471536000000,
    "y": 20,
    "sc": "170"
},
{
    "x": 1471795200000,
    "y": 21,
    "sc": "169"
},
{
    "x": 1471881600000,
    "y": 14,
    "sc": "169"
},
{
    "x": 1471968000000,
    "y": 8,
    "sc": "169"
},
{
    "x": 1472054400000,
    "y": 7,
    "sc": "169"
},
{
    "x": 1472140800000,
    "y": 3,
    "sc": "170"
},
{
    "x": 1472400000000,
    "y": 9,
    "sc": "171"
},
{
    "x": 1472486400000,
    "y": 10,
    "sc": "171"
},
{
    "x": 1472572800000,
    "y": 17,
    "sc": "171"
},
{
    "x": 1472659200000,
    "y": 22,
    "sc": "171"
},
{
    "x": 1472745600000,
    "y": 42,
    "sc": "172"
},
{
    "x": 1473004800000,
    "y": 39,
    "sc": "171"
},
{
    "x": 1473091200000,
    "y": 26,
    "sc": "171"
},
{
    "x": 1473177600000,
    "y": 41,
    "sc": "171"
},
{
    "x": 1473264000000,
    "y": 46,
    "sc": "172"
},
{
    "x": 1473350400000,
    "y": 62,
    "sc": "173"
},
{
    "x": 1473609600000,
    "y": 70,
    "sc": "172"
},
{
    "x": 1473696000000,
    "y": 56,
    "sc": "172"
},
{
    "x": 1473782400000,
    "y": 52,
    "sc": "173"
},
{
    "x": 1474214400000,
    "y": 101,
    "sc": "172"
},
{
    "x": 1474300800000,
    "y": 90,
    "sc": "172"
},
{
    "x": 1474387200000,
    "y": 89,
    "sc": "172"
},
{
    "x": 1474473600000,
    "y": 81,
    "sc": "172"
},
{
    "x": 1474560000000,
    "y": 68,
    "sc": "173"
},
{
    "x": 1474819200000,
    "y": 79,
    "sc": "172"
},
{
    "x": 1474905600000,
    "y": 90,
    "sc": "172"
},
{
    "x": 1474992000000,
    "y": 93,
    "sc": "172"
},
{
    "x": 1475078400000,
    "y": 104,
    "sc": "171"
},
{
    "x": 1475164800000,
    "y": 95,
    "sc": "172"
},
{
    "x": 1476028800000,
    "y": 82,
    "sc": "171"
},
{
    "x": 1476115200000,
    "y": 79,
    "sc": "172"
},
{
    "x": 1476201600000,
    "y": 73,
    "sc": "172"
},
{
    "x": 1476288000000,
    "y": 68,
    "sc": "173"
},
{
    "x": 1476374400000,
    "y": 77,
    "sc": "174"
},
{
    "x": 1476633600000,
    "y": 78,
    "sc": "173"
},
{
    "x": 1476720000000,
    "y": 81,
    "sc": "173"
},
{
    "x": 1476806400000,
    "y": 90,
    "sc": "173"
},
{
    "x": 1476892800000,
    "y": 92,
    "sc": "173"
},
{
    "x": 1476979200000,
    "y": 100,
    "sc": "173"
},
{
    "x": 1477238400000,
    "y": 122,
    "sc": "175"
},
{
    "x": 1477324800000,
    "y": 120,
    "sc": "175"
},
{
    "x": 1477411200000,
    "y": 139,
    "sc": "175"
},
{
    "x": 1477497600000,
    "y": 136,
    "sc": "176"
},
{
    "x": 1477584000000,
    "y": 127,
    "sc": "177"
},
{
    "x": 1477843200000,
    "y": 133,
    "sc": "176"
},
{
    "x": 1477929600000,
    "y": 129,
    "sc": "176"
},
{
    "x": 1478016000000,
    "y": 141,
    "sc": "176"
},
{
    "x": 1478102400000,
    "y": 141,
    "sc": "176"
},
{
    "x": 1478188800000,
    "y": 149,
    "sc": "177"
},
{
    "x": 1478448000000,
    "y": 130,
    "sc": "176"
},
{
    "x": 1478534400000,
    "y": 134,
    "sc": "176"
},
{
    "x": 1478620800000,
    "y": 120,
    "sc": "178"
},
{
    "x": 1478707200000,
    "y": 112,
    "sc": "179"
},
{
    "x": 1478793600000,
    "y": 93,
    "sc": "180"
},
{
    "x": 1479052800000,
    "y": 81,
    "sc": "179"
},
{
    "x": 1479139200000,
    "y": 72,
    "sc": "179"
},
{
    "x": 1479225600000,
    "y": 83,
    "sc": "179"
},
{
    "x": 1479312000000,
    "y": 59,
    "sc": "179"
},
{
    "x": 1479398400000,
    "y": 75,
    "sc": "180"
},
{
    "x": 1479657600000,
    "y": 67,
    "sc": "179"
},
{
    "x": 1479744000000,
    "y": 55,
    "sc": "181"
},
{
    "x": 1479830400000,
    "y": 66,
    "sc": "181"
},
{
    "x": 1479916800000,
    "y": 69,
    "sc": "181"
},
{
    "x": 1480003200000,
    "y": 70,
    "sc": "182"
},
{
    "x": 1480262400000,
    "y": 56,
    "sc": "181"
},
{
    "x": 1480348800000,
    "y": 57,
    "sc": "181"
},
{
    "x": 1480435200000,
    "y": 62,
    "sc": "186"
},
{
    "x": 1480521600000,
    "y": 45,
    "sc": "186"
},
{
    "x": 1480608000000,
    "y": 35,
    "sc": "187"
},
{
    "x": 1480867200000,
    "y": 36,
    "sc": "186"
},
{
    "x": 1480953600000,
    "y": 59,
    "sc": "186"
},
{
    "x": 1481040000000,
    "y": 43,
    "sc": "190"
},
{
    "x": 1481126400000,
    "y": 30,
    "sc": "190"
},
{
    "x": 1481212800000,
    "y": 12,
    "sc": "191"
},
{
    "x": 1481472000000,
    "y": 10,
    "sc": "190"
},
{
    "x": 1481558400000,
    "y": 12,
    "sc": "190"
},
{
    "x": 1481644800000,
    "y": 13,
    "sc": "190"
},
{
    "x": 1481731200000,
    "y": 11,
    "sc": "190"
},
{
    "x": 1481817600000,
    "y": 15,
    "sc": "191"
},
{
    "x": 1482076800000,
    "y": 11,
    "sc": "190"
},
{
    "x": 1482163200000,
    "y": 14,
    "sc": "190"
},
{
    "x": 1482249600000,
    "y": 12,
    "sc": "190"
},
{
    "x": 1482336000000,
    "y": 12,
    "sc": "190"
},
{
    "x": 1482422400000,
    "y": 13,
    "sc": "191"
},
{
    "x": 1482681600000,
    "y": 12,
    "sc": "188"
},
{
    "x": 1482768000000,
    "y": 9,
    "sc": "188"
},
{
    "x": 1482854400000,
    "y": 15,
    "sc": "190"
},
{
    "x": 1482940800000,
    "y": 19,
    "sc": "191"
},
{
    "x": 1483027200000,
    "y": 21,
    "sc": "192"
},
{
    "x": 1483372800000,
    "y": 15,
    "sc": "191"
},
{
    "x": 1483459200000,
    "y": 10,
    "sc": "191"
},
{
    "x": 1483545600000,
    "y": 6,
    "sc": "191"
},
{
    "x": 1483632000000,
    "y": 6,
    "sc": "192"
},
{
    "x": 1483891200000,
    "y": 7,
    "sc": "191"
},
{
    "x": 1483977600000,
    "y": 6,
    "sc": "191"
},
{
    "x": 1484064000000,
    "y": 8,
    "sc": "191"
},
{
    "x": 1484150400000,
    "y": 6,
    "sc": "191"
},
{
    "x": 1484236800000,
    "y": 10,
    "sc": "192"
},
{
    "x": 1484496000000,
    "y": 9,
    "sc": "191"
},
{
    "x": 1484582400000,
    "y": 9,
    "sc": "191"
},
{
    "x": 1484668800000,
    "y": 9,
    "sc": "191"
},
{
    "x": 1484755200000,
    "y": 9,
    "sc": "191"
},
{
    "x": 1484841600000,
    "y": 9,
    "sc": "192"
},
{
    "x": 1485100800000,
    "y": 6,
    "sc": "191"
},
{
    "x": 1485187200000,
    "y": 5,
    "sc": "191"
},
{
    "x": 1485273600000,
    "y": 4,
    "sc": "189"
},
{
    "x": 1485360000000,
    "y": 3,
    "sc": "190"
},
{
    "x": 1486051200000,
    "y": 2,
    "sc": "198"
},
{
    "x": 1486310400000,
    "y": 1,
    "sc": "197"
},
{
    "x": 1486396800000,
    "y": 1,
    "sc": "197"
},
{
    "x": 1486483200000,
    "y": 1,
    "sc": "197"
},
{
    "x": 1486569600000,
    "y": 2,
    "sc": "197"
},
{
    "x": 1486656000000,
    "y": 2,
    "sc": "200"
},
{
    "x": 1486915200000,
    "y": 4,
    "sc": "200"
},
{
    "x": 1487001600000,
    "y": 6,
    "sc": "200"
},
{
    "x": 1487088000000,
    "y": 14,
    "sc": "200"
},
{
    "x": 1487174400000,
    "y": 9,
    "sc": "200"
},
{
    "x": 1487260800000,
    "y": 11,
    "sc": "202"
},
{
    "x": 1487520000000,
    "y": 9,
    "sc": "201"
},
{
    "x": 1487606400000,
    "y": 5,
    "sc": "201"
},
{
    "x": 1487692800000,
    "y": 10,
    "sc": "201"
},
{
    "x": 1487779200000,
    "y": 7,
    "sc": "201"
},
{
    "x": 1487865600000,
    "y": 5,
    "sc": "202"
},
{
    "x": 1488124800000,
    "y": 7,
    "sc": "201"
},
{
    "x": 1488211200000,
    "y": 1,
    "sc": "201"
},
{
    "x": 1488297600000,
    "y": 8,
    "sc": "201"
},
{
    "x": 1488384000000,
    "y": 9,
    "sc": "201"
},
{
    "x": 1488470400000,
    "y": 6,
    "sc": "202"
},
{
    "x": 1488729600000,
    "y": 2,
    "sc": "201"
},
{
    "x": 1488816000000,
    "y": 6,
    "sc": "202"
},
{
    "x": 1488902400000,
    "y": 9,
    "sc": "202"
},
{
    "x": 1488988800000,
    "y": 10,
    "sc": "202"
},
{
    "x": 1489075200000,
    "y": 7,
    "sc": "203"
},
{
    "x": 1489334400000,
    "y": 17,
    "sc": "202"
},
{
    "x": 1489420800000,
    "y": 22,
    "sc": "202"
},
{
    "x": 1489507200000,
    "y": 26,
    "sc": "202"
},
{
    "x": 1489593600000,
    "y": 20,
    "sc": "202"
},
{
    "x": 1489680000000,
    "y": 26,
    "sc": "203"
},
{
    "x": 1489939200000,
    "y": 27,
    "sc": "202"
},
{
    "x": 1490025600000,
    "y": 33,
    "sc": "202"
},
{
    "x": 1490112000000,
    "y": 34,
    "sc": "202"
},
{
    "x": 1490198400000,
    "y": 34,
    "sc": "202"
},
{
    "x": 1490284800000,
    "y": 36,
    "sc": "203"
},
{
    "x": 1490544000000,
    "y": 31,
    "sc": "202"
},
{
    "x": 1490630400000,
    "y": 31,
    "sc": "202"
},
{
    "x": 1490716800000,
    "y": 32,
    "sc": "204"
},
{
    "x": 1490803200000,
    "y": 29,
    "sc": "200"
},
{
    "x": 1490889600000,
    "y": 29,
    "sc": "201"
},
{
    "x": 1491321600000,
    "y": 44,
    "sc": "204"
},
{
    "x": 1491408000000,
    "y": 49,
    "sc": "205"
},
{
    "x": 1491494400000,
    "y": 41,
    "sc": "206"
},
{
    "x": 1491753600000,
    "y": 37,
    "sc": "205"
},
{
    "x": 1491840000000,
    "y": 25,
    "sc": "205"
},
{
    "x": 1491926400000,
    "y": 32,
    "sc": "205"
},
{
    "x": 1492012800000,
    "y": 27,
    "sc": "205"
},
{
    "x": 1492099200000,
    "y": 24,
    "sc": "201"
},
{
    "x": 1492358400000,
    "y": 26,
    "sc": "201"
},
{
    "x": 1492444800000,
    "y": 39,
    "sc": "206"
},
{
    "x": 1492531200000,
    "y": 53,
    "sc": "207"
},
{
    "x": 1492617600000,
    "y": 46,
    "sc": "207"
},
{
    "x": 1492704000000,
    "y": 44,
    "sc": "208"
},
{
    "x": 1492963200000,
    "y": 67,
    "sc": "208"
},
{
    "x": 1493049600000,
    "y": 61,
    "sc": "209"
},
{
    "x": 1493136000000,
    "y": 66,
    "sc": "209"
},
{
    "x": 1493222400000,
    "y": 65,
    "sc": "209"
},
{
    "x": 1493308800000,
    "y": 67,
    "sc": "210"
},
{
    "x": 1493654400000,
    "y": 61,
    "sc": "209"
},
{
    "x": 1493740800000,
    "y": 50,
    "sc": "205"
},
{
    "x": 1493827200000,
    "y": 50,
    "sc": "209"
},
{
    "x": 1493913600000,
    "y": 54,
    "sc": "210"
},
{
    "x": 1494172800000,
    "y": 52,
    "sc": "209"
},
{
    "x": 1494259200000,
    "y": 48,
    "sc": "209"
},
{
    "x": 1494345600000,
    "y": 56,
    "sc": "209"
},
{
    "x": 1494432000000,
    "y": 56,
    "sc": "209"
},
{
    "x": 1494518400000,
    "y": 56,
    "sc": "210"
},
{
    "x": 1494777600000,
    "y": 58,
    "sc": "209"
},
{
    "x": 1494864000000,
    "y": 66,
    "sc": "209"
},
{
    "x": 1494950400000,
    "y": 67,
    "sc": "209"
},
{
    "x": 1495036800000,
    "y": 59,
    "sc": "209"
},
{
    "x": 1495123200000,
    "y": 57,
    "sc": "210"
},
{
    "x": 1495382400000,
    "y": 79,
    "sc": "209"
},
{
    "x": 1495468800000,
    "y": 76,
    "sc": "210"
},
{
    "x": 1495555200000,
    "y": 68,
    "sc": "210"
},
{
    "x": 1495641600000,
    "y": 57,
    "sc": "206"
},
{
    "x": 1495728000000,
    "y": 59,
    "sc": "207"
},
{
    "x": 1496160000000,
    "y": 55,
    "sc": "210"
},
{
    "x": 1496246400000,
    "y": 54,
    "sc": "210"
},
{
    "x": 1496332800000,
    "y": 56,
    "sc": "211"
},
{
    "x": 1496592000000,
    "y": 64,
    "sc": "210"
},
{
    "x": 1496678400000,
    "y": 57,
    "sc": "210"
},
{
    "x": 1496764800000,
    "y": 57,
    "sc": "210"
},
{
    "x": 1496851200000,
    "y": 41,
    "sc": "211"
},
{
    "x": 1496937600000,
    "y": 28,
    "sc": "212"
},
{
    "x": 1497196800000,
    "y": 29,
    "sc": "212"
},
{
    "x": 1497283200000,
    "y": 33,
    "sc": "212"
},
{
    "x": 1497369600000,
    "y": 27,
    "sc": "212"
},
{
    "x": 1497456000000,
    "y": 34,
    "sc": "213"
},
{
    "x": 1497542400000,
    "y": 35,
    "sc": "216"
},
{
    "x": 1497801600000,
    "y": 28,
    "sc": "215"
},
{
    "x": 1497888000000,
    "y": 23,
    "sc": "216"
},
{
    "x": 1497974400000,
    "y": 23,
    "sc": "216"
},
{
    "x": 1498060800000,
    "y": 27,
    "sc": "216"
},
{
    "x": 1498147200000,
    "y": 44,
    "sc": "218"
},
{
    "x": 1498406400000,
    "y": 30,
    "sc": "219"
},
{
    "x": 1498492800000,
    "y": 30,
    "sc": "219"
},
{
    "x": 1498579200000,
    "y": 26,
    "sc": "219"
},
{
    "x": 1498665600000,
    "y": 28,
    "sc": "219"
},
{
    "x": 1498752000000,
    "y": 22,
    "sc": "220"
},
{
    "x": 1499011200000,
    "y": 16,
    "sc": "219"
},
{
    "x": 1499097600000,
    "y": 17,
    "sc": "219"
},
{
    "x": 1499184000000,
    "y": 22,
    "sc": "219"
},
{
    "x": 1499270400000,
    "y": 19,
    "sc": "220"
},
{
    "x": 1499356800000,
    "y": 21,
    "sc": "221"
},
{
    "x": 1499616000000,
    "y": 19,
    "sc": "220"
},
{
    "x": 1499702400000,
    "y": 37,
    "sc": "220"
},
{
    "x": 1499788800000,
    "y": 36,
    "sc": "222"
},
{
    "x": 1499875200000,
    "y": 34,
    "sc": "222"
},
{
    "x": 1499961600000,
    "y": 34,
    "sc": "223"
},
{
    "x": 1500220800000,
    "y": 38,
    "sc": "222"
},
{
    "x": 1500307200000,
    "y": 24,
    "sc": "222"
},
{
    "x": 1500393600000,
    "y": 18,
    "sc": "222"
},
{
    "x": 1500480000000,
    "y": 15,
    "sc": "222"
},
{
    "x": 1500566400000,
    "y": 15,
    "sc": "223"
},
{
    "x": 1500825600000,
    "y": 14,
    "sc": "223"
},
{
    "x": 1500912000000,
    "y": 13,
    "sc": "223"
},
{
    "x": 1500998400000,
    "y": 7,
    "sc": "223"
},
{
    "x": 1501084800000,
    "y": 7,
    "sc": "223"
},
{
    "x": 1501171200000,
    "y": 9,
    "sc": "224"
},
{
    "x": 1501430400000,
    "y": 6,
    "sc": "223"
},
{
    "x": 1501516800000,
    "y": 7,
    "sc": "223"
},
{
    "x": 1501603200000,
    "y": 7,
    "sc": "223"
},
{
    "x": 1501689600000,
    "y": 6,
    "sc": "223"
},
{
    "x": 1501776000000,
    "y": 5,
    "sc": "224"
},
{
    "x": 1502035200000,
    "y": 5,
    "sc": "223"
},
{
    "x": 1502121600000,
    "y": 5,
    "sc": "224"
},
{
    "x": 1502208000000,
    "y": 5,
    "sc": "224"
},
{
    "x": 1502294400000,
    "y": 5,
    "sc": "224"
},
{
    "x": 1502380800000,
    "y": 6,
    "sc": "225"
},
{
    "x": 1502640000000,
    "y": 7,
    "sc": "224"
},
{
    "x": 1502726400000,
    "y": 8,
    "sc": "224"
},
{
    "x": 1502812800000,
    "y": 7,
    "sc": "224"
},
{
    "x": 1502899200000,
    "y": 6,
    "sc": "228"
},
{
    "x": 1502985600000,
    "y": 6,
    "sc": "229"
},
{
    "x": 1503244800000,
    "y": 5,
    "sc": "229"
},
{
    "x": 1503331200000,
    "y": 7,
    "sc": "229"
},
{
    "x": 1503417600000,
    "y": 10,
    "sc": "227"
},
{
    "x": 1503504000000,
    "y": 9,
    "sc": "229"
},
{
    "x": 1503590400000,
    "y": 11,
    "sc": "230"
},
{
    "x": 1503849600000,
    "y": 13,
    "sc": "229"
},
{
    "x": 1503936000000,
    "y": 14,
    "sc": "229"
},
{
    "x": 1504022400000,
    "y": 11,
    "sc": "229"
},
{
    "x": 1504108800000,
    "y": 13,
    "sc": "229"
},
{
    "x": 1504195200000,
    "y": 20,
    "sc": "230"
},
{
    "x": 1504454400000,
    "y": 20,
    "sc": "229"
},
{
    "x": 1504540800000,
    "y": 22,
    "sc": "229"
},
{
    "x": 1504627200000,
    "y": 24,
    "sc": "229"
},
{
    "x": 1504713600000,
    "y": 28,
    "sc": "230"
},
{
    "x": 1504800000000,
    "y": 40,
    "sc": "232"
},
{
    "x": 1505059200000,
    "y": 52,
    "sc": "231"
},
{
    "x": 1505145600000,
    "y": 50,
    "sc": "231"
},
{
    "x": 1505232000000,
    "y": 46,
    "sc": "231"
},
{
    "x": 1505318400000,
    "y": 38,
    "sc": "231"
},
{
    "x": 1505404800000,
    "y": 26,
    "sc": "233"
},
{
    "x": 1505664000000,
    "y": 27,
    "sc": "233"
},
{
    "x": 1505750400000,
    "y": 23,
    "sc": "233"
},
{
    "x": 1505836800000,
    "y": 24,
    "sc": "233"
},
{
    "x": 1505923200000,
    "y": 32,
    "sc": "235"
},
{
    "x": 1506009600000,
    "y": 24,
    "sc": "236"
},
{
    "x": 1506268800000,
    "y": 25,
    "sc": "235"
},
{
    "x": 1506355200000,
    "y": 27,
    "sc": "235"
},
{
    "x": 1506441600000,
    "y": 24,
    "sc": "235"
},
{
    "x": 1506528000000,
    "y": 28,
    "sc": "231"
},
{
    "x": 1506614400000,
    "y": 28,
    "sc": "233"
},
{
    "x": 1507478400000,
    "y": 73,
    "sc": "239"
},
{
    "x": 1507564800000,
    "y": 90,
    "sc": "239"
},
{
    "x": 1507651200000,
    "y": 91,
    "sc": "239"
},
{
    "x": 1507737600000,
    "y": 101,
    "sc": "240"
},
{
    "x": 1507824000000,
    "y": 116,
    "sc": "241"
},
{
    "x": 1508083200000,
    "y": 125,
    "sc": "240"
},
{
    "x": 1508169600000,
    "y": 110,
    "sc": "240"
},
{
    "x": 1508256000000,
    "y": 128,
    "sc": "241"
},
{
    "x": 1508342400000,
    "y": 187,
    "sc": "241"
},
{
    "x": 1508428800000,
    "y": 192,
    "sc": "243"
},
{
    "x": 1508688000000,
    "y": 193,
    "sc": "242"
},
{
    "x": 1508774400000,
    "y": 183,
    "sc": "242"
},
{
    "x": 1508860800000,
    "y": 178,
    "sc": "242"
},
{
    "x": 1508947200000,
    "y": 163,
    "sc": "242"
},
{
    "x": 1509033600000,
    "y": 138,
    "sc": "243"
},
{
    "x": 1509292800000,
    "y": 131,
    "sc": "242"
},
{
    "x": 1509379200000,
    "y": 155,
    "sc": "242"
},
{
    "x": 1509465600000,
    "y": 163,
    "sc": "245"
},
{
    "x": 1509552000000,
    "y": 165,
    "sc": "245"
},
{
    "x": 1509638400000,
    "y": 164,
    "sc": "247"
},
{
    "x": 1509897600000,
    "y": 155,
    "sc": "246"
},
{
    "x": 1509984000000,
    "y": 167,
    "sc": "246"
},
{
    "x": 1510070400000,
    "y": 160,
    "sc": "246"
},
{
    "x": 1510156800000,
    "y": 152,
    "sc": "246"
},
{
    "x": 1510243200000,
    "y": 122,
    "sc": "248"
},
{
    "x": 1510502400000,
    "y": 92,
    "sc": "248"
},
{
    "x": 1510588800000,
    "y": 74,
    "sc": "248"
},
{
    "x": 1510675200000,
    "y": 80,
    "sc": "248"
},
{
    "x": 1510761600000,
    "y": 63,
    "sc": "248"
},
{
    "x": 1510848000000,
    "y": 62,
    "sc": "249"
},
{
    "x": 1511107200000,
    "y": 66,
    "sc": "248"
},
{
    "x": 1511193600000,
    "y": 85,
    "sc": "248"
},
{
    "x": 1511280000000,
    "y": 82,
    "sc": "248"
},
{
    "x": 1511366400000,
    "y": 78,
    "sc": "249"
},
{
    "x": 1511452800000,
    "y": 80,
    "sc": "250"
},
{
    "x": 1511712000000,
    "y": 80,
    "sc": "249"
},
{
    "x": 1511798400000,
    "y": 86,
    "sc": "249"
},
{
    "x": 1511884800000,
    "y": 56,
    "sc": "249"
},
{
    "x": 1511971200000,
    "y": 80,
    "sc": "249"
},
{
    "x": 1512057600000,
    "y": 100,
    "sc": "251"
},
{
    "x": 1512316800000,
    "y": 103,
    "sc": "250"
},
{
    "x": 1512403200000,
    "y": 96,
    "sc": "250"
},
{
    "x": 1512489600000,
    "y": 86,
    "sc": "253"
},
{
    "x": 1512576000000,
    "y": 80,
    "sc": "253"
},
{
    "x": 1512662400000,
    "y": 92,
    "sc": "254"
},
{
    "x": 1512921600000,
    "y": 102,
    "sc": "253"
},
{
    "x": 1513008000000,
    "y": 117,
    "sc": "253"
},
{
    "x": 1513094400000,
    "y": 114,
    "sc": "254"
},
{
    "x": 1513180800000,
    "y": 129,
    "sc": "254"
},
{
    "x": 1513267200000,
    "y": 132,
    "sc": "261"
},
{
    "x": 1513526400000,
    "y": 135,
    "sc": "260"
},
{
    "x": 1513612800000,
    "y": 148,
    "sc": "260"
},
{
    "x": 1513699200000,
    "y": 157,
    "sc": "261"
},
{
    "x": 1513785600000,
    "y": 139,
    "sc": "261"
},
{
    "x": 1513872000000,
    "y": 133,
    "sc": "262"
},
{
    "x": 1514131200000,
    "y": 114,
    "sc": "257"
},
{
    "x": 1514217600000,
    "y": 114,
    "sc": "257"
},
{
    "x": 1514304000000,
    "y": 133,
    "sc": "261"
},
{
    "x": 1514390400000,
    "y": 131,
    "sc": "262"
},
{
    "x": 1514476800000,
    "y": 119,
    "sc": "264"
},
{
    "x": 1514822400000,
    "y": 113,
    "sc": "263"
},
{
    "x": 1514908800000,
    "y": 112,
    "sc": "263"
},
{
    "x": 1514995200000,
    "y": 110,
    "sc": "263"
},
{
    "x": 1515081600000,
    "y": 105,
    "sc": "264"
},
{
    "x": 1515340800000,
    "y": 96,
    "sc": "263"
},
{
    "x": 1515427200000,
    "y": 105,
    "sc": "263"
},
{
    "x": 1515513600000,
    "y": 103,
    "sc": "263"
},
{
    "x": 1515600000000,
    "y": 95,
    "sc": "263"
},
{
    "x": 1515686400000,
    "y": 97,
    "sc": "264"
},
{
    "x": 1515945600000,
    "y": 104,
    "sc": "263"
},
{
    "x": 1516032000000,
    "y": 98,
    "sc": "263"
},
{
    "x": 1516118400000,
    "y": 95,
    "sc": "263"
},
{
    "x": 1516204800000,
    "y": 99,
    "sc": "263"
},
{
    "x": 1516291200000,
    "y": 91,
    "sc": "264"
},
{
    "x": 1516550400000,
    "y": 95,
    "sc": "263"
},
{
    "x": 1516636800000,
    "y": 97,
    "sc": "263"
},
{
    "x": 1516723200000,
    "y": 92,
    "sc": "263"
},
{
    "x": 1516809600000,
    "y": 83,
    "sc": "264"
},
{
    "x": 1516896000000,
    "y": 105,
    "sc": "264"
},
{
    "x": 1517155200000,
    "y": 98,
    "sc": "264"
},
{
    "x": 1517241600000,
    "y": 116,
    "sc": "264"
},
{
    "x": 1517328000000,
    "y": 123,
    "sc": "264"
},
{
    "x": 1517414400000,
    "y": 109,
    "sc": "264"
},
{
    "x": 1517500800000,
    "y": 103,
    "sc": "264"
},
{
    "x": 1517760000000,
    "y": 104,
    "sc": "264"
},
{
    "x": 1517846400000,
    "y": 116,
    "sc": "265"
},
{
    "x": 1517932800000,
    "y": 115,
    "sc": "265"
},
{
    "x": 1518019200000,
    "y": 127,
    "sc": "265"
},
{
    "x": 1518105600000,
    "y": 159,
    "sc": "272"
},
{
    "x": 1518364800000,
    "y": 180,
    "sc": "272"
},
{
    "x": 1518451200000,
    "y": 183,
    "sc": "267"
},
{
    "x": 1518537600000,
    "y": 191,
    "sc": "269"
},
{
    "x": 1519228800000,
    "y": 206,
    "sc": "272"
},
{
    "x": 1519315200000,
    "y": 205,
    "sc": "272"
},
{
    "x": 1519574400000,
    "y": 183,
    "sc": "272"
},
{
    "x": 1519660800000,
    "y": 174,
    "sc": "272"
},
{
    "x": 1519747200000,
    "y": 177,
    "sc": "273"
},
{
    "x": 1519833600000,
    "y": 142,
    "sc": "274"
},
{
    "x": 1519920000000,
    "y": 148,
    "sc": "274"
},
{
    "x": 1520179200000,
    "y": 97,
    "sc": "278"
},
{
    "x": 1520265600000,
    "y": 122,
    "sc": "278"
},
{
    "x": 1520352000000,
    "y": 125,
    "sc": "278"
},
{
    "x": 1520438400000,
    "y": 130,
    "sc": "278"
},
{
    "x": 1520524800000,
    "y": 93,
    "sc": "278"
},
{
    "x": 1520784000000,
    "y": 57,
    "sc": "279"
},
{
    "x": 1520870400000,
    "y": 58,
    "sc": "279"
},
{
    "x": 1520956800000,
    "y": 74,
    "sc": "281"
},
{
    "x": 1521043200000,
    "y": 53,
    "sc": "281"
},
{
    "x": 1521129600000,
    "y": 69,
    "sc": "281"
},
{
    "x": 1521388800000,
    "y": 27,
    "sc": "281"
},
{
    "x": 1521475200000,
    "y": 27,
    "sc": "281"
},
{
    "x": 1521561600000,
    "y": 40,
    "sc": "281"
},
{
    "x": 1521648000000,
    "y": 40,
    "sc": "282"
},
{
    "x": 1521734400000,
    "y": 73,
    "sc": "282"
},
{
    "x": 1521993600000,
    "y": 42,
    "sc": "282"
},
{
    "x": 1522080000000,
    "y": 30,
    "sc": "283"
},
{
    "x": 1522166400000,
    "y": 29,
    "sc": "285"
},
{
    "x": 1522252800000,
    "y": 28,
    "sc": "285"
},
{
    "x": 1522339200000,
    "y": 22,
    "sc": "282"
},
{
    "x": 1522598400000,
    "y": 20,
    "sc": "282"
},
{
    "x": 1522684800000,
    "y": 22,
    "sc": "282"
},
{
    "x": 1522771200000,
    "y": 31,
    "sc": "283"
},
{
    "x": 1523203200000,
    "y": 34,
    "sc": "285"
},
{
    "x": 1523289600000,
    "y": 44,
    "sc": "285"
},
{
    "x": 1523376000000,
    "y": 39,
    "sc": "285"
},
{
    "x": 1523462400000,
    "y": 40,
    "sc": "285"
},
{
    "x": 1523548800000,
    "y": 31,
    "sc": "285"
},
{
    "x": 1523808000000,
    "y": 31,
    "sc": "285"
},
{
    "x": 1523894400000,
    "y": 43,
    "sc": "285"
},
{
    "x": 1523980800000,
    "y": 31,
    "sc": "285"
},
{
    "x": 1524067200000,
    "y": 25,
    "sc": "287"
},
{
    "x": 1524153600000,
    "y": 30,
    "sc": "287"
},
{
    "x": 1524412800000,
    "y": 45,
    "sc": "287"
},
{
    "x": 1524499200000,
    "y": 38,
    "sc": "288"
},
{
    "x": 1524585600000,
    "y": 39,
    "sc": "288"
},
{
    "x": 1524672000000,
    "y": 41,
    "sc": "286"
},
{
    "x": 1524758400000,
    "y": 41,
    "sc": "286"
},
{
    "x": 1525190400000,
    "y": 46,
    "sc": "290"
},
{
    "x": 1525276800000,
    "y": 46,
    "sc": "289"
},
{
    "x": 1525363200000,
    "y": 44,
    "sc": "289"
},
{
    "x": 1525622400000,
    "y": 43,
    "sc": "290"
},
{
    "x": 1525708800000,
    "y": 31,
    "sc": "293"
},
{
    "x": 1525795200000,
    "y": 25,
    "sc": "293"
},
{
    "x": 1525881600000,
    "y": 28,
    "sc": "293"
},
{
    "x": 1525968000000,
    "y": 33,
    "sc": "295"
},
{
    "x": 1526227200000,
    "y": 29,
    "sc": "296"
},
{
    "x": 1526313600000,
    "y": 29,
    "sc": "296"
},
{
    "x": 1526400000000,
    "y": 29,
    "sc": "296"
},
{
    "x": 1526486400000,
    "y": 28,
    "sc": "296"
},
{
    "x": 1526572800000,
    "y": 28,
    "sc": "296"
},
{
    "x": 1526832000000,
    "y": 26,
    "sc": "296"
},
{
    "x": 1526918400000,
    "y": 29,
    "sc": "294"
},
{
    "x": 1527004800000,
    "y": 28,
    "sc": "296"
},
{
    "x": 1527091200000,
    "y": 28,
    "sc": "296"
},
{
    "x": 1527177600000,
    "y": 27,
    "sc": "296"
},
{
    "x": 1527436800000,
    "y": 42,
    "sc": "296"
},
{
    "x": 1527523200000,
    "y": 42,
    "sc": "296"
},
{
    "x": 1527609600000,
    "y": 50,
    "sc": "296"
},
{
    "x": 1527696000000,
    "y": 54,
    "sc": "296"
},
{
    "x": 1527782400000,
    "y": 77,
    "sc": "296"
},
{
    "x": 1528041600000,
    "y": 85,
    "sc": "297"
},
{
    "x": 1528128000000,
    "y": 82,
    "sc": "297"
},
{
    "x": 1528214400000,
    "y": 75,
    "sc": "297"
},
{
    "x": 1528300800000,
    "y": 76,
    "sc": "298"
},
{
    "x": 1528387200000,
    "y": 71,
    "sc": "298"
},
{
    "x": 1528646400000,
    "y": 83,
    "sc": "298"
},
{
    "x": 1528732800000,
    "y": 108,
    "sc": "298"
},
{
    "x": 1528819200000,
    "y": 112,
    "sc": "298"
},
{
    "x": 1528905600000,
    "y": 94,
    "sc": "300"
},
{
    "x": 1528992000000,
    "y": 104,
    "sc": "300"
},
{
    "x": 1529337600000,
    "y": 136,
    "sc": "300"
},
{
    "x": 1529424000000,
    "y": 149,
    "sc": "300"
},
{
    "x": 1529510400000,
    "y": 163,
    "sc": "302"
},
{
    "x": 1529596800000,
    "y": 142,
    "sc": "302"
},
{
    "x": 1529856000000,
    "y": 142,
    "sc": "303"
},
{
    "x": 1529942400000,
    "y": 160,
    "sc": "303"
},
{
    "x": 1530028800000,
    "y": 179,
    "sc": "303"
},
{
    "x": 1530115200000,
    "y": 177,
    "sc": "303"
},
{
    "x": 1530201600000,
    "y": 139,
    "sc": "303"
},
{
    "x": 1530460800000,
    "y": 183,
    "sc": "303"
},
{
    "x": 1530547200000,
    "y": 174,
    "sc": "307"
},
{
    "x": 1530633600000,
    "y": 178,
    "sc": "309"
},
{
    "x": 1530720000000,
    "y": 175,
    "sc": "309"
},
{
    "x": 1530806400000,
    "y": 166,
    "sc": "309"
},
{
    "x": 1531065600000,
    "y": 161,
    "sc": "309"
},
{
    "x": 1531152000000,
    "y": 138,
    "sc": "309"
},
{
    "x": 1531238400000,
    "y": 152,
    "sc": "309"
},
{
    "x": 1531324800000,
    "y": 129,
    "sc": "309"
},
{
    "x": 1531411200000,
    "y": 162,
    "sc": "309"
},
{
    "x": 1531670400000,
    "y": 174,
    "sc": "309"
},
{
    "x": 1531756800000,
    "y": 139,
    "sc": "309"
},
{
    "x": 1531843200000,
    "y": 194,
    "sc": "310"
},
{
    "x": 1531929600000,
    "y": 186,
    "sc": "310"
},
{
    "x": 1532016000000,
    "y": 162,
    "sc": "310"
},
{
    "x": 1532275200000,
    "y": 121,
    "sc": "312"
},
{
    "x": 1532361600000,
    "y": 132,
    "sc": "312"
},
{
    "x": 1532448000000,
    "y": 130,
    "sc": "314"
},
{
    "x": 1532534400000,
    "y": 144,
    "sc": "314"
},
{
    "x": 1532620800000,
    "y": 152,
    "sc": "314"
},
{
    "x": 1532880000000,
    "y": 165,
    "sc": "314"
},
{
    "x": 1532966400000,
    "y": 167,
    "sc": "314"
},
{
    "x": 1533052800000,
    "y": 146,
    "sc": "314"
},
{
    "x": 1533139200000,
    "y": 127,
    "sc": "314"
},
{
    "x": 1533225600000,
    "y": 148,
    "sc": "314"
},
{
    "x": 1533484800000,
    "y": 143,
    "sc": "314"
},
{
    "x": 1533571200000,
    "y": 133,
    "sc": "314"
},
{
    "x": 1533657600000,
    "y": 136,
    "sc": "316"
},
{
    "x": 1533744000000,
    "y": 125,
    "sc": "316"
},
{
    "x": 1533830400000,
    "y": 108,
    "sc": "316"
},
{
    "x": 1534089600000,
    "y": 73,
    "sc": "318"
},
{
    "x": 1534176000000,
    "y": 69,
    "sc": "318"
},
{
    "x": 1534262400000,
    "y": 79,
    "sc": "318"
},
{
    "x": 1534348800000,
    "y": 84,
    "sc": "318"
},
{
    "x": 1534435200000,
    "y": 68,
    "sc": "320"
},
{
    "x": 1534694400000,
    "y": 66,
    "sc": "320"
},
{
    "x": 1534780800000,
    "y": 95,
    "sc": "320"
},
{
    "x": 1534867200000,
    "y": 101,
    "sc": "320"
},
{
    "x": 1534953600000,
    "y": 108,
    "sc": "320"
},
{
    "x": 1535040000000,
    "y": 99,
    "sc": "320"
},
{
    "x": 1535299200000,
    "y": 94,
    "sc": "320"
},
{
    "x": 1535385600000,
    "y": 75,
    "sc": "320"
},
{
    "x": 1535472000000,
    "y": 57,
    "sc": "320"
},
{
    "x": 1535558400000,
    "y": 59,
    "sc": "321"
},
{
    "x": 1535644800000,
    "y": 49,
    "sc": "322"
},
{
    "x": 1535904000000,
    "y": 35,
    "sc": "322"
},
{
    "x": 1535990400000,
    "y": 28,
    "sc": "322"
},
{
    "x": 1536076800000,
    "y": 36,
    "sc": "322"
},
{
    "x": 1536163200000,
    "y": 38,
    "sc": "322"
},
{
    "x": 1536249600000,
    "y": 37,
    "sc": "322"
},
{
    "x": 1536508800000,
    "y": 36,
    "sc": "322"
},
{
    "x": 1536595200000,
    "y": 38,
    "sc": "322"
},
{
    "x": 1536681600000,
    "y": 37,
    "sc": "322"
},
{
    "x": 1536768000000,
    "y": 38,
    "sc": "323"
},
{
    "x": 1536854400000,
    "y": 43,
    "sc": "323"
},
{
    "x": 1537113600000,
    "y": 43,
    "sc": "323"
},
{
    "x": 1537200000000,
    "y": 42,
    "sc": "323"
},
{
    "x": 1537286400000,
    "y": 31,
    "sc": "323"
},
{
    "x": 1537372800000,
    "y": 31,
    "sc": "319"
},
{
    "x": 1537459200000,
    "y": 22,
    "sc": "319"
},
{
    "x": 1537804800000,
    "y": 23,
    "sc": "318"
},
{
    "x": 1537891200000,
    "y": 20,
    "sc": "325"
},
{
    "x": 1537977600000,
    "y": 22,
    "sc": "319"
},
{
    "x": 1538064000000,
    "y": 21,
    "sc": "323"
},
{
    "x": 1538928000000,
    "y": 52,
    "sc": "325"
},
{
    "x": 1539014400000,
    "y": 64,
    "sc": "325"
},
{
    "x": 1539100800000,
    "y": 64,
    "sc": "325"
},
{
    "x": 1539187200000,
    "y": 89,
    "sc": "325"
},
{
    "x": 1539273600000,
    "y": 99,
    "sc": "325"
},
{
    "x": 1539532800000,
    "y": 86,
    "sc": "325"
},
{
    "x": 1539619200000,
    "y": 107,
    "sc": "325"
},
{
    "x": 1539705600000,
    "y": 90,
    "sc": "318"
},
{
    "x": 1539792000000,
    "y": 79,
    "sc": "325"
},
{
    "x": 1539878400000,
    "y": 54,
    "sc": "325"
},
{
    "x": 1540137600000,
    "y": 52,
    "sc": "325"
},
{
    "x": 1540224000000,
    "y": 50,
    "sc": "325"
},
{
    "x": 1540310400000,
    "y": 46,
    "sc": "325"
},
{
    "x": 1540396800000,
    "y": 50,
    "sc": "325"
},
{
    "x": 1540483200000,
    "y": 45,
    "sc": "325"
},
{
    "x": 1540742400000,
    "y": 32,
    "sc": "325"
},
{
    "x": 1540828800000,
    "y": 27,
    "sc": "327"
},
{
    "x": 1540915200000,
    "y": 28,
    "sc": "327"
},
{
    "x": 1541001600000,
    "y": 27,
    "sc": "327"
},
{
    "x": 1541088000000,
    "y": 24,
    "sc": "327"
},
{
    "x": 1541347200000,
    "y": 15,
    "sc": "327"
},
{
    "x": 1541433600000,
    "y": 13,
    "sc": "327"
},
{
    "x": 1541520000000,
    "y": 21,
    "sc": "328"
},
{
    "x": 1541606400000,
    "y": 19,
    "sc": "328"
},
{
    "x": 1541692800000,
    "y": 33,
    "sc": "328"
},
{
    "x": 1541952000000,
    "y": 29,
    "sc": "328"
},
{
    "x": 1542038400000,
    "y": 43,
    "sc": "328"
},
{
    "x": 1542124800000,
    "y": 39,
    "sc": "328"
},
{
    "x": 1542211200000,
    "y": 36,
    "sc": "330"
},
{
    "x": 1542297600000,
    "y": 23,
    "sc": "330"
},
{
    "x": 1542556800000,
    "y": 22,
    "sc": "330"
},
{
    "x": 1542643200000,
    "y": 31,
    "sc": "330"
},
{
    "x": 1542729600000,
    "y": 41,
    "sc": "330"
},
{
    "x": 1542816000000,
    "y": 44,
    "sc": "330"
},
{
    "x": 1542902400000,
    "y": 59,
    "sc": "330"
},
{
    "x": 1543161600000,
    "y": 53,
    "sc": "330"
},
{
    "x": 1543248000000,
    "y": 62,
    "sc": "330"
},
{
    "x": 1543334400000,
    "y": 68,
    "sc": "330"
},
{
    "x": 1543420800000,
    "y": 81,
    "sc": "330"
},
{
    "x": 1543507200000,
    "y": 68,
    "sc": "330"
},
{
    "x": 1543766400000,
    "y": 70,
    "sc": "330"
},
{
    "x": 1543852800000,
    "y": 123,
    "sc": "330"
},
{
    "x": 1543939200000,
    "y": 90,
    "sc": "330"
},
{
    "x": 1544025600000,
    "y": 121,
    "sc": "332"
},
{
    "x": 1544112000000,
    "y": 68,
    "sc": "332"
},
{
    "x": 1544371200000,
    "y": 49,
    "sc": "332"
},
{
    "x": 1544457600000,
    "y": 51,
    "sc": "332"
},
{
    "x": 1544544000000,
    "y": 55,
    "sc": "332"
},
{
    "x": 1544630400000,
    "y": 65,
    "sc": "332"
},
{
    "x": 1544716800000,
    "y": 36,
    "sc": "333"
},
{
    "x": 1544976000000,
    "y": 53,
    "sc": "333"
},
{
    "x": 1545062400000,
    "y": 60,
    "sc": "332"
},
{
    "x": 1545148800000,
    "y": 95,
    "sc": "332"
},
{
    "x": 1545235200000,
    "y": 66,
    "sc": "333"
},
{
    "x": 1545321600000,
    "y": 66,
    "sc": "333"
},
{
    "x": 1545580800000,
    "y": 63,
    "sc": "332"
},
{
    "x": 1545667200000,
    "y": 62,
    "sc": "328"
},
{
    "x": 1545753600000,
    "y": 64,
    "sc": "330"
},
{
    "x": 1545840000000,
    "y": 69,
    "sc": "332"
},
{
    "x": 1545926400000,
    "y": 67,
    "sc": "332"
},
{
    "x": 1546358400000,
    "y": 70,
    "sc": "335"
},
{
    "x": 1546444800000,
    "y": 78,
    "sc": "335"
},
{
    "x": 1546531200000,
    "y": 74,
    "sc": "335"
},
{
    "x": 1546790400000,
    "y": 52,
    "sc": "334"
},
{
    "x": 1546876800000,
    "y": 43,
    "sc": "334"
},
{
    "x": 1546963200000,
    "y": 52,
    "sc": "334"
},
{
    "x": 1547049600000,
    "y": 46,
    "sc": "334"
},
{
    "x": 1547136000000,
    "y": 35,
    "sc": "334"
},
{
    "x": 1547395200000,
    "y": 50,
    "sc": "334"
},
{
    "x": 1547481600000,
    "y": 47,
    "sc": "334"
},
{
    "x": 1547568000000,
    "y": 66,
    "sc": "334"
},
{
    "x": 1547654400000,
    "y": 83,
    "sc": "334"
},
{
    "x": 1547740800000,
    "y": 86,
    "sc": "334"
},
{
    "x": 1548000000000,
    "y": 111,
    "sc": "334"
},
{
    "x": 1548086400000,
    "y": 132,
    "sc": "336"
},
{
    "x": 1548172800000,
    "y": 116,
    "sc": "336"
},
{
    "x": 1548259200000,
    "y": 106,
    "sc": "336"
},
{
    "x": 1548345600000,
    "y": 105,
    "sc": "336"
},
{
    "x": 1548604800000,
    "y": 69,
    "sc": "336"
},
{
    "x": 1548691200000,
    "y": 104,
    "sc": "336"
},
{
    "x": 1548777600000,
    "y": 137,
    "sc": "336"
},
{
    "x": 1548864000000,
    "y": 125,
    "sc": "332"
},
{
    "x": 1548950400000,
    "y": 85,
    "sc": "332"
},
{
    "x": 1549814400000,
    "y": 74,
    "sc": "337"
},
{
    "x": 1549900800000,
    "y": 114,
    "sc": "337"
},
{
    "x": 1549987200000,
    "y": 86,
    "sc": "337"
},
{
    "x": 1550073600000,
    "y": 76,
    "sc": "340"
},
{
    "x": 1550160000000,
    "y": 75,
    "sc": "340"
},
{
    "x": 1550419200000,
    "y": 73,
    "sc": "340"
},
{
    "x": 1550505600000,
    "y": 71,
    "sc": "340"
},
{
    "x": 1550592000000,
    "y": 62,
    "sc": "340"
},
{
    "x": 1550678400000,
    "y": 47,
    "sc": "340"
},
{
    "x": 1550764800000,
    "y": 39,
    "sc": "341"
},
{
    "x": 1551024000000,
    "y": 42,
    "sc": "342"
},
{
    "x": 1551110400000,
    "y": 46,
    "sc": "342"
},
{
    "x": 1551196800000,
    "y": 57,
    "sc": "342"
},
{
    "x": 1551283200000,
    "y": 63,
    "sc": "345"
},
{
    "x": 1551369600000,
    "y": 66,
    "sc": "345"
},
{
    "x": 1551628800000,
    "y": 68,
    "sc": "345"
},
{
    "x": 1551715200000,
    "y": 90,
    "sc": "345"
},
{
    "x": 1551801600000,
    "y": 83,
    "sc": "345"
},
{
    "x": 1551888000000,
    "y": 80,
    "sc": "345"
},
{
    "x": 1551974400000,
    "y": 75,
    "sc": "345"
},
{
    "x": 1552233600000,
    "y": 72,
    "sc": "345"
},
{
    "x": 1552320000000,
    "y": 55,
    "sc": "345"
},
{
    "x": 1552406400000,
    "y": 51,
    "sc": "345"
},
{
    "x": 1552492800000,
    "y": 51,
    "sc": "345"
},
{
    "x": 1552579200000,
    "y": 58,
    "sc": "345"
},
{
    "x": 1552838400000,
    "y": 66,
    "sc": "345"
},
{
    "x": 1552924800000,
    "y": 56,
    "sc": "344"
},
{
    "x": 1553011200000,
    "y": 72,
    "sc": "344"
},
{
    "x": 1553097600000,
    "y": 75,
    "sc": "344"
},
{
    "x": 1553184000000,
    "y": 77,
    "sc": "344"
},
{
    "x": 1553443200000,
    "y": 82,
    "sc": "344"
},
{
    "x": 1553529600000,
    "y": 76,
    "sc": "346"
},
{
    "x": 1553616000000,
    "y": 76,
    "sc": "346"
},
{
    "x": 1553702400000,
    "y": 72,
    "sc": "346"
},
{
    "x": 1553788800000,
    "y": 84,
    "sc": "346"
},
{
    "x": 1554048000000,
    "y": 79,
    "sc": "346"
},
{
    "x": 1554134400000,
    "y": 70,
    "sc": "346"
},
{
    "x": 1554220800000,
    "y": 64,
    "sc": "346"
},
{
    "x": 1554307200000,
    "y": 73,
    "sc": "346"
},
{
    "x": 1554652800000,
    "y": 126,
    "sc": "346"
},
{
    "x": 1554739200000,
    "y": 98,
    "sc": "346"
},
{
    "x": 1554825600000,
    "y": 117,
    "sc": "346"
},
{
    "x": 1554912000000,
    "y": 103,
    "sc": "346"
},
{
    "x": 1554998400000,
    "y": 107,
    "sc": "346"
},
{
    "x": 1555257600000,
    "y": 104,
    "sc": "346"
},
{
    "x": 1555344000000,
    "y": 85,
    "sc": "346"
},
{
    "x": 1555430400000,
    "y": 55,
    "sc": "348"
},
{
    "x": 1555516800000,
    "y": 60,
    "sc": "348"
},
{
    "x": 1555603200000,
    "y": 57,
    "sc": "342"
},
{
    "x": 1555862400000,
    "y": 72,
    "sc": "342"
},
{
    "x": 1555948800000,
    "y": 78,
    "sc": "348"
},
{
    "x": 1556035200000,
    "y": 92,
    "sc": "348"
},
{
    "x": 1556121600000,
    "y": 113,
    "sc": "348"
},
{
    "x": 1556208000000,
    "y": 117,
    "sc": "348"
},
{
    "x": 1556467200000,
    "y": 138,
    "sc": "345"
},
{
    "x": 1556553600000,
    "y": 121,
    "sc": "347"
},
{
    "x": 1557072000000,
    "y": 142,
    "sc": "351"
},
{
    "x": 1557158400000,
    "y": 134,
    "sc": "351"
},
{
    "x": 1557244800000,
    "y": 142,
    "sc": "351"
},
{
    "x": 1557331200000,
    "y": 141,
    "sc": "351"
},
{
    "x": 1557417600000,
    "y": 137,
    "sc": "351"
},
{
    "x": 1557676800000,
    "y": 172,
    "sc": "345"
},
{
    "x": 1557763200000,
    "y": 191,
    "sc": "351"
},
{
    "x": 1557849600000,
    "y": 177,
    "sc": "351"
},
{
    "x": 1557936000000,
    "y": 189,
    "sc": "351"
},
{
    "x": 1558022400000,
    "y": 195,
    "sc": "351"
},
{
    "x": 1558281600000,
    "y": 250,
    "sc": "352"
},
{
    "x": 1558368000000,
    "y": 252,
    "sc": "352"
},
{
    "x": 1558454400000,
    "y": 263,
    "sc": "352"
},
{
    "x": 1558540800000,
    "y": 272,
    "sc": "352"
},
{
    "x": 1558627200000,
    "y": 261,
    "sc": "352"
},
{
    "x": 1558886400000,
    "y": 247,
    "sc": "352"
},
{
    "x": 1558972800000,
    "y": 243,
    "sc": "355"
},
{
    "x": 1559059200000,
    "y": 256,
    "sc": "355"
},
{
    "x": 1559145600000,
    "y": 267,
    "sc": "355"
},
{
    "x": 1559232000000,
    "y": 264,
    "sc": "355"
},
{
    "x": 1559491200000,
    "y": 259,
    "sc": "355"
},
{
    "x": 1559577600000,
    "y": 259,
    "sc": "355"
},
{
    "x": 1559664000000,
    "y": 269,
    "sc": "358"
},
{
    "x": 1559750400000,
    "y": 258,
    "sc": "358"
},
{
    "x": 1560096000000,
    "y": 259,
    "sc": "358"
},
{
    "x": 1560182400000,
    "y": 271,
    "sc": "358"
},
{
    "x": 1560268800000,
    "y": 300,
    "sc": "358"
},
{
    "x": 1560355200000,
    "y": 303,
    "sc": "360"
},
{
    "x": 1560441600000,
    "y": 299,
    "sc": "360"
},
{
    "x": 1560700800000,
    "y": 300,
    "sc": "360"
},
{
    "x": 1560787200000,
    "y": 293,
    "sc": "360"
},
{
    "x": 1560873600000,
    "y": 279,
    "sc": "360"
},
{
    "x": 1560960000000,
    "y": 259,
    "sc": "361"
},
{
    "x": 1561046400000,
    "y": 262,
    "sc": "361"
},
{
    "x": 1561305600000,
    "y": 265,
    "sc": "361"
},
{
    "x": 1561392000000,
    "y": 256,
    "sc": "361"
},
{
    "x": 1561478400000,
    "y": 244,
    "sc": "362"
},
{
    "x": 1561564800000,
    "y": 229,
    "sc": "362"
},
{
    "x": 1561651200000,
    "y": 239,
    "sc": "362"
},
{
    "x": 1561910400000,
    "y": 214,
    "sc": "356"
},
{
    "x": 1561996800000,
    "y": 214,
    "sc": "362"
},
{
    "x": 1562083200000,
    "y": 224,
    "sc": "365"
},
{
    "x": 1562169600000,
    "y": 225,
    "sc": "365"
},
{
    "x": 1562256000000,
    "y": 220,
    "sc": "365"
},
{
    "x": 1562515200000,
    "y": 181,
    "sc": "365"
},
{
    "x": 1562601600000,
    "y": 187,
    "sc": "365"
},
{
    "x": 1562688000000,
    "y": 163,
    "sc": "365"
},
{
    "x": 1562774400000,
    "y": 181,
    "sc": "365"
},
{
    "x": 1562860800000,
    "y": 184,
    "sc": "365"
},
{
    "x": 1563120000000,
    "y": 172,
    "sc": "365"
},
{
    "x": 1563206400000,
    "y": 173,
    "sc": "365"
},
{
    "x": 1563292800000,
    "y": 209,
    "sc": "365"
},
{
    "x": 1563379200000,
    "y": 214,
    "sc": "365"
},
{
    "x": 1563465600000,
    "y": 225,
    "sc": "365"
},
{
    "x": 1563724800000,
    "y": 232,
    "sc": "365"
},
{
    "x": 1563811200000,
    "y": 224,
    "sc": "365"
},
{
    "x": 1563897600000,
    "y": 201,
    "sc": "365"
},
{
    "x": 1563984000000,
    "y": 189,
    "sc": "367"
},
{
    "x": 1564070400000,
    "y": 165,
    "sc": "367"
},
{
    "x": 1564329600000,
    "y": 134,
    "sc": "367"
},
{
    "x": 1564416000000,
    "y": 130,
    "sc": "367"
},
{
    "x": 1564502400000,
    "y": 135,
    "sc": "367"
},
{
    "x": 1564588800000,
    "y": 123,
    "sc": "367"
},
{
    "x": 1564675200000,
    "y": 130,
    "sc": "367"
},
{
    "x": 1564934400000,
    "y": 130,
    "sc": "367"
},
{
    "x": 1565020800000,
    "y": 98,
    "sc": "369"
},
{
    "x": 1565107200000,
    "y": 99,
    "sc": "369"
},
{
    "x": 1565193600000,
    "y": 98,
    "sc": "369"
},
{
    "x": 1565280000000,
    "y": 99,
    "sc": "369"
},
{
    "x": 1565539200000,
    "y": 83,
    "sc": "369"
},
{
    "x": 1565625600000,
    "y": 64,
    "sc": "369"
},
{
    "x": 1565712000000,
    "y": 66,
    "sc": "371"
},
{
    "x": 1565798400000,
    "y": 69,
    "sc": "371"
},
{
    "x": 1565884800000,
    "y": 65,
    "sc": "371"
},
{
    "x": 1566144000000,
    "y": 59,
    "sc": "371"
},
{
    "x": 1566230400000,
    "y": 41,
    "sc": "371"
},
{
    "x": 1566316800000,
    "y": 44,
    "sc": "371"
},
{
    "x": 1566403200000,
    "y": 55,
    "sc": "371"
},
{
    "x": 1566489600000,
    "y": 49,
    "sc": "371"
},
{
    "x": 1566748800000,
    "y": 64,
    "sc": "371"
},
{
    "x": 1566835200000,
    "y": 62,
    "sc": "372"
},
{
    "x": 1566921600000,
    "y": 75,
    "sc": "372"
},
{
    "x": 1567008000000,
    "y": 67,
    "sc": "373"
},
{
    "x": 1567094400000,
    "y": 67,
    "sc": "374"
},
{
    "x": 1567353600000,
    "y": 59,
    "sc": "374"
},
{
    "x": 1567440000000,
    "y": 71,
    "sc": "374"
},
{
    "x": 1567526400000,
    "y": 69,
    "sc": "374"
},
{
    "x": 1567612800000,
    "y": 69,
    "sc": "376"
},
{
    "x": 1567699200000,
    "y": 57,
    "sc": "378"
},
{
    "x": 1567958400000,
    "y": 49,
    "sc": "378"
},
{
    "x": 1568044800000,
    "y": 54,
    "sc": "378"
},
{
    "x": 1568131200000,
    "y": 51,
    "sc": "370"
},
{
    "x": 1568217600000,
    "y": 45,
    "sc": "372"
},
{
    "x": 1568563200000,
    "y": 39,
    "sc": "378"
},
{
    "x": 1568649600000,
    "y": 37,
    "sc": "378"
},
{
    "x": 1568736000000,
    "y": 35,
    "sc": "378"
},
{
    "x": 1568822400000,
    "y": 44,
    "sc": "379"
},
{
    "x": 1568908800000,
    "y": 49,
    "sc": "379"
},
{
    "x": 1569168000000,
    "y": 46,
    "sc": "379"
},
{
    "x": 1569254400000,
    "y": 45,
    "sc": "379"
},
{
    "x": 1569340800000,
    "y": 46,
    "sc": "379"
},
{
    "x": 1569427200000,
    "y": 42,
    "sc": "379"
},
{
    "x": 1569513600000,
    "y": 42,
    "sc": "373"
},
{
    "x": 1569772800000,
    "y": 47,
    "sc": "373"
},
{
    "x": 1570464000000,
    "y": 77,
    "sc": "382"
},
{
    "x": 1570550400000,
    "y": 70,
    "sc": "384"
},
{
    "x": 1570636800000,
    "y": 76,
    "sc": "384"
},
{
    "x": 1570723200000,
    "y": 60,
    "sc": "384"
},
{
    "x": 1570982400000,
    "y": 59,
    "sc": "384"
},
{
    "x": 1571068800000,
    "y": 63,
    "sc": "383"
},
{
    "x": 1571155200000,
    "y": 67,
    "sc": "383"
},
{
    "x": 1571241600000,
    "y": 72,
    "sc": "383"
},
{
    "x": 1571328000000,
    "y": 63,
    "sc": "384"
},
{
    "x": 1571587200000,
    "y": 64,
    "sc": "383"
},
{
    "x": 1571673600000,
    "y": 55,
    "sc": "383"
},
{
    "x": 1571760000000,
    "y": 63,
    "sc": "383"
},
{
    "x": 1571846400000,
    "y": 60,
    "sc": "383"
},
{
    "x": 1571932800000,
    "y": 61,
    "sc": "384"
},
{
    "x": 1572192000000,
    "y": 69,
    "sc": "383"
},
{
    "x": 1572278400000,
    "y": 69,
    "sc": "383"
},
{
    "x": 1572364800000,
    "y": 72,
    "sc": "383"
},
{
    "x": 1572451200000,
    "y": 72,
    "sc": "385"
},
{
    "x": 1572537600000,
    "y": 67,
    "sc": "387"
},
{
    "x": 1572796800000,
    "y": 69,
    "sc": "384"
},
{
    "x": 1572883200000,
    "y": 69,
    "sc": "384"
},
{
    "x": 1572969600000,
    "y": 68,
    "sc": "384"
},
{
    "x": 1573056000000,
    "y": 59,
    "sc": "384"
},
{
    "x": 1573142400000,
    "y": 52,
    "sc": "385"
},
{
    "x": 1573401600000,
    "y": 44,
    "sc": "384"
},
{
    "x": 1573488000000,
    "y": 66,
    "sc": "384"
},
{
    "x": 1573574400000,
    "y": 79,
    "sc": "384"
},
{
    "x": 1573660800000,
    "y": 67,
    "sc": "384"
},
{
    "x": 1573747200000,
    "y": 66,
    "sc": "385"
},
{
    "x": 1574006400000,
    "y": 63,
    "sc": "384"
},
{
    "x": 1574092800000,
    "y": 75,
    "sc": "384"
},
{
    "x": 1574179200000,
    "y": 84,
    "sc": "384"
},
{
    "x": 1574265600000,
    "y": 81,
    "sc": "384"
},
{
    "x": 1574352000000,
    "y": 59,
    "sc": "385"
},
{
    "x": 1574611200000,
    "y": 57,
    "sc": "384"
},
{
    "x": 1574697600000,
    "y": 51,
    "sc": "384"
},
{
    "x": 1574784000000,
    "y": 49,
    "sc": "384"
},
{
    "x": 1574870400000,
    "y": 45,
    "sc": "384"
},
{
    "x": 1574956800000,
    "y": 35,
    "sc": "383"
},
{
    "x": 1575216000000,
    "y": 29,
    "sc": "383"
},
{
    "x": 1575302400000,
    "y": 25,
    "sc": "383"
},
{
    "x": 1575388800000,
    "y": 50,
    "sc": "385"
},
{
    "x": 1575475200000,
    "y": 55,
    "sc": "385"
},
{
    "x": 1575561600000,
    "y": 69,
    "sc": "386"
},
{
    "x": 1575820800000,
    "y": 69,
    "sc": "385"
},
{
    "x": 1575907200000,
    "y": 75,
    "sc": "385"
},
{
    "x": 1575993600000,
    "y": 72,
    "sc": "387"
},
{
    "x": 1576080000000,
    "y": 65,
    "sc": "387"
},
{
    "x": 1576166400000,
    "y": 65,
    "sc": "388"
},
{
    "x": 1576425600000,
    "y": 69,
    "sc": "387"
},
{
    "x": 1576512000000,
    "y": 56,
    "sc": "388"
},
{
    "x": 1576598400000,
    "y": 51,
    "sc": "389"
},
{
    "x": 1576684800000,
    "y": 42,
    "sc": "389"
},
{
    "x": 1576771200000,
    "y": 46,
    "sc": "390"
},
{
    "x": 1577030400000,
    "y": 64,
    "sc": "389"
},
{
    "x": 1577116800000,
    "y": 77,
    "sc": "389"
},
{
    "x": 1577203200000,
    "y": 68,
    "sc": "383"
},
{
    "x": 1577289600000,
    "y": 69,
    "sc": "385"
},
{
    "x": 1577376000000,
    "y": 83,
    "sc": "393"
},
{
    "x": 1577635200000,
    "y": 77,
    "sc": "392"
},
{
    "x": 1577721600000,
    "y": 68,
    "sc": "393"
},
{
    "x": 1577894400000,
    "y": 64,
    "sc": "392"
},
{
    "x": 1577980800000,
    "y": 74,
    "sc": "393"
},
{
    "x": 1578240000000,
    "y": 80,
    "sc": "392"
},
{
    "x": 1578326400000,
    "y": 79,
    "sc": "392"
},
{
    "x": 1578412800000,
    "y": 76,
    "sc": "392"
},
{
    "x": 1578499200000,
    "y": 84,
    "sc": "392"
},
{
    "x": 1578585600000,
    "y": 96,
    "sc": "393"
},
{
    "x": 1578844800000,
    "y": 104,
    "sc": "392"
},
{
    "x": 1578931200000,
    "y": 94,
    "sc": "392"
},
{
    "x": 1579017600000,
    "y": 109,
    "sc": "393"
},
{
    "x": 1579104000000,
    "y": 106,
    "sc": "393"
},
{
    "x": 1579190400000,
    "y": 123,
    "sc": "393"
},
{
    "x": 1579449600000,
    "y": 135,
    "sc": "393"
},
{
    "x": 1579536000000,
    "y": 134,
    "sc": "393"
},
{
    "x": 1579622400000,
    "y": 130,
    "sc": "387"
},
{
    "x": 1579708800000,
    "y": 113,
    "sc": "387"
},
{
    "x": 1580659200000,
    "y": 139,
    "sc": "394"
},
{
    "x": 1580745600000,
    "y": 116,
    "sc": "394"
},
{
    "x": 1580832000000,
    "y": 125,
    "sc": "394"
},
{
    "x": 1580918400000,
    "y": 126,
    "sc": "394"
},
{
    "x": 1581004800000,
    "y": 145,
    "sc": "394"
},
{
    "x": 1581264000000,
    "y": 142,
    "sc": "394"
},
{
    "x": 1581350400000,
    "y": 147,
    "sc": "394"
},
{
    "x": 1581436800000,
    "y": 138,
    "sc": "394"
},
{
    "x": 1581523200000,
    "y": 134,
    "sc": "394"
},
{
    "x": 1581609600000,
    "y": 133,
    "sc": "394"
},
{
    "x": 1581868800000,
    "y": 144,
    "sc": "394"
},
{
    "x": 1581955200000,
    "y": 155,
    "sc": "394"
},
{
    "x": 1582041600000,
    "y": 163,
    "sc": "394"
},
{
    "x": 1582128000000,
    "y": 150,
    "sc": "393"
},
{
    "x": 1582214400000,
    "y": 156,
    "sc": "394"
},
{
    "x": 1582473600000,
    "y": 159,
    "sc": "393"
},
{
    "x": 1582560000000,
    "y": 145,
    "sc": "393"
},
{
    "x": 1582646400000,
    "y": 154,
    "sc": "393"
},
{
    "x": 1582732800000,
    "y": 168,
    "sc": "393"
},
{
    "x": 1582819200000,
    "y": 162,
    "sc": "394"
},
{
    "x": 1583078400000,
    "y": 182,
    "sc": "393"
},
{
    "x": 1583164800000,
    "y": 185,
    "sc": "393"
},
{
    "x": 1583251200000,
    "y": 175,
    "sc": "393"
},
{
    "x": 1583337600000,
    "y": 192,
    "sc": "393"
},
{
    "x": 1583424000000,
    "y": 201,
    "sc": "394"
},
{
    "x": 1583683200000,
    "y": 203,
    "sc": "393"
},
{
    "x": 1583769600000,
    "y": 213,
    "sc": "394"
},
{
    "x": 1583856000000,
    "y": 215,
    "sc": "394"
},
{
    "x": 1583942400000,
    "y": 220,
    "sc": "394"
},
{
    "x": 1584028800000,
    "y": 222,
    "sc": "395"
},
{
    "x": 1584288000000,
    "y": 254,
    "sc": "394"
},
{
    "x": 1584374400000,
    "y": 259,
    "sc": "399"
},
{
    "x": 1584460800000,
    "y": 270,
    "sc": "401"
},
{
    "x": 1584547200000,
    "y": 271,
    "sc": "403"
},
{
    "x": 1584633600000,
    "y": 279,
    "sc": "404"
},
{
    "x": 1584892800000,
    "y": 275,
    "sc": "403"
},
{
    "x": 1584979200000,
    "y": 284,
    "sc": "403"
},
{
    "x": 1585065600000,
    "y": 291,
    "sc": "406"
},
{
    "x": 1585152000000,
    "y": 285,
    "sc": "406"
},
{
    "x": 1585238400000,
    "y": 294,
    "sc": "410"
},
{
    "x": 1585497600000,
    "y": 289,
    "sc": "409"
},
{
    "x": 1585584000000,
    "y": 295,
    "sc": "409"
},
{
    "x": 1585670400000,
    "y": 291,
    "sc": "409"
},
{
    "x": 1585756800000,
    "y": 297,
    "sc": "408"
},
{
    "x": 1585843200000,
    "y": 298,
    "sc": "409"
},
{
    "x": 1586188800000,
    "y": 285,
    "sc": "410"
},
{
    "x": 1586275200000,
    "y": 296,
    "sc": "410"
},
{
    "x": 1586361600000,
    "y": 301,
    "sc": "410"
},
{
    "x": 1586448000000,
    "y": 303,
    "sc": "409"
},
{
    "x": 1586707200000,
    "y": 334,
    "sc": "408"
},
{
    "x": 1586793600000,
    "y": 318,
    "sc": "411"
},
{
    "x": 1586880000000,
    "y": 300,
    "sc": "411"
},
{
    "x": 1586966400000,
    "y": 284,
    "sc": "411"
},
{
    "x": 1587052800000,
    "y": 275,
    "sc": "412"
},
{
    "x": 1587312000000,
    "y": 285,
    "sc": "411"
},
{
    "x": 1587398400000,
    "y": 296,
    "sc": "412"
},
{
    "x": 1587484800000,
    "y": 316,
    "sc": "414"
},
{
    "x": 1587571200000,
    "y": 319,
    "sc": "414"
},
{
    "x": 1587657600000,
    "y": 322,
    "sc": "415"
},
{
    "x": 1587916800000,
    "y": 338,
    "sc": "414"
},
{
    "x": 1588003200000,
    "y": 312,
    "sc": "412"
},
{
    "x": 1588089600000,
    "y": 343,
    "sc": "412"
},
{
    "x": 1588176000000,
    "y": 335,
    "sc": "412"
},
{
    "x": 1588694400000,
    "y": 350,
    "sc": "414"
},
{
    "x": 1588780800000,
    "y": 347,
    "sc": "414"
},
{
    "x": 1588867200000,
    "y": 353,
    "sc": "415"
},
{
    "x": 1589126400000,
    "y": 361,
    "sc": "414"
},
{
    "x": 1589212800000,
    "y": 362,
    "sc": "414"
},
{
    "x": 1589299200000,
    "y": 347,
    "sc": "414"
},
{
    "x": 1589385600000,
    "y": 375,
    "sc": "414"
},
{
    "x": 1589472000000,
    "y": 362,
    "sc": "415"
},
{
    "x": 1589731200000,
    "y": 351,
    "sc": "414"
},
{
    "x": 1589817600000,
    "y": 345,
    "sc": "414"
},
{
    "x": 1589904000000,
    "y": 335,
    "sc": "415"
},
{
    "x": 1589990400000,
    "y": 335,
    "sc": "418"
},
{
    "x": 1590076800000,
    "y": 338,
    "sc": "418"
},
{
    "x": 1590336000000,
    "y": 335,
    "sc": "418"
},
{
    "x": 1590422400000,
    "y": 326,
    "sc": "418"
},
{
    "x": 1590508800000,
    "y": 328,
    "sc": "418"
},
{
    "x": 1590595200000,
    "y": 348,
    "sc": "418"
},
{
    "x": 1590681600000,
    "y": 333,
    "sc": "418"
},
{
    "x": 1590940800000,
    "y": 323,
    "sc": "418"
},
{
    "x": 1591027200000,
    "y": 345,
    "sc": "418"
},
{
    "x": 1591113600000,
    "y": 335,
    "sc": "418"
},
{
    "x": 1591200000000,
    "y": 319,
    "sc": "418"
},
{
    "x": 1591286400000,
    "y": 296,
    "sc": "420"
},
{
    "x": 1591545600000,
    "y": 334,
    "sc": "421"
},
{
    "x": 1591632000000,
    "y": 312,
    "sc": "421"
},
{
    "x": 1591718400000,
    "y": 294,
    "sc": "422"
},
{
    "x": 1591804800000,
    "y": 297,
    "sc": "422"
},
{
    "x": 1591891200000,
    "y": 287,
    "sc": "423"
},
{
    "x": 1592150400000,
    "y": 264,
    "sc": "423"
},
{
    "x": 1592236800000,
    "y": 254,
    "sc": "423"
},
{
    "x": 1592323200000,
    "y": 252,
    "sc": "422"
},
{
    "x": 1592409600000,
    "y": 233,
    "sc": "425"
},
{
    "x": 1592496000000,
    "y": 223,
    "sc": "426"
},
{
    "x": 1592755200000,
    "y": 214,
    "sc": "425"
},
{
    "x": 1592841600000,
    "y": 198,
    "sc": "423"
},
{
    "x": 1592928000000,
    "y": 209,
    "sc": "424"
},
{
    "x": 1593360000000,
    "y": 215,
    "sc": "427"
},
{
    "x": 1593446400000,
    "y": 200,
    "sc": "428"
},
{
    "x": 1593532800000,
    "y": 210,
    "sc": "425"
},
{
    "x": 1593619200000,
    "y": 242,
    "sc": "427"
},
{
    "x": 1593705600000,
    "y": 248,
    "sc": "428"
},
{
    "x": 1593964800000,
    "y": 299,
    "sc": "427"
},
{
    "x": 1594051200000,
    "y": 246,
    "sc": "429"
},
{
    "x": 1594137600000,
    "y": 218,
    "sc": "429"
},
{
    "x": 1594224000000,
    "y": 223,
    "sc": "430"
},
{
    "x": 1594310400000,
    "y": 218,
    "sc": "431"
},
{
    "x": 1594569600000,
    "y": 182,
    "sc": "431"
},
{
    "x": 1594656000000,
    "y": 229,
    "sc": "431"
},
{
    "x": 1594742400000,
    "y": 244,
    "sc": "434"
},
{
    "x": 1594828800000,
    "y": 269,
    "sc": "434"
},
{
    "x": 1594915200000,
    "y": 257,
    "sc": "435"
},
{
    "x": 1595174400000,
    "y": 264,
    "sc": "434"
},
{
    "x": 1595260800000,
    "y": 272,
    "sc": "436"
},
{
    "x": 1595347200000,
    "y": 259,
    "sc": "438"
},
{
    "x": 1595433600000,
    "y": 260,
    "sc": "441"
},
{
    "x": 1595520000000,
    "y": 280,
    "sc": "442"
},
{
    "x": 1595779200000,
    "y": 251,
    "sc": "441"
},
{
    "x": 1595865600000,
    "y": 257,
    "sc": "441"
},
{
    "x": 1595952000000,
    "y": 230,
    "sc": "441"
},
{
    "x": 1596038400000,
    "y": 260,
    "sc": "441"
},
{
    "x": 1596124800000,
    "y": 250,
    "sc": "442"
},
{
    "x": 1596384000000,
    "y": 238,
    "sc": "441"
},
{
    "x": 1596470400000,
    "y": 258,
    "sc": "441"
},
{
    "x": 1596556800000,
    "y": 239,
    "sc": "441"
},
{
    "x": 1596643200000,
    "y": 274,
    "sc": "441"
},
{
    "x": 1596729600000,
    "y": 283,
    "sc": "443"
},
{
    "x": 1596988800000,
    "y": 305,
    "sc": "443"
},
{
    "x": 1597075200000,
    "y": 292,
    "sc": "443"
},
{
    "x": 1597161600000,
    "y": 285,
    "sc": "443"
},
{
    "x": 1597248000000,
    "y": 304,
    "sc": "443"
},
{
    "x": 1597334400000,
    "y": 282,
    "sc": "444"
},
{
    "x": 1597593600000,
    "y": 298,
    "sc": "444"
},
{
    "x": 1597680000000,
    "y": 293,
    "sc": "443"
},
{
    "x": 1597766400000,
    "y": 316,
    "sc": "444"
},
{
    "x": 1597852800000,
    "y": 342,
    "sc": "447"
},
{
    "x": 1597939200000,
    "y": 326,
    "sc": "448"
},
{
    "x": 1598198400000,
    "y": 309,
    "sc": "454"
},
{
    "x": 1598284800000,
    "y": 303,
    "sc": "454"
},
{
    "x": 1598371200000,
    "y": 323,
    "sc": "454"
},
{
    "x": 1598457600000,
    "y": 327,
    "sc": "455"
},
{
    "x": 1598544000000,
    "y": 296,
    "sc": "456"
},
{
    "x": 1598803200000,
    "y": 345,
    "sc": "455"
},
{
    "x": 1598889600000,
    "y": 348,
    "sc": "456"
},
{
    "x": 1598976000000,
    "y": 328,
    "sc": "456"
},
{
    "x": 1599062400000,
    "y": 329,
    "sc": "456"
},
{
    "x": 1599148800000,
    "y": 328,
    "sc": "457"
},
{
    "x": 1599408000000,
    "y": 338,
    "sc": "458"
},
{
    "x": 1599494400000,
    "y": 344,
    "sc": "458"
},
{
    "x": 1599580800000,
    "y": 356,
    "sc": "458"
},
{
    "x": 1599667200000,
    "y": 332,
    "sc": "458"
},
{
    "x": 1599753600000,
    "y": 327,
    "sc": "459"
},
{
    "x": 1600012800000,
    "y": 338,
    "sc": "460"
},
{
    "x": 1600099200000,
    "y": 346,
    "sc": "460"
},
{
    "x": 1600185600000,
    "y": 335,
    "sc": "461"
},
{
    "x": 1600272000000,
    "y": 319,
    "sc": "462"
},
{
    "x": 1600358400000,
    "y": 344,
    "sc": "463"
},
{
    "x": 1600617600000,
    "y": 358,
    "sc": "463"
},
{
    "x": 1600704000000,
    "y": 361,
    "sc": "463"
},
{
    "x": 1600790400000,
    "y": 379,
    "sc": "463"
},
{
    "x": 1600876800000,
    "y": 380,
    "sc": "461"
},
{
    "x": 1600963200000,
    "y": 374,
    "sc": "461"
},
{
    "x": 1601222400000,
    "y": 369,
    "sc": "461"
},
{
    "x": 1601308800000,
    "y": 368,
    "sc": "463"
},
{
    "x": 1601395200000,
    "y": 371,
    "sc": "463"
},
{
    "x": 1602172800000,
    "y": 392,
    "sc": "463"
},
{
    "x": 1602432000000,
    "y": 381,
    "sc": "463"
},
{
    "x": 1602518400000,
    "y": 373,
    "sc": "463"
},
{
    "x": 1602604800000,
    "y": 369,
    "sc": "463"
},
{
    "x": 1602691200000,
    "y": 346,
    "sc": "463"
},
{
    "x": 1602777600000,
    "y": 369,
    "sc": "465"
},
{
    "x": 1603036800000,
    "y": 346,
    "sc": "465"
},
{
    "x": 1603123200000,
    "y": 291,
    "sc": "465"
},
{
    "x": 1603209600000,
    "y": 290,
    "sc": "465"
},
{
    "x": 1603296000000,
    "y": 305,
    "sc": "467"
},
{
    "x": 1603382400000,
    "y": 301,
    "sc": "469"
},
{
    "x": 1603641600000,
    "y": 258,
    "sc": "470"
},
{
    "x": 1603728000000,
    "y": 251,
    "sc": "472"
},
{
    "x": 1603814400000,
    "y": 248,
    "sc": "472"
},
{
    "x": 1603900800000,
    "y": 262,
    "sc": "474"
},
{
    "x": 1603987200000,
    "y": 236,
    "sc": "474"
},
{
    "x": 1604246400000,
    "y": 184,
    "sc": "474"
},
{
    "x": 1604332800000,
    "y": 196,
    "sc": "474"
},
{
    "x": 1604419200000,
    "y": 171,
    "sc": "476"
},
{
    "x": 1604505600000,
    "y": 164,
    "sc": "476"
},
{
    "x": 1604592000000,
    "y": 137,
    "sc": "477"
},
{
    "x": 1604851200000,
    "y": 135,
    "sc": "477"
},
{
    "x": 1604937600000,
    "y": 119,
    "sc": "479"
},
{
    "x": 1605024000000,
    "y": 112,
    "sc": "481"
},
{
    "x": 1605110400000,
    "y": 134,
    "sc": "481"
},
{
    "x": 1605196800000,
    "y": 115,
    "sc": "483"
},
{
    "x": 1605456000000,
    "y": 109,
    "sc": "485"
},
{
    "x": 1605542400000,
    "y": 105,
    "sc": "486"
},
{
    "x": 1605628800000,
    "y": 121,
    "sc": "485"
},
{
    "x": 1605715200000,
    "y": 76,
    "sc": "485"
},
{
    "x": 1605801600000,
    "y": 74,
    "sc": "488"
},
{
    "x": 1606060800000,
    "y": 69,
    "sc": "487"
},
{
    "x": 1606147200000,
    "y": 79,
    "sc": "489"
},
{
    "x": 1606233600000,
    "y": 77,
    "sc": "489"
},
{
    "x": 1606320000000,
    "y": 77,
    "sc": "490"
},
{
    "x": 1606406400000,
    "y": 77,
    "sc": "495"
},
{
    "x": 1606665600000,
    "y": 78,
    "sc": "494"
},
{
    "x": 1606752000000,
    "y": 78,
    "sc": "497"
},
{
    "x": 1606838400000,
    "y": 82,
    "sc": "497"
},
{
    "x": 1606924800000,
    "y": 82,
    "sc": "497"
},
{
    "x": 1607011200000,
    "y": 82,
    "sc": "498"
},
{
    "x": 1607270400000,
    "y": 79,
    "sc": "497"
},
{
    "x": 1607356800000,
    "y": 74,
    "sc": "497"
},
{
    "x": 1607443200000,
    "y": 74,
    "sc": "500"
},
{
    "x": 1607529600000,
    "y": 72,
    "sc": "502"
},
{
    "x": 1607616000000,
    "y": 67,
    "sc": "503"
},
{
    "x": 1607875200000,
    "y": 72,
    "sc": "504"
},
{
    "x": 1607961600000,
    "y": 61,
    "sc": "504"
},
{
    "x": 1608048000000,
    "y": 74,
    "sc": "505"
},
{
    "x": 1608134400000,
    "y": 87,
    "sc": "505"
},
{
    "x": 1608220800000,
    "y": 71,
    "sc": "506"
},
{
    "x": 1608480000000,
    "y": 62,
    "sc": "505"
},
{
    "x": 1608566400000,
    "y": 65,
    "sc": "506"
},
{
    "x": 1608652800000,
    "y": 61,
    "sc": "508"
},
{
    "x": 1608739200000,
    "y": 50,
    "sc": "511"
},
{
    "x": 1608825600000,
    "y": 45,
    "sc": "511"
},
{
    "x": 1609084800000,
    "y": 43,
    "sc": "514"
},
{
    "x": 1609171200000,
    "y": 57,
    "sc": "514"
},
{
    "x": 1609257600000,
    "y": 48,
    "sc": "514"
},
{
    "x": 1609344000000,
    "y": 51,
    "sc": "515"
},
{
    "x": 1609689600000,
    "y": 45,
    "sc": "514"
},
{
    "x": 1609776000000,
    "y": 48,
    "sc": "514"
},
{
    "x": 1609862400000,
    "y": 51,
    "sc": "514"
},
{
    "x": 1609948800000,
    "y": 53,
    "sc": "514"
},
{
    "x": 1610035200000,
    "y": 43,
    "sc": "515"
},
{
    "x": 1610294400000,
    "y": 30,
    "sc": "514"
},
{
    "x": 1610380800000,
    "y": 30,
    "sc": "514"
},
{
    "x": 1610467200000,
    "y": 40,
    "sc": "514"
},
{
    "x": 1610553600000,
    "y": 27,
    "sc": "514"
},
{
    "x": 1610640000000,
    "y": 29,
    "sc": "515"
},
{
    "x": 1610899200000,
    "y": 23,
    "sc": "515"
},
{
    "x": 1610985600000,
    "y": 29,
    "sc": "515"
},
{
    "x": 1611072000000,
    "y": 35,
    "sc": "516"
},
{
    "x": 1611158400000,
    "y": 35,
    "sc": "516"
},
{
    "x": 1611244800000,
    "y": 36,
    "sc": "516"
},
{
    "x": 1611504000000,
    "y": 32,
    "sc": "515"
},
{
    "x": 1611590400000,
    "y": 31,
    "sc": "515"
},
{
    "x": 1611676800000,
    "y": 28,
    "sc": "515"
},
{
    "x": 1611763200000,
    "y": 29,
    "sc": "516"
},
{
    "x": 1611849600000,
    "y": 28,
    "sc": "518"
},
{
    "x": 1612108800000,
    "y": 26,
    "sc": "517"
},
{
    "x": 1612195200000,
    "y": 41,
    "sc": "517"
},
{
    "x": 1612281600000,
    "y": 60,
    "sc": "517"
},
{
    "x": 1612368000000,
    "y": 56,
    "sc": "522"
},
{
    "x": 1612454400000,
    "y": 94,
    "sc": "524"
},
{
    "x": 1612713600000,
    "y": 74,
    "sc": "523"
},
{
    "x": 1612800000000,
    "y": 65,
    "sc": "522"
},
{
    "x": 1612886400000,
    "y": 72,
    "sc": "523"
},
{
    "x": 1613577600000,
    "y": 61,
    "sc": "528"
},
{
    "x": 1613664000000,
    "y": 89,
    "sc": "529"
},
{
    "x": 1613923200000,
    "y": 66,
    "sc": "528"
},
{
    "x": 1614009600000,
    "y": 80,
    "sc": "530"
},
{
    "x": 1614096000000,
    "y": 74,
    "sc": "530"
},
{
    "x": 1614182400000,
    "y": 78,
    "sc": "530"
},
{
    "x": 1614268800000,
    "y": 55,
    "sc": "531"
},
{
    "x": 1614528000000,
    "y": 66,
    "sc": "531"
},
{
    "x": 1614614400000,
    "y": 66,
    "sc": "531"
},
{
    "x": 1614700800000,
    "y": 57,
    "sc": "533"
},
{
    "x": 1614787200000,
    "y": 59,
    "sc": "533"
},
{
    "x": 1614873600000,
    "y": 67,
    "sc": "534"
},
{
    "x": 1615132800000,
    "y": 52,
    "sc": "533"
},
{
    "x": 1615219200000,
    "y": 51,
    "sc": "533"
},
{
    "x": 1615305600000,
    "y": 43,
    "sc": "533"
},
{
    "x": 1615392000000,
    "y": 49,
    "sc": "534"
},
{
    "x": 1615478400000,
    "y": 45,
    "sc": "535"
},
{
    "x": 1615737600000,
    "y": 67,
    "sc": "534"
},
{
    "x": 1615824000000,
    "y": 55,
    "sc": "538"
},
{
    "x": 1615910400000,
    "y": 48,
    "sc": "538"
},
{
    "x": 1615996800000,
    "y": 65,
    "sc": "538"
},
{
    "x": 1616083200000,
    "y": 97,
    "sc": "539"
},
{
    "x": 1616342400000,
    "y": 123,
    "sc": "538"
},
{
    "x": 1616428800000,
    "y": 134,
    "sc": "538"
},
{
    "x": 1616515200000,
    "y": 200,
    "sc": "538"
},
{
    "x": 1616601600000,
    "y": 229,
    "sc": "539"
},
{
    "x": 1616688000000,
    "y": 199,
    "sc": "540"
},
{
    "x": 1616947200000,
    "y": 164,
    "sc": "542"
},
{
    "x": 1617033600000,
    "y": 195,
    "sc": "551"
},
{
    "x": 1617120000000,
    "y": 206,
    "sc": "551"
},
{
    "x": 1617206400000,
    "y": 223,
    "sc": "551"
},
{
    "x": 1617292800000,
    "y": 225,
    "sc": "552"
},
{
    "x": 1617638400000,
    "y": 317,
    "sc": "551"
},
{
    "x": 1617724800000,
    "y": 308,
    "sc": "551"
},
{
    "x": 1617811200000,
    "y": 316,
    "sc": "551"
},
{
    "x": 1617897600000,
    "y": 328,
    "sc": "552"
},
{
    "x": 1618156800000,
    "y": 436,
    "sc": "555"
},
{
    "x": 1618243200000,
    "y": 404,
    "sc": "557"
},
{
    "x": 1618329600000,
    "y": 384,
    "sc": "557"
},
{
    "x": 1618416000000,
    "y": 406,
    "sc": "559"
},
{
    "x": 1618502400000,
    "y": 430,
    "sc": "560"
},
{
    "x": 1618761600000,
    "y": 387,
    "sc": "559"
},
{
    "x": 1618848000000,
    "y": 347,
    "sc": "565"
},
{
    "x": 1618934400000,
    "y": 391,
    "sc": "565"
},
{
    "x": 1619020800000,
    "y": 400,
    "sc": "563"
},
{
    "x": 1619107200000,
    "y": 403,
    "sc": "566"
},
{
    "x": 1619366400000,
    "y": 409,
    "sc": "569"
},
{
    "x": 1619452800000,
    "y": 469,
    "sc": "573"
},
{
    "x": 1619539200000,
    "y": 442,
    "sc": "575"
},
{
    "x": 1619625600000,
    "y": 438,
    "sc": "575"
},
{
    "x": 1619712000000,
    "y": 439,
    "sc": "578"
},
{
    "x": 1620230400000,
    "y": 364,
    "sc": "580"
},
{
    "x": 1620316800000,
    "y": 360,
    "sc": "583"
},
{
    "x": 1620576000000,
    "y": 386,
    "sc": "588"
},
{
    "x": 1620662400000,
    "y": 424,
    "sc": "588"
},
{
    "x": 1620748800000,
    "y": 426,
    "sc": "588"
},
{
    "x": 1620835200000,
    "y": 458,
    "sc": "588"
},
{
    "x": 1620921600000,
    "y": 447,
    "sc": "589"
},
{
    "x": 1621180800000,
    "y": 433,
    "sc": "588"
},
{
    "x": 1621267200000,
    "y": 465,
    "sc": "588"
},
{
    "x": 1621353600000,
    "y": 440,
    "sc": "588"
},
{
    "x": 1621440000000,
    "y": 454,
    "sc": "588"
},
{
    "x": 1621526400000,
    "y": 443,
    "sc": "589"
},
{
    "x": 1621785600000,
    "y": 414,
    "sc": "592"
},
{
    "x": 1621872000000,
    "y": 439,
    "sc": "592"
},
{
    "x": 1621958400000,
    "y": 466,
    "sc": "594"
},
{
    "x": 1622044800000,
    "y": 480,
    "sc": "594"
},
{
    "x": 1622131200000,
    "y": 433,
    "sc": "595"
},
{
    "x": 1622390400000,
    "y": 396,
    "sc": "594"
},
{
    "x": 1622476800000,
    "y": 413,
    "sc": "594"
},
{
    "x": 1622563200000,
    "y": 400,
    "sc": "596"
},
{
    "x": 1622649600000,
    "y": 433,
    "sc": "597"
},
{
    "x": 1622736000000,
    "y": 317,
    "sc": "598"
},
{
    "x": 1622995200000,
    "y": 351,
    "sc": "597"
},
{
    "x": 1623081600000,
    "y": 368,
    "sc": "597"
},
{
    "x": 1623168000000,
    "y": 362,
    "sc": "599"
},
{
    "x": 1623254400000,
    "y": 350,
    "sc": "599"
},
{
    "x": 1623340800000,
    "y": 350,
    "sc": "600"
},
{
    "x": 1623686400000,
    "y": 367,
    "sc": "599"
},
{
    "x": 1623772800000,
    "y": 407,
    "sc": "598"
},
{
    "x": 1623859200000,
    "y": 406,
    "sc": "599"
},
{
    "x": 1623945600000,
    "y": 366,
    "sc": "599"
},
{
    "x": 1624204800000,
    "y": 348,
    "sc": "602"
},
{
    "x": 1624291200000,
    "y": 359,
    "sc": "602"
},
{
    "x": 1624377600000,
    "y": 344,
    "sc": "605"
},
{
    "x": 1624464000000,
    "y": 310,
    "sc": "606"
},
{
    "x": 1624550400000,
    "y": 313,
    "sc": "611"
},
{
    "x": 1624809600000,
    "y": 326,
    "sc": "610"
},
{
    "x": 1624896000000,
    "y": 308,
    "sc": "612"
},
{
    "x": 1624982400000,
    "y": 290,
    "sc": "617"
},
{
    "x": 1625068800000,
    "y": 274,
    "sc": "614"
},
{
    "x": 1625155200000,
    "y": 256,
    "sc": "615"
},
{
    "x": 1625414400000,
    "y": 253,
    "sc": "614"
},
{
    "x": 1625500800000,
    "y": 226,
    "sc": "614"
},
{
    "x": 1625587200000,
    "y": 245,
    "sc": "614"
},
{
    "x": 1625673600000,
    "y": 199,
    "sc": "614"
},
{
    "x": 1625760000000,
    "y": 166,
    "sc": "615"
},
{
    "x": 1626019200000,
    "y": 137,
    "sc": "614"
},
{
    "x": 1626105600000,
    "y": 137,
    "sc": "614"
},
{
    "x": 1626192000000,
    "y": 182,
    "sc": "614"
},
{
    "x": 1626278400000,
    "y": 163,
    "sc": "614"
},
{
    "x": 1626364800000,
    "y": 164,
    "sc": "617"
},
{
    "x": 1626624000000,
    "y": 214,
    "sc": "616"
},
{
    "x": 1626710400000,
    "y": 209,
    "sc": "617"
},
{
    "x": 1626796800000,
    "y": 167,
    "sc": "619"
},
{
    "x": 1626883200000,
    "y": 157,
    "sc": "619"
}];
/*同类排名百分比*/
var Data_rateInSimilarPersent = [[1454428800000, 96.4500], [1454515200000, 99.2900], [1454601600000, 96.4800], [1455465600000, 96.4800], [1455552000000, 96.4800], [1455638400000, 97.1800], [1455724800000, 96.4800], [1455811200000, 96.5000], [1456070400000, 95.7700], [1456156800000, 95.0700], [1456243200000, 95.0700], [1456329600000, 95.0700], [1456416000000, 93.0600], [1456675200000, 93.0100], [1456761600000, 93.0100], [1456848000000, 93.7900], [1456934400000, 91.7200], [1457020800000, 87.6700], [1457280000000, 86.3000], [1457366400000, 86.3000], [1457452800000, 84.9300], [1457539200000, 85.7100], [1457625600000, 83.8900], [1457884800000, 86.4900], [1457971200000, 87.1600], [1458057600000, 87.1600], [1458144000000, 91.2200], [1458230400000, 91.9500], [1458489600000, 92.5700], [1458576000000, 92.5700], [1458662400000, 93.9200], [1458748800000, 93.2400], [1458835200000, 91.9500], [1459094400000, 93.9200], [1459180800000, 93.2900], [1459267200000, 92.7200], [1459353600000, 92.0500], [1459440000000, 91.4500], [1459785600000, 96.6900], [1459872000000, 95.3600], [1459958400000, 98.6800], [1460044800000, 97.3700], [1460304000000, 96.6900], [1460390400000, 99.3400], [1460476800000, 99.3400], [1460563200000, 99.3400], [1460649600000, 98.6800], [1460908800000, 98.0100], [1460995200000, 98.0100], [1461081600000, 96.7300], [1461168000000, 96.0800], [1461254400000, 92.9000], [1461513600000, 97.3900], [1461600000000, 94.1600], [1461686400000, 87.1000], [1461772800000, 78.0600], [1461859200000, 90.4500], [1462204800000, 81.7600], [1462291200000, 84.3800], [1462377600000, 88.7500], [1462464000000, 89.4400], [1462723200000, 86.8800], [1462809600000, 80.0], [1462896000000, 80.6200], [1462982400000, 85.6200], [1463068800000, 88.8200], [1463328000000, 85.6200], [1463414400000, 85.00], [1463500800000, 87.500], [1463587200000, 87.500], [1463673600000, 88.8200], [1463932800000, 88.8200], [1464019200000, 90.0600], [1464105600000, 90.6800], [1464192000000, 91.9300], [1464278400000, 92.5900], [1464537600000, 93.1700], [1464624000000, 92.5500], [1464710400000, 92.5900], [1464796800000, 94.4400], [1464883200000, 95.7100], [1465142400000, 91.9800], [1465228800000, 96.3000], [1465315200000, 96.3200], [1465747200000, 96.3400], [1465833600000, 98.1700], [1465920000000, 97.6000], [1466006400000, 98.8000], [1466092800000, 98.8100], [1466352000000, 97.0100], [1466438400000, 97.0100], [1466524800000, 97.6200], [1466611200000, 96.4300], [1466697600000, 95.8600], [1466956800000, 97.6200], [1467043200000, 96.4300], [1467129600000, 97.6200], [1467216000000, 98.2200], [1467302400000, 98.8200], [1467561600000, 98.8100], [1467648000000, 98.8100], [1467734400000, 96.4300], [1467820800000, 97.0200], [1467907200000, 92.3100], [1468166400000, 95.2700], [1468252800000, 91.1200], [1468339200000, 91.1200], [1468425600000, 91.7200], [1468512000000, 90.5300], [1468771200000, 90.5300], [1468857600000, 92.3100], [1468944000000, 90.5900], [1469030400000, 91.7600], [1469116800000, 95.8800], [1469376000000, 92.3500], [1469462400000, 95.2700], [1469548800000, 98.2200], [1469635200000, 98.2200], [1469721600000, 97.0600], [1469980800000, 97.0400], [1470067200000, 98.2200], [1470153600000, 97.0400], [1470240000000, 97.0400], [1470326400000, 95.8800], [1470585600000, 96.4500], [1470672000000, 97.0400], [1470758400000, 98.2200], [1470844800000, 97.6300], [1470931200000, 95.8800], [1471190400000, 95.2700], [1471276800000, 93.4900], [1471363200000, 92.3100], [1471449600000, 94.0800], [1471536000000, 88.2400], [1471795200000, 87.5700], [1471881600000, 91.7200], [1471968000000, 95.2700], [1472054400000, 95.8600], [1472140800000, 98.2400], [1472400000000, 94.7400], [1472486400000, 94.1500], [1472572800000, 90.0600], [1472659200000, 87.1300], [1472745600000, 75.5800], [1473004800000, 77.1900], [1473091200000, 84.8000], [1473177600000, 76.0200], [1473264000000, 73.2600], [1473350400000, 64.1600], [1473609600000, 59.3000], [1473696000000, 67.4400], [1473782400000, 69.9400], [1474214400000, 41.2800], [1474300800000, 47.6700], [1474387200000, 48.2600], [1474473600000, 52.9100], [1474560000000, 60.6900], [1474819200000, 54.0700], [1474905600000, 47.6700], [1474992000000, 45.9300], [1475078400000, 39.1800], [1475164800000, 44.7700], [1476028800000, 52.0500], [1476115200000, 54.0700], [1476201600000, 57.5600], [1476288000000, 60.6900], [1476374400000, 55.7500], [1476633600000, 54.9100], [1476720000000, 53.1800], [1476806400000, 47.9800], [1476892800000, 46.8200], [1476979200000, 42.2000], [1477238400000, 30.2900], [1477324800000, 31.4300], [1477411200000, 20.5700], [1477497600000, 22.7300], [1477584000000, 28.2500], [1477843200000, 24.4300], [1477929600000, 26.7000], [1478016000000, 19.8900], [1478102400000, 19.8900], [1478188800000, 15.8200], [1478448000000, 26.1400], [1478534400000, 23.8600], [1478620800000, 32.5800], [1478707200000, 37.4300], [1478793600000, 48.3300], [1479052800000, 54.7500], [1479139200000, 59.7800], [1479225600000, 53.6300], [1479312000000, 67.0400], [1479398400000, 58.3300], [1479657600000, 62.5700], [1479744000000, 69.6100], [1479830400000, 63.5400], [1479916800000, 61.8800], [1480003200000, 61.5400], [1480262400000, 69.0600], [1480348800000, 68.5100], [1480435200000, 66.6700], [1480521600000, 75.8100], [1480608000000, 81.2800], [1480867200000, 80.6500], [1480953600000, 68.2800], [1481040000000, 77.3700], [1481126400000, 84.2100], [1481212800000, 93.7200], [1481472000000, 94.7400], [1481558400000, 93.6800], [1481644800000, 93.1600], [1481731200000, 94.2100], [1481817600000, 92.1500], [1482076800000, 94.2100], [1482163200000, 92.6300], [1482249600000, 93.6800], [1482336000000, 93.6800], [1482422400000, 93.1900], [1482681600000, 93.6200], [1482768000000, 95.2100], [1482854400000, 92.1100], [1482940800000, 90.0500], [1483027200000, 89.0600], [1483372800000, 92.1500], [1483459200000, 94.7600], [1483545600000, 96.8600], [1483632000000, 96.8800], [1483891200000, 96.3400], [1483977600000, 96.8600], [1484064000000, 95.8100], [1484150400000, 96.8600], [1484236800000, 94.7900], [1484496000000, 95.2900], [1484582400000, 95.2900], [1484668800000, 95.2900], [1484755200000, 95.2900], [1484841600000, 95.3100], [1485100800000, 96.8600], [1485187200000, 97.3800], [1485273600000, 97.8800], [1485360000000, 98.4200], [1486051200000, 98.9900], [1486310400000, 99.4900], [1486396800000, 99.4900], [1486483200000, 99.4900], [1486569600000, 98.9800], [1486656000000, 99.00], [1486915200000, 98.00], [1487001600000, 97.00], [1487088000000, 93.00], [1487174400000, 95.500], [1487260800000, 94.5500], [1487520000000, 95.5200], [1487606400000, 97.5100], [1487692800000, 95.0200], [1487779200000, 96.5200], [1487865600000, 97.5200], [1488124800000, 96.5200], [1488211200000, 99.5000], [1488297600000, 96.0200], [1488384000000, 95.5200], [1488470400000, 97.0300], [1488729600000, 99.0000], [1488816000000, 97.0300], [1488902400000, 95.5400], [1488988800000, 95.0500], [1489075200000, 96.5500], [1489334400000, 91.5800], [1489420800000, 89.1100], [1489507200000, 87.1300], [1489593600000, 90.1000], [1489680000000, 87.1900], [1489939200000, 86.6300], [1490025600000, 83.6600], [1490112000000, 83.1700], [1490198400000, 83.1700], [1490284800000, 82.2700], [1490544000000, 84.6500], [1490630400000, 84.6500], [1490716800000, 84.3100], [1490803200000, 85.500], [1490889600000, 85.5700], [1491321600000, 78.4300], [1491408000000, 76.1000], [1491494400000, 80.1000], [1491753600000, 81.9500], [1491840000000, 87.8000], [1491926400000, 84.3900], [1492012800000, 86.8300], [1492099200000, 88.0600], [1492358400000, 87.0600], [1492444800000, 81.0700], [1492531200000, 74.4000], [1492617600000, 77.7800], [1492704000000, 78.8500], [1492963200000, 67.7900], [1493049600000, 70.8100], [1493136000000, 68.4200], [1493222400000, 68.9000], [1493308800000, 68.1000], [1493654400000, 70.8100], [1493740800000, 75.6100], [1493827200000, 76.0800], [1493913600000, 74.2900], [1494172800000, 75.1200], [1494259200000, 77.0300], [1494345600000, 73.2100], [1494432000000, 73.2100], [1494518400000, 73.3300], [1494777600000, 72.2500], [1494864000000, 68.4200], [1494950400000, 67.9400], [1495036800000, 71.7700], [1495123200000, 72.8600], [1495382400000, 62.2000], [1495468800000, 63.8100], [1495555200000, 67.6200], [1495641600000, 72.3300], [1495728000000, 71.5000], [1496160000000, 73.8100], [1496246400000, 74.2900], [1496332800000, 73.4600], [1496592000000, 69.5200], [1496678400000, 72.8600], [1496764800000, 72.8600], [1496851200000, 80.5700], [1496937600000, 86.7900], [1497196800000, 86.3200], [1497283200000, 84.4300], [1497369600000, 87.2600], [1497456000000, 84.0400], [1497542400000, 83.8000], [1497801600000, 86.9800], [1497888000000, 89.3500], [1497974400000, 89.3500], [1498060800000, 87.500], [1498147200000, 79.8200], [1498406400000, 86.3000], [1498492800000, 86.3000], [1498579200000, 88.1300], [1498665600000, 87.2100], [1498752000000, 90.0], [1499011200000, 92.6900], [1499097600000, 92.2400], [1499184000000, 89.9500], [1499270400000, 91.3600], [1499356800000, 90.5000], [1499616000000, 91.3600], [1499702400000, 83.1800], [1499788800000, 83.7800], [1499875200000, 84.6800], [1499961600000, 84.7500], [1500220800000, 82.8800], [1500307200000, 89.1900], [1500393600000, 91.8900], [1500480000000, 93.2400], [1500566400000, 93.2700], [1500825600000, 93.7200], [1500912000000, 94.1700], [1500998400000, 96.8600], [1501084800000, 96.8600], [1501171200000, 95.9800], [1501430400000, 97.3100], [1501516800000, 96.8600], [1501603200000, 96.8600], [1501689600000, 97.3100], [1501776000000, 97.7700], [1502035200000, 97.7600], [1502121600000, 97.7700], [1502208000000, 97.7700], [1502294400000, 97.7700], [1502380800000, 97.3300], [1502640000000, 96.8800], [1502726400000, 96.4300], [1502812800000, 96.8800], [1502899200000, 97.3700], [1502985600000, 97.3800], [1503244800000, 97.8200], [1503331200000, 96.9400], [1503417600000, 95.5900], [1503504000000, 96.0700], [1503590400000, 95.2200], [1503849600000, 94.3200], [1503936000000, 93.8900], [1504022400000, 95.2000], [1504108800000, 94.3200], [1504195200000, 91.3000], [1504454400000, 91.2700], [1504540800000, 90.3900], [1504627200000, 89.5200], [1504713600000, 87.8300], [1504800000000, 82.7600], [1505059200000, 77.4900], [1505145600000, 78.3500], [1505232000000, 80.0900], [1505318400000, 83.5500], [1505404800000, 88.8400], [1505664000000, 88.4100], [1505750400000, 90.1300], [1505836800000, 89.7000], [1505923200000, 86.3800], [1506009600000, 89.8300], [1506268800000, 89.3600], [1506355200000, 88.5100], [1506441600000, 89.7900], [1506528000000, 87.8800], [1506614400000, 87.9800], [1507478400000, 69.4600], [1507564800000, 62.3400], [1507651200000, 61.9200], [1507737600000, 57.9200], [1507824000000, 51.8700], [1508083200000, 47.9200], [1508169600000, 54.1700], [1508256000000, 46.8900], [1508342400000, 22.4100], [1508428800000, 20.9900], [1508688000000, 20.2500], [1508774400000, 24.3800], [1508860800000, 26.4500], [1508947200000, 32.6400], [1509033600000, 43.2100], [1509292800000, 45.8700], [1509379200000, 35.9500], [1509465600000, 33.4700], [1509552000000, 32.6500], [1509638400000, 33.6000], [1509897600000, 36.9900], [1509984000000, 32.1100], [1510070400000, 34.9600], [1510156800000, 38.2100], [1510243200000, 50.8100], [1510502400000, 62.9000], [1510588800000, 70.1600], [1510675200000, 67.7400], [1510761600000, 74.6000], [1510848000000, 75.1000], [1511107200000, 73.3900], [1511193600000, 65.7300], [1511280000000, 66.9400], [1511366400000, 68.6700], [1511452800000, 68.00], [1511712000000, 67.8700], [1511798400000, 65.4600], [1511884800000, 77.5100], [1511971200000, 67.8700], [1512057600000, 60.1600], [1512316800000, 58.800], [1512403200000, 61.600], [1512489600000, 66.0100], [1512576000000, 68.3800], [1512662400000, 63.7800], [1512921600000, 59.6800], [1513008000000, 53.7500], [1513094400000, 55.1200], [1513180800000, 49.2100], [1513267200000, 49.4300], [1513526400000, 48.0800], [1513612800000, 43.0800], [1513699200000, 39.8500], [1513785600000, 46.7400], [1513872000000, 49.2400], [1514131200000, 55.6400], [1514217600000, 55.6400], [1514304000000, 49.0400], [1514390400000, 50.0], [1514476800000, 54.9200], [1514822400000, 57.0300], [1514908800000, 57.4100], [1514995200000, 58.1700], [1515081600000, 60.2300], [1515340800000, 63.5000], [1515427200000, 60.0800], [1515513600000, 60.8400], [1515600000000, 63.8800], [1515686400000, 63.2600], [1515945600000, 60.4600], [1516032000000, 62.7400], [1516118400000, 63.8800], [1516204800000, 62.3600], [1516291200000, 65.5300], [1516550400000, 63.8800], [1516636800000, 63.1200], [1516723200000, 65.0200], [1516809600000, 68.5600], [1516896000000, 60.2300], [1517155200000, 62.8800], [1517241600000, 56.0600], [1517328000000, 53.4100], [1517414400000, 58.7100], [1517500800000, 60.9800], [1517760000000, 60.6100], [1517846400000, 56.2300], [1517932800000, 56.6000], [1518019200000, 52.0800], [1518105600000, 41.5400], [1518364800000, 33.8200], [1518451200000, 31.4600], [1518537600000, 29.0000], [1519228800000, 24.2600], [1519315200000, 24.6300], [1519574400000, 32.7200], [1519660800000, 36.0300], [1519747200000, 35.1600], [1519833600000, 48.1800], [1519920000000, 45.9900], [1520179200000, 65.1100], [1520265600000, 56.1200], [1520352000000, 55.0400], [1520438400000, 53.2400], [1520524800000, 66.5500], [1520784000000, 79.5700], [1520870400000, 79.2100], [1520956800000, 73.6700], [1521043200000, 81.1400], [1521129600000, 75.4400], [1521388800000, 90.3900], [1521475200000, 90.3900], [1521561600000, 85.7700], [1521648000000, 85.8200], [1521734400000, 74.1100], [1521993600000, 85.1100], [1522080000000, 89.4000], [1522166400000, 89.8200], [1522252800000, 90.1800], [1522339200000, 92.2000], [1522598400000, 92.9100], [1522684800000, 92.2000], [1522771200000, 89.0500], [1523203200000, 88.0700], [1523289600000, 84.5600], [1523376000000, 86.3200], [1523462400000, 85.9600], [1523548800000, 89.1200], [1523808000000, 89.1200], [1523894400000, 84.9100], [1523980800000, 89.1200], [1524067200000, 91.2900], [1524153600000, 89.5500], [1524412800000, 84.3200], [1524499200000, 86.8100], [1524585600000, 86.4600], [1524672000000, 85.6600], [1524758400000, 85.6600], [1525190400000, 84.1400], [1525276800000, 84.0800], [1525363200000, 84.7800], [1525622400000, 85.1700], [1525708800000, 89.4200], [1525795200000, 91.4700], [1525881600000, 90.4400], [1525968000000, 88.8100], [1526227200000, 90.2000], [1526313600000, 90.2000], [1526400000000, 90.2000], [1526486400000, 90.5400], [1526572800000, 90.5400], [1526832000000, 91.2200], [1526918400000, 90.1400], [1527004800000, 90.5400], [1527091200000, 90.5400], [1527177600000, 90.8800], [1527436800000, 85.8100], [1527523200000, 85.8100], [1527609600000, 83.1100], [1527696000000, 81.7600], [1527782400000, 73.9900], [1528041600000, 71.3800], [1528128000000, 72.3900], [1528214400000, 74.7500], [1528300800000, 74.5000], [1528387200000, 76.1700], [1528646400000, 72.1500], [1528732800000, 63.7600], [1528819200000, 62.4200], [1528905600000, 68.6700], [1528992000000, 65.3300], [1529337600000, 54.6700], [1529424000000, 50.3300], [1529510400000, 46.0300], [1529596800000, 52.9800], [1529856000000, 53.1400], [1529942400000, 47.1900], [1530028800000, 40.9200], [1530115200000, 41.5800], [1530201600000, 54.1300], [1530460800000, 39.6000], [1530547200000, 43.3200], [1530633600000, 42.3900], [1530720000000, 43.3700], [1530806400000, 46.2800], [1531065600000, 47.9000], [1531152000000, 55.3400], [1531238400000, 50.8100], [1531324800000, 58.2500], [1531411200000, 47.5700], [1531670400000, 43.6900], [1531756800000, 55.0200], [1531843200000, 37.4200], [1531929600000, 40.0], [1532016000000, 47.7400], [1532275200000, 61.2200], [1532361600000, 57.6900], [1532448000000, 58.6000], [1532534400000, 54.1400], [1532620800000, 51.5900], [1532880000000, 47.4500], [1532966400000, 46.8200], [1533052800000, 53.5000], [1533139200000, 59.5500], [1533225600000, 52.8700], [1533484800000, 54.4600], [1533571200000, 57.6400], [1533657600000, 56.9600], [1533744000000, 60.4400], [1533830400000, 65.8200], [1534089600000, 77.0400], [1534176000000, 78.3000], [1534262400000, 75.1600], [1534348800000, 73.5800], [1534435200000, 78.7500], [1534694400000, 79.3800], [1534780800000, 70.3100], [1534867200000, 68.4400], [1534953600000, 66.2500], [1535040000000, 69.0600], [1535299200000, 70.6200], [1535385600000, 76.5600], [1535472000000, 82.1900], [1535558400000, 81.6200], [1535644800000, 84.7800], [1535904000000, 89.1300], [1535990400000, 91.3000], [1536076800000, 88.8200], [1536163200000, 88.2000], [1536249600000, 88.5100], [1536508800000, 88.8200], [1536595200000, 88.2000], [1536681600000, 88.5100], [1536768000000, 88.2400], [1536854400000, 86.6900], [1537113600000, 86.6900], [1537200000000, 87.0000], [1537286400000, 90.4000], [1537372800000, 90.2800], [1537459200000, 93.1000], [1537804800000, 92.7700], [1537891200000, 93.8500], [1537977600000, 93.1000], [1538064000000, 93.5000], [1538928000000, 84.00], [1539014400000, 80.3100], [1539100800000, 80.3100], [1539187200000, 72.6200], [1539273600000, 69.5400], [1539532800000, 73.5400], [1539619200000, 67.0800], [1539705600000, 71.7000], [1539792000000, 75.6900], [1539878400000, 83.3800], [1540137600000, 84.00], [1540224000000, 84.6200], [1540310400000, 85.8500], [1540396800000, 84.6200], [1540483200000, 86.1500], [1540742400000, 90.1500], [1540828800000, 91.7400], [1540915200000, 91.4400], [1541001600000, 91.7400], [1541088000000, 92.6600], [1541347200000, 95.4100], [1541433600000, 96.0200], [1541520000000, 93.6000], [1541606400000, 94.2100], [1541692800000, 89.9400], [1541952000000, 91.1600], [1542038400000, 86.8900], [1542124800000, 88.1100], [1542211200000, 89.0900], [1542297600000, 93.0300], [1542556800000, 93.3300], [1542643200000, 90.6100], [1542729600000, 87.5800], [1542816000000, 86.6700], [1542902400000, 82.1200], [1543161600000, 83.9400], [1543248000000, 81.2100], [1543334400000, 79.3900], [1543420800000, 75.4500], [1543507200000, 79.3900], [1543766400000, 78.7900], [1543852800000, 62.7300], [1543939200000, 72.7300], [1544025600000, 63.5500], [1544112000000, 79.5200], [1544371200000, 85.2400], [1544457600000, 84.6400], [1544544000000, 83.4300], [1544630400000, 80.4200], [1544716800000, 89.1900], [1544976000000, 84.0800], [1545062400000, 81.9300], [1545148800000, 71.3900], [1545235200000, 80.1800], [1545321600000, 80.1800], [1545580800000, 81.0200], [1545667200000, 81.1000], [1545753600000, 80.6100], [1545840000000, 79.2200], [1545926400000, 79.8200], [1546358400000, 79.1000], [1546444800000, 76.7200], [1546531200000, 77.9100], [1546790400000, 84.4300], [1546876800000, 87.1300], [1546963200000, 84.4300], [1547049600000, 86.2300], [1547136000000, 89.5200], [1547395200000, 85.0300], [1547481600000, 85.9300], [1547568000000, 80.2400], [1547654400000, 75.1500], [1547740800000, 74.2500], [1548000000000, 66.7700], [1548086400000, 60.7100], [1548172800000, 65.4800], [1548259200000, 68.4500], [1548345600000, 68.7500], [1548604800000, 79.4600], [1548691200000, 69.0500], [1548777600000, 59.2300], [1548864000000, 62.3500], [1548950400000, 74.4000], [1549814400000, 78.0400], [1549900800000, 66.1700], [1549987200000, 74.4800], [1550073600000, 77.6500], [1550160000000, 77.9400], [1550419200000, 78.5300], [1550505600000, 79.1200], [1550592000000, 81.7600], [1550678400000, 86.1800], [1550764800000, 88.5600], [1551024000000, 87.7200], [1551110400000, 86.5500], [1551196800000, 83.3300], [1551283200000, 81.7400], [1551369600000, 80.8700], [1551628800000, 80.2900], [1551715200000, 73.9100], [1551801600000, 75.9400], [1551888000000, 76.8100], [1551974400000, 78.2600], [1552233600000, 79.1300], [1552320000000, 84.0600], [1552406400000, 85.2200], [1552492800000, 85.2200], [1552579200000, 83.1900], [1552838400000, 80.8700], [1552924800000, 83.7200], [1553011200000, 79.0700], [1553097600000, 78.2000], [1553184000000, 77.6200], [1553443200000, 76.1600], [1553529600000, 78.0300], [1553616000000, 78.0300], [1553702400000, 79.1900], [1553788800000, 75.7200], [1554048000000, 77.1700], [1554134400000, 79.7700], [1554220800000, 81.5000], [1554307200000, 78.9000], [1554652800000, 63.5800], [1554739200000, 71.6800], [1554825600000, 66.1800], [1554912000000, 70.2300], [1554998400000, 69.0800], [1555257600000, 69.9400], [1555344000000, 75.4300], [1555430400000, 84.2000], [1555516800000, 82.7600], [1555603200000, 83.3300], [1555862400000, 78.9500], [1555948800000, 77.5900], [1556035200000, 73.5600], [1556121600000, 67.5300], [1556208000000, 66.3800], [1556467200000, 60.0], [1556553600000, 65.1300], [1557072000000, 59.5400], [1557158400000, 61.8200], [1557244800000, 59.5400], [1557331200000, 59.8300], [1557417600000, 60.9700], [1557676800000, 50.1400], [1557763200000, 45.5800], [1557849600000, 49.5700], [1557936000000, 46.1500], [1558022400000, 44.4400], [1558281600000, 28.9800], [1558368000000, 28.4100], [1558454400000, 25.2800], [1558540800000, 22.7300], [1558627200000, 25.8500], [1558886400000, 29.8300], [1558972800000, 31.5500], [1559059200000, 27.8900], [1559145600000, 24.7900], [1559232000000, 25.6300], [1559491200000, 27.0400], [1559577600000, 27.0400], [1559664000000, 24.8600], [1559750400000, 27.9300], [1560096000000, 27.6500], [1560182400000, 24.3000], [1560268800000, 16.2000], [1560355200000, 15.8300], [1560441600000, 16.9400], [1560700800000, 16.6700], [1560787200000, 18.6100], [1560873600000, 22.500], [1560960000000, 28.2500], [1561046400000, 27.4200], [1561305600000, 26.5900], [1561392000000, 29.0900], [1561478400000, 32.6000], [1561564800000, 36.7400], [1561651200000, 33.9800], [1561910400000, 39.8900], [1561996800000, 40.8800], [1562083200000, 38.6300], [1562169600000, 38.3600], [1562256000000, 39.7300], [1562515200000, 50.4100], [1562601600000, 48.7700], [1562688000000, 55.3400], [1562774400000, 50.4100], [1562860800000, 49.5900], [1563120000000, 52.8800], [1563206400000, 52.6000], [1563292800000, 42.7400], [1563379200000, 41.3700], [1563465600000, 38.3600], [1563724800000, 36.4400], [1563811200000, 38.6300], [1563897600000, 44.9300], [1563984000000, 48.5000], [1564070400000, 55.0400], [1564329600000, 63.4900], [1564416000000, 64.5800], [1564502400000, 63.2200], [1564588800000, 66.4900], [1564675200000, 64.5800], [1564934400000, 64.5800], [1565020800000, 73.4400], [1565107200000, 73.1700], [1565193600000, 73.4400], [1565280000000, 73.1700], [1565539200000, 77.5100], [1565625600000, 82.6600], [1565712000000, 82.2100], [1565798400000, 81.4000], [1565884800000, 82.4800], [1566144000000, 84.1000], [1566230400000, 88.9500], [1566316800000, 88.1400], [1566403200000, 85.1800], [1566489600000, 86.7900], [1566748800000, 82.7500], [1566835200000, 83.3300], [1566921600000, 79.8400], [1567008000000, 82.0400], [1567094400000, 82.0900], [1567353600000, 84.2200], [1567440000000, 81.0200], [1567526400000, 81.5500], [1567612800000, 81.6500], [1567699200000, 84.9200], [1567958400000, 87.0400], [1568044800000, 85.7100], [1568131200000, 86.2200], [1568217600000, 87.9000], [1568563200000, 89.6800], [1568649600000, 90.2100], [1568736000000, 90.7400], [1568822400000, 88.3900], [1568908800000, 87.0700], [1569168000000, 87.8600], [1569254400000, 88.1300], [1569340800000, 87.8600], [1569427200000, 88.9200], [1569513600000, 88.7400], [1569772800000, 87.4000], [1570464000000, 79.8400], [1570550400000, 81.7700], [1570636800000, 80.2100], [1570723200000, 84.3800], [1570982400000, 84.6400], [1571068800000, 83.5500], [1571155200000, 82.5100], [1571241600000, 81.2000], [1571328000000, 83.5900], [1571587200000, 83.2900], [1571673600000, 85.6400], [1571760000000, 83.5500], [1571846400000, 84.3300], [1571932800000, 84.1100], [1572192000000, 81.9800], [1572278400000, 81.9800], [1572364800000, 81.2000], [1572451200000, 81.3000], [1572537600000, 82.6900], [1572796800000, 82.0300], [1572883200000, 82.0300], [1572969600000, 82.2900], [1573056000000, 84.6400], [1573142400000, 86.4900], [1573401600000, 88.5400], [1573488000000, 82.8100], [1573574400000, 79.4300], [1573660800000, 82.5500], [1573747200000, 82.8600], [1574006400000, 83.5900], [1574092800000, 80.4700], [1574179200000, 78.1200], [1574265600000, 78.9100], [1574352000000, 84.6800], [1574611200000, 85.1600], [1574697600000, 86.7200], [1574784000000, 87.2400], [1574870400000, 88.2800], [1574956800000, 90.8600], [1575216000000, 92.4300], [1575302400000, 93.4700], [1575388800000, 87.0100], [1575475200000, 85.7100], [1575561600000, 82.1200], [1575820800000, 82.0800], [1575907200000, 80.5200], [1575993600000, 81.4000], [1576080000000, 83.2000], [1576166400000, 83.2500], [1576425600000, 82.1700], [1576512000000, 85.5700], [1576598400000, 86.8900], [1576684800000, 89.2000], [1576771200000, 88.2100], [1577030400000, 83.5500], [1577116800000, 80.2100], [1577203200000, 82.2500], [1577289600000, 82.0800], [1577376000000, 78.8800], [1577635200000, 80.3600], [1577721600000, 82.7000], [1577894400000, 83.6700], [1577980800000, 81.1700], [1578240000000, 79.5900], [1578326400000, 79.8500], [1578412800000, 80.6100], [1578499200000, 78.5700], [1578585600000, 75.5700], [1578844800000, 73.4700], [1578931200000, 76.0200], [1579017600000, 72.2600], [1579104000000, 73.0300], [1579190400000, 68.7000], [1579449600000, 65.6500], [1579536000000, 65.9000], [1579622400000, 66.4100], [1579708800000, 70.8000], [1580659200000, 64.7200], [1580745600000, 70.5600], [1580832000000, 68.2700], [1580918400000, 68.0200], [1581004800000, 63.2000], [1581264000000, 63.9600], [1581350400000, 62.6900], [1581436800000, 64.9700], [1581523200000, 65.9900], [1581609600000, 66.2400], [1581868800000, 63.4500], [1581955200000, 60.6600], [1582041600000, 58.6300], [1582128000000, 61.8300], [1582214400000, 60.4100], [1582473600000, 59.5400], [1582560000000, 63.1000], [1582646400000, 60.8100], [1582732800000, 57.2500], [1582819200000, 58.8800], [1583078400000, 53.6900], [1583164800000, 52.9300], [1583251200000, 55.4700], [1583337600000, 51.1500], [1583424000000, 48.9800], [1583683200000, 48.3500], [1583769600000, 45.9400], [1583856000000, 45.4300], [1583942400000, 44.1600], [1584028800000, 43.8000], [1584288000000, 35.5300], [1584374400000, 35.0900], [1584460800000, 32.6700], [1584547200000, 32.7500], [1584633600000, 30.9400], [1584892800000, 31.7600], [1584979200000, 29.5300], [1585065600000, 28.3300], [1585152000000, 29.8000], [1585238400000, 28.2900], [1585497600000, 29.3400], [1585584000000, 27.8700], [1585670400000, 28.8500], [1585756800000, 27.2100], [1585843200000, 27.1400], [1586188800000, 30.4900], [1586275200000, 27.8000], [1586361600000, 26.5900], [1586448000000, 25.9200], [1586707200000, 18.1400], [1586793600000, 22.6300], [1586880000000, 27.0100], [1586966400000, 30.9000], [1587052800000, 33.2500], [1587312000000, 30.6600], [1587398400000, 28.1600], [1587484800000, 23.6700], [1587571200000, 22.9500], [1587657600000, 22.4100], [1587916800000, 18.3600], [1588003200000, 24.2700], [1588089600000, 16.7500], [1588176000000, 18.6900], [1588694400000, 15.4600], [1588780800000, 16.1800], [1588867200000, 14.9400], [1589126400000, 12.8000], [1589212800000, 12.5600], [1589299200000, 16.1800], [1589385600000, 9.4200], [1589472000000, 12.7700], [1589731200000, 15.2200], [1589817600000, 16.6700], [1589904000000, 19.2800], [1589990400000, 19.8600], [1590076800000, 19.1400], [1590336000000, 19.8600], [1590422400000, 22.0100], [1590508800000, 21.5300], [1590595200000, 16.7500], [1590681600000, 20.3300], [1590940800000, 22.7300], [1591027200000, 17.4600], [1591113600000, 19.8600], [1591200000000, 23.6800], [1591286400000, 29.5200], [1591545600000, 20.6700], [1591632000000, 25.8900], [1591718400000, 30.3300], [1591804800000, 29.6200], [1591891200000, 32.1500], [1592150400000, 37.5900], [1592236800000, 39.9500], [1592323200000, 40.2800], [1592409600000, 45.1800], [1592496000000, 47.6500], [1592755200000, 49.6500], [1592841600000, 53.1900], [1592928000000, 50.7100], [1593360000000, 49.6500], [1593446400000, 53.2700], [1593532800000, 50.5900], [1593619200000, 43.3300], [1593705600000, 42.0600], [1593964800000, 29.9800], [1594051200000, 42.6600], [1594137600000, 49.1800], [1594224000000, 48.1400], [1594310400000, 49.4200], [1594569600000, 57.7700], [1594656000000, 46.8700], [1594742400000, 43.7800], [1594828800000, 38.0200], [1594915200000, 40.9200], [1595174400000, 39.1700], [1595260800000, 37.6100], [1595347200000, 40.8700], [1595433600000, 41.0400], [1595520000000, 36.6500], [1595779200000, 43.0800], [1595865600000, 41.7200], [1595952000000, 47.8500], [1596038400000, 41.0400], [1596124800000, 43.4400], [1596384000000, 46.0300], [1596470400000, 41.5000], [1596556800000, 45.8000], [1596643200000, 37.8700], [1596729600000, 36.1200], [1596988800000, 31.1500], [1597075200000, 34.0900], [1597161600000, 35.6700], [1597248000000, 31.3800], [1597334400000, 36.4900], [1597593600000, 32.8800], [1597680000000, 33.8600], [1597766400000, 28.8300], [1597852800000, 23.4900], [1597939200000, 27.2300], [1598198400000, 31.9400], [1598284800000, 33.2600], [1598371200000, 28.8500], [1598457600000, 28.1300], [1598544000000, 35.0900], [1598803200000, 24.1800], [1598889600000, 23.6800], [1598976000000, 28.0700], [1599062400000, 27.8500], [1599148800000, 28.2300], [1599408000000, 26.2000], [1599494400000, 24.8900], [1599580800000, 22.2700], [1599667200000, 27.5100], [1599753600000, 28.7600], [1600012800000, 26.5200], [1600099200000, 24.7800], [1600185600000, 27.3300], [1600272000000, 30.9500], [1600358400000, 25.7000], [1600617600000, 22.6800], [1600704000000, 22.0300], [1600790400000, 18.1400], [1600876800000, 17.5700], [1600963200000, 18.8700], [1601222400000, 19.9600], [1601308800000, 20.5200], [1601395200000, 19.8700], [1602172800000, 15.3300], [1602432000000, 17.7100], [1602518400000, 19.4400], [1602604800000, 20.3000], [1602691200000, 25.2700], [1602777600000, 20.6500], [1603036800000, 25.5900], [1603123200000, 37.4200], [1603209600000, 37.6300], [1603296000000, 34.6900], [1603382400000, 35.8200], [1603641600000, 45.1100], [1603728000000, 46.8200], [1603814400000, 47.4600], [1603900800000, 44.7300], [1603987200000, 50.2100], [1604246400000, 61.1800], [1604332800000, 58.6500], [1604419200000, 64.0800], [1604505600000, 65.5500], [1604592000000, 71.2800], [1604851200000, 71.7000], [1604937600000, 75.1600], [1605024000000, 76.7200], [1605110400000, 72.1400], [1605196800000, 76.1900], [1605456000000, 77.5300], [1605542400000, 78.4000], [1605628800000, 75.0500], [1605715200000, 84.3300], [1605801600000, 84.8400], [1606060800000, 85.8300], [1606147200000, 83.8400], [1606233600000, 84.2500], [1606320000000, 84.2900], [1606406400000, 84.4400], [1606665600000, 84.2100], [1606752000000, 84.3100], [1606838400000, 83.5000], [1606924800000, 83.5000], [1607011200000, 83.5300], [1607270400000, 84.1000], [1607356800000, 85.1100], [1607443200000, 85.200], [1607529600000, 85.6600], [1607616000000, 86.6800], [1607875200000, 85.7100], [1607961600000, 87.9000], [1608048000000, 85.3500], [1608134400000, 82.7700], [1608220800000, 85.9700], [1608480000000, 87.7200], [1608566400000, 87.1500], [1608652800000, 87.9900], [1608739200000, 90.2200], [1608825600000, 91.1900], [1609084800000, 91.6300], [1609171200000, 88.9100], [1609257600000, 90.6600], [1609344000000, 90.1000], [1609689600000, 91.2500], [1609776000000, 90.6600], [1609862400000, 90.0800], [1609948800000, 89.6900], [1610035200000, 91.6500], [1610294400000, 94.1600], [1610380800000, 94.1600], [1610467200000, 92.2200], [1610553600000, 94.7500], [1610640000000, 94.3700], [1610899200000, 95.5300], [1610985600000, 94.3700], [1611072000000, 93.2200], [1611158400000, 93.2200], [1611244800000, 93.0200], [1611504000000, 93.7900], [1611590400000, 93.9800], [1611676800000, 94.5600], [1611763200000, 94.3800], [1611849600000, 94.5900], [1612108800000, 94.9700], [1612195200000, 92.0700], [1612281600000, 88.3900], [1612368000000, 89.2700], [1612454400000, 82.0600], [1612713600000, 85.8500], [1612800000000, 87.5500], [1612886400000, 86.2300], [1613577600000, 88.4500], [1613664000000, 83.1800], [1613923200000, 87.500], [1614009600000, 84.9100], [1614096000000, 86.0400], [1614182400000, 85.2800], [1614268800000, 89.6400], [1614528000000, 87.5700], [1614614400000, 87.5700], [1614700800000, 89.3100], [1614787200000, 88.9300], [1614873600000, 87.4500], [1615132800000, 90.2400], [1615219200000, 90.4300], [1615305600000, 91.9300], [1615392000000, 90.8200], [1615478400000, 91.5900], [1615737600000, 87.4500], [1615824000000, 89.7800], [1615910400000, 91.0800], [1615996800000, 87.9200], [1616083200000, 82.0000], [1616342400000, 77.1400], [1616428800000, 75.0900], [1616515200000, 62.8300], [1616601600000, 57.5100], [1616688000000, 63.1500], [1616947200000, 69.7400], [1617033600000, 64.6100], [1617120000000, 62.6100], [1617206400000, 59.5300], [1617292800000, 59.2400], [1617638400000, 42.4700], [1617724800000, 44.1000], [1617811200000, 42.6500], [1617897600000, 40.5800], [1618156800000, 21.4400], [1618243200000, 27.4700], [1618329600000, 31.0600], [1618416000000, 27.3700], [1618502400000, 23.2100], [1618761600000, 30.7700], [1618848000000, 38.5800], [1618934400000, 30.8000], [1619020800000, 28.9500], [1619107200000, 28.8000], [1619366400000, 28.1200], [1619452800000, 18.1500], [1619539200000, 23.1300], [1619625600000, 23.8300], [1619712000000, 24.0500], [1620230400000, 37.2400], [1620316800000, 38.2500], [1620576000000, 34.3500], [1620662400000, 27.8900], [1620748800000, 27.5500], [1620835200000, 22.1100], [1620921600000, 24.1100], [1621180800000, 26.3600], [1621267200000, 20.9200], [1621353600000, 25.1700], [1621440000000, 22.7900], [1621526400000, 24.7900], [1621785600000, 30.0700], [1621872000000, 25.8400], [1621958400000, 21.5500], [1622044800000, 19.1900], [1622131200000, 27.2300], [1622390400000, 33.3300], [1622476800000, 30.4700], [1622563200000, 32.8900], [1622649600000, 27.4700], [1622736000000, 46.9900], [1622995200000, 41.2100], [1623081600000, 38.3600], [1623168000000, 39.5700], [1623254400000, 41.5700], [1623340800000, 41.6700], [1623686400000, 38.7300], [1623772800000, 31.9400], [1623859200000, 32.2200], [1623945600000, 38.9000], [1624204800000, 42.1900], [1624291200000, 40.3700], [1624377600000, 43.1400], [1624464000000, 48.8400], [1624550400000, 48.7700], [1624809600000, 46.5600], [1624896000000, 49.6700], [1624982400000, 53.0000], [1625068800000, 55.3700], [1625155200000, 58.3700], [1625414400000, 58.7900], [1625500800000, 63.1900], [1625587200000, 60.1000], [1625673600000, 67.5900], [1625760000000, 73.0100], [1626019200000, 77.6900], [1626105600000, 77.6900], [1626192000000, 70.3600], [1626278400000, 73.4500], [1626364800000, 73.4200], [1626624000000, 65.2600], [1626710400000, 66.1300], [1626796800000, 73.0200], [1626883200000, 74.6400]];
/*规模变动 mom-较上期环比*/
var Data_fluctuationScale = {
    "categories": ["2020-06-30", "2020-09-30", "2020-12-31", "2021-03-31", "2021-06-30"],
    "series": [{
        "y": 152.82,
        "mom": "7.40%"
    },
    {
        "y": 137.09,
        "mom": "-10.30%"
    },
    {
        "y": 165.52,
        "mom": "20.74%"
    },
    {
        "y": 172.49,
        "mom": "4.21%"
    },
    {
        "y": 210.05,
        "mom": "21.78%"
    }]
};
/*持有人结构*/
var Data_holderStructure = {
    "series": [{
        "name": "机构持有比例",
        "data": [16.93, 17.0, 16.76, 11.38]
    },
    {
        "name": "个人持有比例",
        "data": [83.07, 83.0, 83.24, 88.62]
    },
    {
        "name": "内部持有比例",
        "data": [0.15, 0.11, 0.1, 0.09]
    }],
    "categories": ["2019-06-30", "2019-12-31", "2020-06-30", "2020-12-31"]
};
/*资产配置*/
var Data_assetAllocation = {
    "series": [{
        "name": "股票占净比",
        "type": null,
        "data": [91.23, 91.39, 90.73, 92.13],
        "yAxis": 0
    },
    {
        "name": "债券占净比",
        "type": null,
        "data": [0.23, 0.35, 0.49, 0.4],
        "yAxis": 0
    },
    {
        "name": "现金占净比",
        "type": null,
        "data": [9.77, 8.97, 6.18, 7.81],
        "yAxis": 0
    },
    {
        "name": "净资产",
        "type": "line",
        "data": [162.4243326804, 197.3671571887, 214.1087089859, 261.3260647712],
        "yAxis": 1
    }],
    "categories": ["2020-09-30", "2020-12-31", "2021-03-31", "2021-06-30"]
};
/*业绩评价 ['选股能力', '收益率', '抗风险', '稳定性','择时能力']*/
var Data_performanceEvaluation = {
    "avr": "80.00",
    "categories": ["选证能力", "收益率", "抗风险", "稳定性", "择时能力"],
    "dsc": ["反映基金挑选证券而实现风险\u003cbr\u003e调整后获得超额收益的能力", "根据阶段收益评分，反映基金的盈利能力", "反映基金投资收益的回撤情况", "反映基金投资收益的波动性", "反映基金根据对市场走势的判断，\u003cbr\u003e通过调整仓位及配置而跑赢基金业\u003cbr\u003e绩基准的能力"],
    "data": [90.0, 80.0, 75.0, 75.0, 80.0]
};
/*现任基金经理*/
var Data_currentFundManager = [{
    "id": "30382736",
    "pic": "https://pdf.dfcfw.com/pdf/H8_30382736_1.PNG",
    "name": "周应波",
    "star": 5,
    "workTime": "5年又264天",
    "fundSize": "606.64亿(9只基金)",
    "power": {
        "avr": "82.44",
        "categories": ["经验值", "收益率", "抗风险", "稳定性", "择时能力"],
        "dsc": ["反映基金经理从业年限和管理基金的经验", "根据基金经理投资的阶段收益评分，反映\u003cbr\u003e基金经理投资的盈利能力", "反映基金经理投资的回撤控制能力", "反映基金经理投资收益的波动", "反映基金经理根据对市场的判断，通过\u003cbr\u003e调整仓位及配置而跑赢业绩的基准能力"],
        "data": [83.90, 92.0, 71.50, 60.30, 87.40],
        "jzrq": "2021-07-22"
    },
    "profit": {
        "categories": ["任期收益", "同类平均", "沪深300"],
        "series": [{
            "data": [{
                "name": null,
                "color": "#7cb5ec",
                "y": 384.6813
            },
            {
                "name": null,
                "color": "#414c7b",
                "y": 86.07
            },
            {
                "name": null,
                "color": "#f7a35c",
                "y": 48.66
            }]
        }],
        "jzrq": "2021-07-22"
    }
}];
/*申购赎回*/
var Data_buySedemption = {
    "series": [{
        "name": "期间申购",
        "data": [22.37, 24.39, 41.82, 21.71]
    },
    {
        "name": "期间赎回",
        "data": [34.46, 18.37, 26.02, 14.56]
    },
    {
        "name": "总份额",
        "data": [73.95, 79.97, 95.78, 102.93]
    }],
    "categories": ["2020-09-30", "2020-12-31", "2021-03-31", "2021-06-30"]
};
/*同类型基金涨幅榜（页面底部通栏）*/
var swithSameType = [['009651_海富通成长甄选混合A_40.99', '009652_海富通成长甄选混合C_40.93', '012079_信达澳银新能源精选混_40.23', '005076_创金合信优选回报灵活_39.31', '005927_创金合信新能源汽车股_37.33'], ['005669_前海开源公用事业股票_81.24', '000689_前海开源新经济混合_80.85', '002296_长城行业轮动混合_72.00', '009644_东方阿尔法优势产业混_70.60', '400015_东方新能源汽车混合_70.42'], ['002296_长城行业轮动混合_64.10', '003567_华夏行业景气混合_62.02', '000689_前海开源新经济混合_54.80', '001298_金鹰民族新兴混合_53.02', '005669_前海开源公用事业股票_51.93'], ['005669_前海开源公用事业股票_172.78', '000209_信诚新兴产业混合_154.58', '003834_华夏能源革新股票_146.06', '400015_东方新能源汽车混合_141.83', '009147_建信新能源行业股票_141.16'], ['001643_汇丰晋信智造先锋股票_379.28', '001644_汇丰晋信智造先锋股票_372.50', '003853_金鹰信息产业股票A_362.25', '005885_金鹰信息产业股票C_356.93', '000828_泰达转型机遇股票A_346.12']];