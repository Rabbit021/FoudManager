using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace FundLib.Model
{
    public class FundDetail
    {

        [Column("代码")]
        public string code { get; set; }
        [Column("持仓金额")]
        public double? monery { get; set; }
        [Column("名称")]
        public string name { get; set; }
        [Column("类型")]
        public string ftype { get; set; }

        public string lastTime { get; set; }
        [Column("类型")]
        public double? assets { get; set; } // 净资产

        // 资产分配
        [Column("股票比例%")]
        public double? stockPercent { get; set; }
        [Column("债券比例%")]
        public double? bondPercent { get; set; }
        [Column("现金比例%")]
        public double? cashPercent { get; set; }
        public double? otherPercent { get; set; }

        // 重仓比例
        [Column("重仓股比例%")]
        public double? topPercent
        {
            get
            {
                var sum = Top10?.Where(x => x.Percent != null).Sum(x => (double)x.Percent) ?? 00;
                return Math.Round(sum);
            }
          
        }
        [Column("重仓债券比例%")]
        public double? bondTopPercent
        {
            get
            {
                var sum = BondTop10?.Where(x => x.Percent != null).Sum(x => (double)x.Percent) ?? 0;
                return Math.Round(sum);
            }
        }

        // 重仓明显
        //[Column("重仓股票", 10)]
        public IEnumerable<FundTop10> Top10 { get; set; }
        //[Column("重仓债券", 11)]
        public IEnumerable<FundTop10> BondTop10 { get; set; }

        // 行业
        public IEnumerable<Sector> Sectors { get; set; }
    }

    public class ColumnAttribute : Attribute
    {
        public string DisplayName { get; set; }
        public int Column { get; set; }
        public ColumnAttribute(string displayName)
        {
            DisplayName = displayName;
        }
    }
}