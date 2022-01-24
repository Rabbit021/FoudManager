using System;
using SqlSugar;

namespace FundLib.Model.DataBaseModel
{
    /// <summary>
    /// 基金持仓
    /// </summary>
    [SugarTable("fund_position", TableDescription = "持有的份额")]
    public class FundPosition : ITableBase
    {
        [SugarColumn(IsPrimaryKey = true)]
        public string fcode { get; set; }
        public double cost { get; set; }
        public double fund_share { get; set; }
    }

    /// <summary>
    /// 基金信息
    /// </summary>
    [SugarTable("fund_info", TableDescription = "基金信息")]
    public class FundInfo : ITableBase
    {
        [SugarColumn(IsPrimaryKey = true)]
        public string fcode { get; set; }
        public string name { get; set; }

        public string ftype { get; set; }
        public double? assets { get; set; } // 净资产

        // 资产分配
        public double? stockPercent { get; set; }
        public double? bondPercent { get; set; }
        public double? cashPercent { get; set; }
        public double? otherPercent { get; set; }

        // 重仓比例
        public double topPercent { get; set; }
    }

    /// <summary>
    /// 持仓股票详情
    /// </summary>
    [SugarTable("fund_stock_info", TableDescription = "持仓信息")]
    public class StockItem : ITableBase
    {
        public string fcode { get; set; }
        public string scode { get; set; }
        public string name { get; set; }
        public double? percent { get; set; }
    }

    [SugarTable("fund_price", TableDescription = "基金价格")]
    public class FundPrice : ITableBase
    {
        public string fcode { get; set; }
        public double price { get; set; }
        public double price_tmp { get; set; }
    }

    public interface ITableBase
    {

    }
}