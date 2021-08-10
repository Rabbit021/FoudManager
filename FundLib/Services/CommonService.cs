using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Reflection;
using EPPlus.Core.Extensions;
using FundLib.Extensions;
using FundLib.Model;
using Microsoft.AspNetCore.Http;
using OfficeOpenXml;

namespace FundLib.Services
{
    public class CommonService
    {
        private readonly RepositoryService repositoryService;

        public CommonService(RepositoryService repositoryService)
        {
            this.repositoryService = repositoryService;
        }

        public List<FundInfo> GetFundList([NotNull] IEnumerable<string> codes)
        {
            var lst = repositoryService.GetFundList();
            return lst;
        }
    }
}
