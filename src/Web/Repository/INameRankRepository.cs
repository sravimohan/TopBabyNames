using System.Collections.Generic;
using Web.Model;

namespace Web.Repository
{
    public interface INameRankRepository
    {
        IEnumerable<string> GetAllNames();
        IEnumerable<NameRank> GetByName(string name);
        IEnumerable<NameRank> GetByYear(int year, Sex sex);
        IEnumerable<NameRank> GetDetailsByName(string name);
        IEnumerable<NameStatistics> GetStatsByName(string name);
        IEnumerable<NameSummary> GetTopNames(int count, Sex sex);

    }
}