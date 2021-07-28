using System;
using System.Linq;
using SqlSugar;

namespace FundLib.Services
{
    /// <summary>
    /// 数据存储服务服务
    /// </summary>
    public class RepositoryService
    {
        #region 数据库连接
        private SqlSugarClient sugarClient;
        public RepositoryService()
        {
            sugarClient = GetInstance();
            InitlizeTableList();
        }
        private SqlSugarClient GetInstance()
        {
            SqlSugarClient db = new SqlSugarClient(new ConnectionConfig()
            {
                ConnectionString = PublicDatas.Configuration["ConnectionStrings:DataBase"],
                DbType = (DbType)Enum.Parse(typeof(DbType), PublicDatas.Configuration["ConnectionStrings:DataBaseType"]),
                IsAutoCloseConnection = true,
                InitKeyType = InitKeyType.Attribute
            });
            db.Aop.OnLogExecuting = (sql, pars) =>
            {
                Console.WriteLine(sql + "\r\n" + db.Utilities.SerializeObject(pars.ToDictionary(it => it.ParameterName, it => it.Value)));
                Console.WriteLine();
            };
            return db;
        }
        #endregion

        /// <summary>
        /// 
        /// </summary>
        public void InitlizeTableList()
        {
            var types = new Type[]
            {

            };
            if (types.Any())
                sugarClient.CodeFirst.SetStringDefaultLength(200).InitTables(types);
        }

    }
}