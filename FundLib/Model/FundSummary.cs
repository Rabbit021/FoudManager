using System.Collections.Generic;

namespace FundLib.Model
{
    public class FundSummary
    {
        public IEnumerable<SummaryItem> StockItems { get; set; }
        public IEnumerable<SummaryItem> BondItems { get; set; }
    }

    public class SummaryItem
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public double? Percent { get; set; }
        public double Assets { get; set; }
    }
}