using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FundLib.Extensions;
using FundLib.Interface;
using FundLib.Model;
using Newtonsoft.Json.Linq;

namespace FundLib.Services
{
    public class ProcessService : IPrcessData
    {
        private IMapper _mapper;
        public ProcessService(IMapper mapper)
        {
            _mapper = mapper;
        }
        public FundSummary Process(IEnumerable<FundDetail> fundDetails)
        {
            var fundList = new List<FundDetail>(fundDetails);

            var top10 = fundList.SelectMany(x => x.Top10 ?? new List<FundTop10>()).ToList();
            var bondTop10 = fundList.SelectMany(x => x.BondTop10 ?? new List<FundTop10>()).ToList();

            var rst = new FundSummary();
            rst.StockItems = _mapper.Map<List<SummaryItem>>(top10).DistinctBy(x => x.Code);
            rst.BondItems = _mapper.Map<List<SummaryItem>>(bondTop10).DistinctBy(x => x.Code);
            return rst;
        }
    }
}