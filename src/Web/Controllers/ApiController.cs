using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Web.Repository;

namespace Web.Controllers
{
    public class ApiController : Controller
    {
        private readonly INameRankRepository _repository;

        public ApiController(INameRankRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAllNames()
        {
            return new ObjectResult(_repository.GetAllNames());
        }

        [HttpGet]
        public IActionResult GetTopNames(string sex)
        {
            return new ObjectResult(_repository.GetTopNames(25, sex.ToEnum()));
        }

        [HttpGet]
        public IActionResult GetByName(string name)
        {
            return new ObjectResult(_repository.GetByName(name));
        }

        [HttpGet]
        public IActionResult GetDetailsByName(string name)
        {
            return new ObjectResult(_repository.GetDetailsByName(name));
        }

        [HttpGet]
        public IActionResult GetStatsByName(string name)
        {
            var nameStatistics = _repository.GetStatsByName(name).ToList();
            var statsArray = new int[nameStatistics.Count(), 2];

            for (var x = 0; x < nameStatistics.Count(); x++)
            {
                statsArray[x, 0] = nameStatistics[x].Year;
                statsArray[x, 1] = nameStatistics[x].Total;
            }

            return new ObjectResult(statsArray);
        }

        [HttpGet]
        public IActionResult GetByYear(int year, string sex)
        {
            return new ObjectResult(_repository.GetByYear(year, sex.ToEnum()));
        }
    }
}
