using FundService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FundService.Services;
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
            var lst = _commonService.GetFundList(new string[0]);
            return View(lst);
        }

        public IActionResult UpdLoad(List<IFormFile> files)
        {
            var file = Request.Form.Files.FirstOrDefault();
            var codes = new List<string>();
            if (file != null)
                codes = _commonService.ReadCodes(file).Select(x => x.code).ToList();
            var lst = _commonService.GetFundList(codes);
            return View("Index", lst);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.Client, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult Export(List<IFormFile> files)
        {
            var file = Request.Form.Files.FirstOrDefault();
            var codes = new List<string>();
            if (file != null)
                codes = _commonService.ReadCodes(file).Select(x => x.code).ToList();
            var lst = _commonService.GetFundList(codes);
            var bytes = _commonService.AsExcel(lst);

            return new FileContentResult(bytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            {
                FileDownloadName = $"基金统计-{DateTime.Now.ToShortDateString()}.xlsx"
            };
        }
    }
}
