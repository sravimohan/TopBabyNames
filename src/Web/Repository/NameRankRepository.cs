using System;
using System.Collections.Generic;
using System.Linq;
using Web.Model;

namespace Web.Repository
{
    public class NameRankRepository : INameRankRepository
    {
        private static IEnumerable<NameRank> NameRanks { get; } = new NameRankContext().NameRanks;

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
