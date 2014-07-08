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
    public class SagesController : ApiController
    {
        IUserService _userService;
        IUserHelper _userHelper;
        ILog _logger;

        public SagesController(
            IUserService userService,
            IUserHelper userHelper,
            ILog logger) 
        {
            _userService = userService;
            _userHelper = userHelper;
            _logger = logger;
        }

        public IEnumerable<User> Get()
        {
            return _userService.GetAll();
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