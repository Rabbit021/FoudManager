using System;
using System.Collections.Generic;

namespace FundLib.Extensions
{
    public static class DictionaryExt
    {
        public static Dictionary<TKey, TSouce> AsDict<TKey, TSouce>(this IEnumerable<TSouce> list, Func<TSouce, TKey> keyFilter)
        {
            var dict = new Dictionary<TKey, TSouce>();
            if (list == null)
                return dict;
            foreach (var souce in list)
            {
                var key = keyFilter.Invoke(souce);
                dict[key] = souce;
            }
            return dict;
        }

        public static Dictionary<TKey, TValue> AsDict<TKey, TSouce, TValue>(this IEnumerable<TSouce> list, Func<TSouce, TKey> keyFilter, Func<TSouce, TValue> valueFilter)
        {
            var dict = new Dictionary<TKey, TValue>();
            foreach (var souce in list)
            {
                var key = keyFilter.Invoke(souce);
                dict[key] = valueFilter.Invoke(souce);
            }
            return dict;
        }

        public static TValue TryGetValue<TValue>(this Dictionary<string, TValue> dict, string key)
        {
            if (key == null)
                return default;
            if (dict.TryGetValue(key, out var rst))
                return rst;
            return default;
        }

        public static IDictionary<TKey, TValue> AddRange<TKey, TValue>(this IDictionary<TKey, TValue> source,
            IDictionary<TKey, TValue> items)
        {
            if (source == null)
                throw new Exception("source is null");
            if (items == null) return source;
            foreach (var item in items)
            {
                source[item.Key] = item.Value;
            }
            return source;
        }
    }
}