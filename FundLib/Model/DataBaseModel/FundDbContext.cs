using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using SqlSugar;

namespace FundLib.Model.DataBaseModel
{
    public class FundDbContext : DbContextBase
    {
        protected override ConnectionConfig GetConnectionConfig()
        {
            var connect = PublicDatas.Resolve<ConnectionStrings>();
            var config = new ConnectionConfig();
            config.ConnectionString = connect.DataBase;
            config.DbType = connect.DataBaseType;
            config.IsAutoCloseConnection = true;
            config.InitKeyType = InitKeyType.Attribute;

            var externalService = new ConfigureExternalServices();

            var redis = "";
            if (!string.IsNullOrEmpty(redis))
            {
                // 二级缓存
            }
            externalService.EntityNameService = (type, entityInfo) =>
            {
                // 自定义实体隐射
            };
            externalService.EntityService = (propertyInfo, column) =>
            {
                if (!column.IsPrimarykey)
                    column.IsNullable = true;
            };

            config.ConfigureExternalServices = externalService;
            return config;
        }

        public override void Initlize()
        {
            base.Initlize();

            var types = new List<Type>();
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            var interfaceType = typeof(ITableBase);

            foreach (var itr in assemblies)
            {
                foreach (Type item in itr.GetTypes())
                {
                    if (!item.IsClass) continue;
                    var ins = item.GetInterfaces();
                    foreach (Type ty in ins)
                    {
                        if (ty == interfaceType)
                        {
                            types.Add(item);
                        }
                    }
                }
            }

            GetInstance();
            var lst = new List<Type>();
            foreach (var itr in types)
            {
                var tbName = GetTableName(itr);
                if (!IsAny(tbName))
                    lst.Add(itr);
            }
            if (lst.Any())
                context.CodeFirst.BackupTable().SetStringDefaultLength(200).InitTables(lst.ToArray());
        }

    }

    public class DbContextBase
    {
        // TODO CodeFirst
        public virtual void Initlize()
        {
        }

        #region 创建数据库实例
        protected SqlSugarClient context;

        protected virtual ConnectionConfig GetConnectionConfig()
        {
            return null;
        }

        protected virtual SqlSugarClient GetInstance()
        {
            try
            {
                if (context != null)
                    return context;
                var config = GetConnectionConfig();
                context = new SqlSugarClient(config);
                context.Ado.CommandTimeOut = 3000;
                context.Aop.OnLogExecuting = (sql, pars) => { };
            }
            catch (Exception e)
            {
            }
            return context;
        }

        protected SimpleClient<TSource> GetClient<TSource>() where TSource : class, new()
        {
            if (context == null)
                context = GetInstance();
            var simpleClient = context.GetSimpleClient<TSource>();
            return simpleClient;
        }
        #endregion

        #region Instert
        public bool InsertRange<TSource>(IEnumerable<TSource> datas) where TSource : class, new()
        {
            var client = GetClient<TSource>();
            var rst = client.InsertRange(datas.ToList());
            return rst;
        }

        #endregion

        #region Query
        public List<T> GetList<T>(Expression<Func<T, bool>> whereExpression = null) where T : class, new()
        {
            var client = GetClient<T>();
            if (whereExpression != null)
            {
                var lst = client.GetList(whereExpression);
                return lst;
            }
            else
            {
                var lst = client.GetList();
                return lst;
            }
        }
        #endregion

        #region Update

        public bool UpdateRange<TSource>(IEnumerable<TSource> datas) where TSource : class, new()
        {
            var client = GetClient<TSource>();
            var rst = client.UpdateRange(datas.ToArray());
            return rst;
        }
        #endregion

        #region Delete

        public bool DeleteByIds<TSource>(dynamic[] ids) where TSource : class, new()
        {
            var client = GetClient<TSource>();
            var rst = client.DeleteByIds(ids);
            return rst;
        }

        public IDeleteable<TSource> AsDeleteable<TSource>() where TSource : class, new()
        {
            var client = GetClient<TSource>();
            var rst = client.AsDeleteable();
            return rst;
        }
        #endregion

        #region Save
        public int Save<TSource>(IEnumerable<TSource> datas) where TSource : class, new()
        {
            if (!datas.Any()) return 0;
            var command = GetClient<TSource>().Context.Storageable(datas.ToList())
                .ToStorage();
            var x = command.AsInsertable.ExecuteCommand(); //执行插入
            var y = command.AsUpdateable.ExecuteCommand(); //执行更新　
            return x + y;
        }
        #endregion

        #region GetTableName
        private string GetTableName<TSource>(string tableName) where TSource : class, new()
        {
            return GetTableName(typeof(TSource));
        }

        public virtual string GetTableName(Type type)
        {
            var tableName = type.Name;
            var tableAttr = type.GetCustomAttribute<SugarTable>(false);
            tableName = string.IsNullOrEmpty(tableAttr?.TableName) ? type.Name : tableAttr?.TableName;
            return tableName;
        }
        #endregion

        protected bool IsAny(string tableName)
        {
            var rst = context.DbMaintenance.IsAnyTable(tableName, false);
            return rst;
        }
    }

    public class ConnectionStrings
    {
        public string DataBase { get; set; }
        public DbType DataBaseType { get; set; }
    }
}