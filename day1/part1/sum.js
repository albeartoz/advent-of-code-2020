var numbers = "1975\n1600\n113\n1773\n1782\n1680\n1386\n1682\n1991\n1640\n1760\n1236\n1159\n1259\n1279\n1739\n1826\n1888\n1072\n416\n1632\n1656\n1273\n1631\n1079\n1807\n1292\n1128\n1841\n1915\n1619\n1230\n1950\n1627\n1966\n774\n1425\n1983\n1616\n1633\n1559\n1925\n960\n1407\n1708\n1211\n1666\n1910\n1960\n1125\n1242\n1884\n1829\n1881\n1585\n1731\n1753\n1784\n1095\n1267\n1756\n1226\n1107\n1664\n1710\n2000\n1181\n1997\n1607\n1889\n1613\n1859\n1479\n1763\n1692\n1967\n522\n1719\n1816\n1714\n1331\n1976\n1160\n1899\n1906\n1783\n1061\n2006\n1993\n1717\n2009\n1563\n1733\n1866\n1651\n1437\n1517\n1113\n1743\n1240\n1629\n1868\n1912\n1296\n1873\n1673\n1996\n1814\n1215\n1927\n1956\n1970\n1887\n1702\n1495\n1754\n1621\n1055\n1538\n1693\n1840\n1685\n1752\n1933\n1727\n1648\n1792\n1734\n1305\n1446\n1764\n1890\n1904\n1560\n1698\n1645\n1214\n1516\n1064\n1729\n1835\n1642\n1932\n1683\n962\n1081\n1943\n1502\n1622\n196\n1972\n1916\n1850\n1205\n1971\n1937\n1575\n1401\n1351\n2005\n1917\n1670\n1388\n1051\n1941\n1751\n1169\n510\n217\n1948\n1120\n1635\n1636\n1511\n1691\n1589\n1410\n1902\n1572\n1871\n1423\n1114\n1806\n1282\n1193\n1974\n388\n1398\n1992\n1263\n1786\n1723\n1206\n1363\n1177\n1646\n1231\n1140\n1088\n1322";
var parseString = function (nums) {
    return nums.split(/\r?\n/);
};
function twoSum(nums, target) {
    var m = new Map();
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var current = parseInt(nums[i]);
        var match = m.get(target - current);
        if (match !== undefined) {
            result = [i, match];
            break;
        }
        m.set(current, i);
    }
    return result;
}
function printAns() {
    var nums = parseString(numbers);
    var indices = twoSum(nums, 2020);
    console.log(parseInt(nums[indices[0]]) * parseInt(nums[indices[1]]));
}
printAns();
