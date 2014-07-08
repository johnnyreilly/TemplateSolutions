using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Template.Data.Models;
using Template.Services.Interfaces;
using Template.Web.Interfaces;

namespace HotTowelAngularTypeScriptASPNetCodeFirst.Controllers
{
    public class ProverbsController : ApiController
    {
        IProverbService _proverbService;
        IUserHelper _userHelper;
        ILog _logger;

        public ProverbsController(
            IProverbService proverbService,
            IUserHelper userHelper,
            ILog logger) 
        {
            _proverbService = proverbService;
            _userHelper = userHelper;
            _logger = logger;
        }

        public IEnumerable<Proverb> Get()
        {
            return _proverbService.GetAll();
        }

        /*
        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
         */
    }
}