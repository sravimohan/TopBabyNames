using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Web.Model;

namespace Web.Repository
{
    public class NameRankContext : DbContext
    {
        private readonly IHostingEnvironment _environment;
        public NameRankContext(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        public DbSet<NameRank> NameRanks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var wwwrootPath = _environment.WebRootPath;
            var appDataPath = Path.Combine(wwwrootPath, "AppData");
            var dbFilePath = Path.Combine(appDataPath, "NameRank.db3");
            optionsBuilder.UseSqlite("Filename=" + dbFilePath);
        }
    }
}
