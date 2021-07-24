using System;
using Newtonsoft.Json;

namespace FundLib.Model.TianTian
{
    /// <summary>
    ///  基金概要信息
    /// </summary>
    public class FundMNDetailInformation
    {
        public string fcode { get; set; }

        /// <summary>
        ///     成立时间
        /// </summary>
        public DateTime estabdate { get; set; }

        /// <summary>
        /// 最新规模
        /// </summary>
        public double endnav { get; set; }

        // 管理费
        public string mgrexp { get; set; }

        // 托管费
        public string trustexp { get; set; }

        // 销售服务费
        public string salesexp { get; set; }
    }

    /// <summary>
    ///  持仓统计
    /// </summary>
    public class FundMNAssetAllocationNew
    {
        [JsonProperty("FSRQ")] public DateTime time { get; set; }

        [JsonProperty("GP")] public double stockPercent { get; set; }

        [JsonProperty("ZQ")] public double bondPercent { get; set; }

        [JsonProperty("HB")] public double cashPercent { get; set; }

        [JsonProperty("QT")] public double other { get; set; }

        [JsonProperty("JJ")] public double fundPercent { get; set; }

        [JsonProperty("JZC")] public double nav { get; set; } // 基金规模
    }

    /// <summary>
    /// 基金持仓
    /// </summary>
    public class FundMNInverstPosition
    {
        /// <summary>
        /// 基金持仓
        /// </summary>
        public Fundstock[] fundStocks { get; set; }
        // 债券持仓
        public Fundbood[] fundboods { get; set; }
        // 等等看看 
        public object[] fundfofs { get; set; }
        // etf联结
        public string etfcode { get; set; }
        public string etfshortname { get; set; }

        public class Fundstock
        {
            public string gpdm { get; set; }  // 股票代码
            public string gpjc { get; set; }  // 股票名称
            public string jzbl { get; set; }  // 净值占比
            public string texch { get; set; }
            public string newtexch { get; set; }
            public string isinvisbl { get; set; }
            public string pctnvchgtype { get; set; } // 类型
            public string pctnvchg { get; set; }     // 个股变化
            public string indexcode { get; set; }  // 主题编号
            public string indexname { get; set; }  // 主题名称
        }

        public class Fundbood
        {
            public string zqdm { get; set; }  // 代码
            public string zqmc { get; set; }  // 名称
            public string zjzbl { get; set; } // 净值占比
            public string isbroken { get; set; }
        }

    }

    public class FundMNSectorAllocation
    {
        public string hymc { get; set; } // 行业名称
        public string sz { get; set; }   // 持仓量
        public string zjzbl { get; set; } // 持仓比例
        public string fsrq { get; set; }  // 持仓时间
    }

    /// <summary>
    ///  持仓变化
    /// </summary>
    public class FundMNShareScaleList
    {
        public string fsrq { get; set; }
        public string qjsg { get; set; }
        public string qjsh { get; set; }
        public string qmzfe { get; set; }
        public string zfebdl { get; set; }
        public string jsg { get; set; }
        public string qczfe { get; set; }
    }

    /// <summary>
    ///  净资产变化
    /// </summary>
    public class FundMNAssetsList
    {
        public string fsrq { get; set; }
        public string netnav { get; set; }
        public string change { get; set; }
        public string issum { get; set; }
    }

    /// <summary>
    /// 涨幅
    /// </summary>
    public class FundMNPeriodIncrease
    {
        //周：Z; 月：Y,3Y,6Y; 年:1N，2N，3N，5N，JN
        public string title { get; set; } // 标题
        public string syl { get; set; }  // 涨跌幅
        public string avg { get; set; }  // 通了平均值
        public string hs300 { get; set; } // 沪深300
        public string rank { get; set; } // 通了排名
        public string sc { get; set; }   // 排名总数
        public string diff { get; set; }  //
    }

    /// <summary>
    /// 特色数据
    /// </summary>
    public class FundMNUniqueInfo
    {
        public double SHARP1 { get; set; }
        
        // 百分数
        public double STDDEV1 { get; set; }
        public double MAXRETRA3 { get; set; }
        public double PROFIT_Y { get; set; }
        public double PROFIT_3Y { get; set; }
        public double PROFIT_6Y { get; set; }
        public double PROFIT_1N { get; set; }
    }
}