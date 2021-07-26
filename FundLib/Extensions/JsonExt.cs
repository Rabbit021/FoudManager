using System;
using Newtonsoft.Json;
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

    public class String2DoubleConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object? value, JsonSerializer serializer)
        {
            writer.WriteValue(value + "");
        }

        public override object? ReadJson(JsonReader reader, Type objectType, object? existingValue, JsonSerializer serializer)
        {
            var str = reader.Value + "";
            if (double.TryParse(str, out var data))
                return data;
            return null;
        }

        public override bool CanConvert(Type objectType)
        {
            return true;
        }
    }
}