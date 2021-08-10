using System.Collections.Generic;
using FundLib.Model;

namespace FundLib.Interface
{
    public interface IPrcessData
    {
        public FundSummary Process(IEnumerable<FundInfo> fundDetails);
    }
}