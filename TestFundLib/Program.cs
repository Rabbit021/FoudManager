using System;
using FundLib.Services;
using Newtonsoft.Json.Linq;

namespace TestFundLib
{
    class Program
    {
        static void Main(string[] args)
        {
            var service = new FundFundFindService();
            var codes = new string[]
            {
                "159928"
            };
            var lst = service.GetFundDetailList(codes);

            var str = JToken.FromObject(lst) + "";
            Console.Write(str);
            Console.ReadKey();
        }
    }
}
