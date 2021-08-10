﻿using System;
using System.Collections.Generic;
using System.Linq;
using SqlSugar;

namespace FundLib.Model
{
    public class FundInfo
    {
        public string code { get; set; }    // 基金代码
        public string name { get; set; }    // 基金名称
        public string ftype { get; set; }   // 基金类型
        public double? assets { get; set; } // 净资产

        // 资产分配
        public double? stockPercent { get; set; }
        public double? bondPercent { get; set; }
        public double? cashPercent { get; set; }
        public double? otherPercent { get; set; }

        public IEnumerable<PercenItem> FundStocks { get; set; }
        public IEnumerable<PercenItem> FundBoods { get; set; }
        public IEnumerable<PercenItem> Sectors { get; set; }
    }
}