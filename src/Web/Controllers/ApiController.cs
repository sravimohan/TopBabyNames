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
            return new ObjectResult(_repository.GetStatsByName(name));
        }

        [HttpGet]
        public IActionResult GetByYear(int year, string sex)
        {
            return new ObjectResult(_repository.GetByYear(year, sex.ToEnum()));
        }
    }
}
