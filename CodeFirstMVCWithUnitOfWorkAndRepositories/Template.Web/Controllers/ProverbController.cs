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
    public class ProverbController : BaseController
    {
        public ProverbController(
            ITemplateUnitOfWork db,
            IUserHelper userHelper,
            ILog logger
            ) : base(userHelper, logger) 
        {
            _db = db;
        }

        private ITemplateUnitOfWork _db;

        public ViewResult Index()
        {
            var proverbs = _db.Proverbs.GetAll();

            return View(proverbs);
        }
    }
}