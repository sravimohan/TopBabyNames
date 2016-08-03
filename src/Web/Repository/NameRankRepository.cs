using System;
using System.Collections.Generic;
using System.Linq;
using Web.Model;

namespace Web.Repository
{
    public class NameRankRepository : INameRankRepository
    {
        private readonly NameRankContext _dbcontext;

        public NameRankRepository(NameRankContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        private static IEnumerable<NameRank> _nameRanks;
        private IEnumerable<NameRank> NameRanks
        {
            get
            {
                if (_nameRanks == null)
                    _nameRanks = _dbcontext.NameRanks.ToList();

                return _nameRanks;
            }
        }

        public IEnumerable<string> GetAllNames()
        {
            return NameRanks.Select(n => n.Name).Distinct().OrderBy(s => s);
        }

        public IEnumerable<NameRank> GetByName(string name)
        {
            return NameRanks.Where(n => n.Name.IndexOf(name, StringComparison.CurrentCultureIgnoreCase) != -1);
        }

        public IEnumerable<NameRank> GetByYear(int year, Sex sex)
        {
            return NameRanks.Where(n => n.Year.Equals(year) && n.Sex.Equals(sex.ToDatabaseString())).OrderBy(n => n.Rank);
        }

        public IEnumerable<NameStatistics> GetStatsByName(string name)
        {
            return NameRanks.Where(n => n.Name.IndexOf(name, StringComparison.CurrentCultureIgnoreCase) != -1)
                .Select(n => new NameStatistics {Year = n.Year, Total = n.Total}).OrderBy(n => n.Year);
        }
    }
}
