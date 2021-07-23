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

        public IActionResult Index()
        {
            var lst = _fundFind.GetFundDetailList(new[] { "001938" });
            return View(lst);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}
