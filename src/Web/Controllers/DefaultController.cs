using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class DefaultController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}