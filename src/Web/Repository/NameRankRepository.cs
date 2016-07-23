using System;
using System.Collections.Generic;
using System.Linq;
using Web.Model;

namespace Web.Repository
{
    public class NameRankRepository
    {
        private static IEnumerable<NameRank> NameRanks { get; } = new NameRankContext().NameRanks.ToList();

        public IList<NameRank> GetByName(string name)
        {
            return NameRanks.Where(n => n.Name.IndexOf(name, StringComparison.CurrentCultureIgnoreCase) != -1).ToList();
        }
    }
}
