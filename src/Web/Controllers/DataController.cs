using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Web.Repository;

namespace Web.Controllers
{
    //[Route("api/[controller]")]
    public class DataController : Controller
    {
        [HttpGet]
        public IActionResult GetByName(string name)
        {
            return new ObjectResult(new NameRankRepository().GetByName(name));
        }
    }
}
