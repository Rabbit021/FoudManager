using System.Collections.Generic;
using FundManager.Interface;
using FundManager.Model;
using Newtonsoft.Json.Linq;

namespace FundManager.Services
{
    public class ProcessService : IPrcessData
    {
        public void Process(IEnumerable<FundDetail> fundDetails)
        {
            var lst = JToken.FromObject(fundDetails) +"";
        }
    }
}