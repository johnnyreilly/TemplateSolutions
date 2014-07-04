using log4net;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Template.Data.Models;
using Template.Web.Controllers;
using Template.Web.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Template.Web.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTests
    {
        private Mock<IUserHelper> _userHelperMock;
        private Mock<ILog> _loggerMock;
        private HomeController _controller;

        [TestInitialize]
        public void Initialise()
        {
            _userHelperMock = new Mock<IUserHelper>();
            _loggerMock = new Mock<ILog>();

            _controller = new HomeController(_userHelperMock.Object, _loggerMock.Object);
        }

        [TestMethod]
        public void Index_returns_ViewResult()
        {
            ViewResult result = _controller.Index();
        }

        [TestMethod]
        public void About_sets_ViewBagMessage()
        {
            ViewResult result = _controller.About();

            Assert.AreEqual("Your application description page.", result.ViewBag.Message);
        }

        [TestMethod]
        public void Contact_sets_ViewBagMessage()
        {
            ViewResult result = _controller.Contact();

            Assert.AreEqual("Your contact page.", result.ViewBag.Message);
        }
    }

}
