using FundService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FundLib.Services;
using Microsoft.AspNetCore.Http;

namespace FundService.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly CommonService _commonService;
        public HomeController(ILogger<HomeController> logger, CommonService commonService)
        {
            _commonService = commonService;
            _logger = logger;
        }

        [ResponseCache(Duration = 600)]
        public IActionResult Index()
        {
            return View();
        }
     
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.Client, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
