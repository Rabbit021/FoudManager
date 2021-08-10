using System.Collections.Generic;
using AutoMapper;
using FundLib.Model;
using FundLib.Model.DataBaseModel;

namespace FundLib
{
    public class BaseProfile : Profile
    {
        public BaseProfile() : base()
        {
            CreateMap<FundDetail, FundItem>();
            CreateMap<FundItem, FundDetail>();


            CreateMap<FundTop10, StockItem>();
            CreateMap<StockItem, FundTop10>();

            CreateMap<FundTop10, BondItem>();
            CreateMap<BondItem, FundTop10>();

            CreateMap<FundTop10, SummaryItem>();
            CreateMap<StockItem, SummaryItem>();
        }
    }
}