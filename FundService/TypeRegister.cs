using Autofac;
using Autofac.Core;
using Autofac.Core.Registration;
using AutoMapper;
using FundLib;
using FundLib.Interface;
using FundLib.Model;
using FundLib.Model.TianTian;
using FundLib.Services;

namespace FundService
{
    public class TypeRegister : BaseTypeRegister
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            // TODO
        }

        protected override void RegisterAutoMapper(ContainerBuilder builder)
        {
            var autoMapperProfiles = new[] { typeof(AutoMapperProfile) };
            builder.Register(ctx => new MapperConfiguration(cfg =>
            {
                foreach (var profile in autoMapperProfiles)
                {
                    cfg.AddProfile(profile);
                }
            }));
            builder.Register(ctx => ctx.Resolve<MapperConfiguration>().CreateMapper()).As<IMapper>().InstancePerLifetimeScope();
        }
    }

    // ¿‡–Õ◊÷∂Œ”≥…‰
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
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
        }
    }
}