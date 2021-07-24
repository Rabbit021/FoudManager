using System.Collections.Generic;
using System.Net.Http;

namespace FundLib.Services
{
    public class WebManager
    {
        private static HttpClient httpClient = new HttpClient();

        public static string Get(string url)
        {
            var rst = httpClient.GetAsync(url).Result;
            var result = rst.Content.ReadAsStringAsync().Result;
            return result;
        }

        public static string Post(string url, IDictionary<string, string> param)
        {
            var content = new FormUrlEncodedContent(param);
            var rst = httpClient.PostAsync(url,content).Result;
            var result = rst.Content.ReadAsStringAsync().Result;
            return result;
        }
    }
}