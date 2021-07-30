using System;
using SqlSugar;

namespace FundLib.Model.DataBaseModel
{
    /// <summary>
    /// 基金
    /// </summary>
    public class FundItem
    {
        [SugarColumn(IsPrimaryKey = true)]
        public string code { get; set; }
        public double? monery { get; set; }
        public string name { get; set; }
        public string ftype { get; set; }
        public double? assets { get; set; } // 净资产

        // 资产分配
        public double? stockPercent { get; set; }
        public double? bondPercent { get; set; }
        public double? cashPercent { get; set; }
        public double? otherPercent { get; set; }

        // 重仓比例
        public double? topPercent { get; set; }
        public double? bondTopPercent { get; set; }
    }

    /// <summary>
    /// 持仓股票详情
    /// </summary>
    public class StockItem
    {
        [SugarColumn(IndexGroupNameList = new[] { "index_fcode" })]
        public string fcode { get; set; }
        public string code { get; set; }
        public string name { get; set; }
        public double? percent { get; set; }
    }

    /// <summary>
    /// 持仓债券
    /// </summary>
    public class BondItem : StockItem
    {

    }
}