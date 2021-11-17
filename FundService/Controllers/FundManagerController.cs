using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FundLib.Model.DataBaseModel;
using FundLib.Services;

namespace FundService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FundManagerController : ControllerBase
    {
        private readonly IFundManagerService _fundManagerService;

        public FundManagerController(IFundManagerService fundManagerService)
        {
            _fundManagerService = fundManagerService;
        }

        /// <summary>
        /// 添加更新基金
        /// </summary>
        /// <returns></returns>
        public IActionResult AddOrUpdateFund([FromBody] FundPosition fundPosition)
        {
            _fundManagerService.AddOrUpdateFund(fundPosition);
            return new ContentResult { Content = "", ContentType = "application/json" };
        }
    }
}
