﻿using log4net;
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
    public class SageController : ApiController
    {
        IUserService _userService;
        IUserHelper _userHelper;
        ILog _logger;

        public SageController(
            IUserService userService,
            IUserHelper userHelper,
            ILog logger) 
        {
            _userService = userService;
            _userHelper = userHelper;
            _logger = logger;
        }

        public User Get(int id)
        {
            return _userService.GetById(id);
        }

        public IEnumerable<User> Get()
        {
            return _userService.GetAll();
        }

        public User Post(User sage)
        {
            sage = _userService.Save(sage);

            return sage;
        }

        /*

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