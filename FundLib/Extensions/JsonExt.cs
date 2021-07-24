using Newtonsoft.Json.Linq;

namespace FundLib.Extensions
{
    public static class JsonExt
    {
        public static JToken AsJObject(this object obj)
        {
            return JToken.FromObject(obj);
        }

        public static T As<T>(this string json, string prop)
        {
            var token = JToken.Parse(json);
            if (!string.IsNullOrEmpty(prop))
                token = token.SelectToken(prop);
            var rst = token.ToObject<T>();
            return rst;
        }
    }
}