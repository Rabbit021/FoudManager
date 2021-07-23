using System.Collections.Generic;
using FundManager.Model;

namespace FundManager.Interface
{
    public interface IPrcessData
    {
        public void Process(IEnumerable<FundDetail> fundDetails);
    }
}