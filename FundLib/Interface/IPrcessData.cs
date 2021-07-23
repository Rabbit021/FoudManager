using System.Collections.Generic;
using FundLib.Model;

namespace FundLib.Interface
{
    public interface IPrcessData
    {
        public void Process(IEnumerable<FundDetail> fundDetails);
    }
}