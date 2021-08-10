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
            CreateMap<FundInfo, FundItem>();
            CreateMap<FundItem, FundInfo>();

            CreateMap<PercenItem, StockItem>();
            CreateMap<StockItem, PercenItem>();


            CreateMap<PercenItem, SummaryItem>();
            CreateMap<StockItem, SummaryItem>();
        }
    }
}