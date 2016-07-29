using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}