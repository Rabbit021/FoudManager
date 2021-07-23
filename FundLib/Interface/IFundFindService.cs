using FundLib.Model;
using System.Collections.Generic;

namespace FundLib.Interface
{
    public interface IFundFindService
    {
        IEnumerable<FundDetail> GetFundDetailList(IEnumerable<string> codes);
    }
}