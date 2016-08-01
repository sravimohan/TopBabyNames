using System.Collections.Generic;
using Web.Model;

namespace Web.Repository
{
    public interface INameRankRepository
    {
        IEnumerable<NameRank> GetByName(string name);
        IEnumerable<NameRank> GetByYear(int year, Sex sex);
        IEnumerable<NameStatistics> GetStatsByName(string name);
    }
}