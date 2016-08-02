using System.Collections;
using System.Collections.Generic;
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
        public IActionResult GetByName(string name)
        {
            return new ObjectResult(_repository.GetByName(name));
        }

        [HttpGet]
        public IActionResult GetStatsByName(string name)
        {
            var stats = _repository.GetStatsByName(name).Take(20).ToList();

            var statsArray = new int[stats.Count(), 2];

            for (int x = 0; x < stats.Count(); x++)
            {
                statsArray[x, 0] = stats[x].Year;
                statsArray[x, 1] = stats[x].Total;
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
