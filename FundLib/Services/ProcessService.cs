using System.Collections.Generic;
using FundLib.Interface;
using FundLib.Model;
using Newtonsoft.Json.Linq;

namespace FundLib.Services
{
    public class ProcessService : IPrcessData
    {
        public void Process(IEnumerable<FundDetail> fundDetails)
        {
            var lst = JToken.FromObject(fundDetails) +"";
        }
    }
}