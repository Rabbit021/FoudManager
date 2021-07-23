using FundService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using FundLib.Interface;

namespace FundService.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IFundFindService _fundFind;

        public HomeController(ILogger<HomeController> logger, IFundFindService fundFind)
        {
            _logger = logger;
            _fundFind = fundFind;
        }

        [ResponseCache(Duration = 600)]
        public IActionResult Index()
        {
            var codes = new[]
            {
                "001679",
                "003095",
                "000596",
                "161903",
                "005402",
                "005106",
                "005939",
                "002190",
                "161725",
                "519674",
                "320007",
                "003634",
                "009273",
                "000961",
                "008281",
                "050026",
                "000913",
                "003096",
                "260108",
                "004224"
            };
            var lst = _fundFind.GetFundDetailList(codes);
            return View(lst);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.Client, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult Export()
        {
            // TODO
            // 下载Excel
            var bytes = new byte[0];
            return new FileContentResult(bytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }
    }
}
