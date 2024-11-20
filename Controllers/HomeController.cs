using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using TravelAgency.Domain;
using TravelAgency.Models;

namespace TravelAgency.Controllers
{
    public class HomeController : Controller
    {
       private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger) 

        { 
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult SiteInformation()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
        
        public IActionResult Country()
        {
            return View();
        }

        public IActionResult Service()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginViewModel login)
        {
            if (ModelState.IsValid)
            {
                return Ok(login);
            }
               
            var errors = ModelState.Values.SelectMany(v => v.Errors)
               .Select(e => e.ErrorMessage )
               .ToList();
            return BadRequest(errors); 
        }


       
    }
}





