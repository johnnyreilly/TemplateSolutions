using log4net;
using Template.Data.Interfaces;
using Template.Web.Base;
using Template.Web.Implementations;
using Template.Web.Interfaces;
using Template.Web.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Template.Web.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(
            ITemplateUnitOfWork db,
            IUserHelper userHelper,
            ILog logger
            ) : base(userHelper, logger) 
        {
            _db = db;
        }

        private ITemplateUnitOfWork _db;

        public ActionResult Index()
        {
            var logs = _db.Logs.GetAll();

            foreach (var log in logs) 
            {

                var i = 1;
            }

            return View();
        }

        public ViewResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ViewResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}