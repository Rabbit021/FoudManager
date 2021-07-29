using System;
using Microsoft.EntityFrameworkCore;

namespace FundLib.Model.DataBaseModel
{
    public class FundDbContext : DbContext
    {
        public DbSet<FundDetail> FundDetails { get; set; }

        public FundDbContext(DbContextOptions<FundDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<FundDetail>().ToTable("FundDetail");
        }
    }
}