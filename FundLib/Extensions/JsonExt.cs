using System;
using System.Collections.Generic;
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

        //根据某键去重查询
        public static IEnumerable<TSource> DistinctBy<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector)
        {
            var hashSet = new HashSet<TKey>();
            if (source != null)
                foreach (var item in source)
                    if (hashSet.Add(keySelector(item)))
                        yield return item;
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