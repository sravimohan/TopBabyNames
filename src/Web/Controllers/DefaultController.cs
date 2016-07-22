using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("[controller]")]
    public class DefaultController : Controller
    {
        [HttpGet]
        public IActionResult Default()
        {
            return View();
        }
    }
}