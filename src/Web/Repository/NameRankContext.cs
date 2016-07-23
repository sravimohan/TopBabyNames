using Microsoft.EntityFrameworkCore;
using Web.Model;

namespace Web.Repository
{
    public class NameRankContext : DbContext
    {
        public DbSet<NameRank> NameRanks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./NameRank.db3");
        }
    }
}
