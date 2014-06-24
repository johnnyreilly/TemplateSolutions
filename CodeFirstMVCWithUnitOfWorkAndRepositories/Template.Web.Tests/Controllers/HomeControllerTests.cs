using log4net;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Template.Data.Models;
using Template.Data.Repositories;
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
        private Mock<ITemplateUnitOfWork> _TemplateUnitOfWorkMock;
        private Mock<IUserHelper> _userHelperMock;
        private Mock<ILog> _loggerMock;
        private HomeController _controller;

        [TestInitialize]
        public void Initialise()
        {
            _TemplateUnitOfWorkMock = new Mock<ITemplateUnitOfWork>();
            _userHelperMock = new Mock<IUserHelper>();
            _loggerMock = new Mock<ILog>();

            _controller = new HomeController(_TemplateUnitOfWorkMock.Object, _userHelperMock.Object, _loggerMock.Object);
        }

        [TestMethod]
        public void Index_gets_Logs()
        {
            _TemplateUnitOfWorkMock
                .Setup(x => x.Logs.Get())
                .Returns(new List<Log4Net>().AsQueryable());

            ActionResult result = _controller.Index();

            _TemplateUnitOfWorkMock
                .Verify(x => x.Logs.Get(), Times.Once);
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
