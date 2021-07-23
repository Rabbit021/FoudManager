using System;
using FundManager.Interface;
using FundManager.Services;
using System.Linq;

namespace FundManager
{
    class Program
    {


        static void Main(string[] args)
        {
            IPrcessData process = new ProcessService();
            IFindService service = new FundService();

            var codes = new[] { "001938", "202101" ,"165808"};

            var lst = codes.AsParallel().Select(x => service.GetFundDetail(x)).ToList();
            process.Process(lst);

            Console.ReadKey();
        }
    }
}
