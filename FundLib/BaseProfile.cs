using System.Collections.Generic;
using AutoMapper;
using FundLib.Model;
using FundLib.Model.DataBaseModel;
using FundLib.Model.TianTian;
using FundInfo = FundLib.Model.DataBaseModel.FundInfo;

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

            CreateMap<Model.FundInfo, FundInfo>();
            CreateMap<FundInfo, Model.FundInfo>();

            CreateMap<PercenItem, StockItem>();
            CreateMap<StockItem, PercenItem>();


            CreateMap<PercenItem, SummaryItem>();
            CreateMap<StockItem, SummaryItem>();

            CreateMap<FundMNFInfo, FundPrice>()
                .ForMember(x => x.fcode, opt => opt.MapFrom(x => x.FCODE))
                .ForMember(x => x.price, opt => opt.MapFrom(x => x.NAV))
                .ForMember(x => x.price_tmp, opt => opt.MapFrom(x => x.GSZ));
        }
    }
}