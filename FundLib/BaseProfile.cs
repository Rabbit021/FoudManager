using System.Collections.Generic;
using AutoMapper;
using FundLib.Model;
using FundLib.Model.DataBaseModel;
using FundLib.Model.TianTian;

namespace FundLib
{
    public class BaseProfile : Profile
    {
        public BaseProfile() : base()
        {
            CreateMap<FundMNInverstPosition.Fundstock, PercenItem>()
                .ForMember(x => x.Code, opt => opt.MapFrom(x => x.gpdm))
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.gpjc))
                .ForMember(x => x.Percent, opt => opt.MapFrom(x => x.jzbl));

            CreateMap<FundMNInverstPosition.Fundbood, PercenItem>()
                .ForMember(x => x.Code, opt => opt.MapFrom(x => x.zqdm))
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.zqmc))
                .ForMember(x => x.Percent, opt => opt.MapFrom(x => x.zjzbl));

            CreateMap<FundMNSectorAllocation, PercenItem>()
                .ForMember(x => x.Code, opt => opt.MapFrom(x => x.hymc))
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.hymc))
                .ForMember(x => x.Percent, opt => opt.MapFrom(x => x.zjzbl));

            CreateMap<PercenItem, SummaryItem>();

            CreateMap<FundInfo, FundItem>();
            CreateMap<FundItem, FundInfo>();

            CreateMap<PercenItem, StockItem>();
            CreateMap<StockItem, PercenItem>();


            CreateMap<PercenItem, SummaryItem>();
            CreateMap<StockItem, SummaryItem>();
        }
    }
}