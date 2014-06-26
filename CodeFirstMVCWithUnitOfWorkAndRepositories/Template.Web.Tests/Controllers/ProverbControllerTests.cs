using log4net;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Template.Data.Models;
using Template.Data.Interfaces;
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
        private Mock<ITemplateUnitOfWork> _templateUnitOfWorkMock;
        private Mock<IUserHelper> _userHelperMock;
        private Mock<ILog> _loggerMock;
        private ProverbController _controller;

        [TestInitialize]
        public void Initialise()
        {
            _templateUnitOfWorkMock = new Mock<ITemplateUnitOfWork>();
            _userHelperMock = new Mock<IUserHelper>();
            _loggerMock = new Mock<ILog>();

            _controller = new ProverbController(_templateUnitOfWorkMock.Object, _userHelperMock.Object, _loggerMock.Object);
        }

        private void Index_setup()
        {
            _templateUnitOfWorkMock
                .Setup(x => x.Proverbs.GetAll())
                .Returns(new List<Proverb>());
        }

        [TestMethod]
        public void Index_gets_Proverbs_from_repository()
        {
            Index_setup();

            ViewResult result = _controller.Index();

            _templateUnitOfWorkMock
                .Verify(x => x.Proverbs.GetAll(), Times.Once);
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
