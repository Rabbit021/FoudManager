using System;
using System.Collections.Generic;
using System.Linq;

namespace FundLib.Model
{
    public class FundDetail
    {
        public string code { get; set; }
        public string name { get; set; }
        public string ftype { get; set; }
        public string lastTime { get; set; }
        public double? assets { get; set; } // 净资产


        // 重仓比例
        public double? topPercent
        {
            get
            {
                var sum = Top10.Where(x => x.Percent != null).Sum(x => (double)x.Percent);
                return Math.Round(sum);
            }
        }
        public double? bondTopPercent
        {
            get
            {
                var sum = BondTop10.Where(x => x.Percent != null).Sum(x => (double)x.Percent);
                return Math.Round(sum);
            }
        }

        // 资产分配
        public double? stockPercent { get; set; }
        public double? bondPercent { get; set; }
        public double? cashPercent { get; set; }
        public double? otherPercent { get; set; }


        // 重仓明显
        public IEnumerable<FundTop10> Top10 { get; set; }
        public IEnumerable<FundTop10> BondTop10 { get; set; }
    }
}