using System.Collections.Generic;
using System.Net;
using System.Net.Http;

namespace FundLib.Services
{
    public class WebManager
    {
        private static IHttpClientFactory factory;
        static WebManager()
        {
            factory = PublicDatas.Resolve<IHttpClientFactory>();
        }

        public static string Get(string url, IDictionary<string, string> headers = null)
        {
            var httpClient = GetClient(headers);
            var rst = httpClient.GetAsync(url).Result;
            var result = rst.Content.ReadAsStringAsync().Result;
            return result;
        }

        public static string Post(string url, IDictionary<string, string> param, IDictionary<string, string> headers = null)
        {
            var httpClient = GetClient(headers);
            var content = new FormUrlEncodedContent(param);
            var rst = httpClient.PostAsync(url, content).Result;
            var result = rst.Content.ReadAsStringAsync().Result;
            return result;
        }

        private static HttpClient GetClient(IDictionary<string, string> headers)
        {
            ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
            var client = factory.CreateClient();
            if (headers != null)
            {
                foreach (var itr in headers)
                    client.DefaultRequestHeaders.Add(itr.Key, itr.Value);
            }
            return client;
        }

        public static IDictionary<string, string> GetHeaders()
        {
            var dict = PublicDatas.GetConfig<Dictionary<string, string>>("Headers");
            return dict;
        }
    }
}