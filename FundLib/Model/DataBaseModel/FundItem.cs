using System;
using SqlSugar;

namespace FundLib.Model.DataBaseModel
{
    /// <summary>
    /// 基金持仓
    /// </summary>
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
    public class FundItem : ITableBase
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
    public class StockItem : ITableBase
    {
        public string fcode { get; set; }
        public string scode { get; set; }
        public string name { get; set; }
        public double? percent { get; set; }
        public double assets { get; set; }
    }


    public interface ITableBase
    {

    }
}