using log4net;
using Template.Services.Interfaces;
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
            IProverbService proverbService,
            IUserHelper userHelper,
            ILog logger
            ) : base(userHelper, logger) 
        {
            _proverbService = proverbService;
        }

        private IProverbService _proverbService;

        public ViewResult Index()
        {
            var proverbs = _proverbService.GetAll();

            return View(proverbs);
        }
    }
}