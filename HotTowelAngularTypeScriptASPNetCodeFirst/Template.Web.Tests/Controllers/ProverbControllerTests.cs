using log4net;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Template.Data.Models;
using Template.Services.Interfaces;
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
    public class ProverbControllerTests
    {
        private Mock<IProverbService> _proverbServiceMock;
        private Mock<IUserHelper> _userHelperMock;
        private Mock<ILog> _loggerMock;
        private ProverbController _controller;

        [TestInitialize]
        public void Initialise()
        {
            _proverbServiceMock = new Mock<IProverbService>();
            _userHelperMock = new Mock<IUserHelper>();
            _loggerMock = new Mock<ILog>();

            _controller = new ProverbController(_proverbServiceMock.Object, _userHelperMock.Object, _loggerMock.Object);
        }

        private void Index_setup()
        {
            _proverbServiceMock
                .Setup(x => x.GetAll())
                .Returns(new List<Proverb>());
        }

        [TestMethod]
        public void Index_gets_Proverbs_from_repository()
        {
            Index_setup();

            ViewResult result = _controller.Index();

            _proverbServiceMock
                .Verify(x => x.GetAll(), Times.Once);
        }

        [TestMethod]
        public void Index_returns_Proverbs_as_model()
        {
            Index_setup();

            ViewResult result = _controller.Index();

            Assert.IsInstanceOfType(result.Model, typeof(ICollection<Proverb>));
        }

    }

}
