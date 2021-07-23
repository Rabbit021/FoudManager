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
    }
}