using System;
using Microsoft.EntityFrameworkCore;

namespace FundLib.Model.DataBaseModel
{
    public class FundDbContext : DbContext
    {
        public DbSet<FundItem> FundItems { get; set; }

        public FundDbContext(DbContextOptions<FundDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FundItem>().ToTable("FundItem");
        }
    }
}