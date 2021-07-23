﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace FundLib.Model
{
    public class FundDetail
    {
        public string code { get; set; }
        public string name { get; set; }
        public string lastTime { get; set; }
        public double topPercent
        {
            get
            {
                return Math.Round(Top10.Sum(x => x.Percent), 2);
            }
        }

        public double bondTopPercent
        {
            get
            {
                return Math.Round(Top10.Sum(x => x.Percent), 2);
            }
        }

        public double stockPercent { get; set; }
        public double bondPercent { get; set; }
        public double cashPercent { get; set; }

        public IEnumerable<FundTop10> Top10 { get; set; }
        public IEnumerable<FundTop10> BondTop10 { get; set; }
    }
}