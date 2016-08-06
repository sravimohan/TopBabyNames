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
            if (string.IsNullOrEmpty(name))
                return Enumerable.Empty<NameRank>();

            return NameRanks.Where(n => n.Name.IndexOf(name, StringComparison.CurrentCultureIgnoreCase) != -1).OrderBy(n => n.Year);
        }

        public IEnumerable<NameRank> GetByYear(int year, Sex sex)
        {
            if (year < 1951 || year > 2015)
                return Enumerable.Empty<NameRank>();

            return NameRanks.Where(n => n.Year.Equals(year) && n.Sex.Equals(sex.ToDatabaseString())).OrderBy(n => n.Rank);
        }

        public IEnumerable<NameStatistics> GetStatsByName(string name)
        {
            if (string.IsNullOrEmpty(name))
                return Enumerable.Empty<NameStatistics>();

            return NameRanks.Where(n => n.Name.IndexOf(name, StringComparison.CurrentCultureIgnoreCase) != -1)
                .Select(n => new NameStatistics {Year = n.Year, Total = n.Total}).OrderBy(n => n.Year);
        }

        public IEnumerable<NameSummary> GetTopNames(int count, Sex sex)
        {
            var query = NameRanks.Where(n => n.Sex == sex.ToDatabaseString())
                        .GroupBy(n => n.Name)
                        .OrderByDescending(g => g.Sum(x => x.Total))
                        .Select(g => new NameSummary()
                        {
                            Name = g.Key,
                            Total = g.Sum(x => x.Total)
                        });

            return query.Take(count);
        }
    }
}
