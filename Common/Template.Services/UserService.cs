using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Data.Interfaces;
using Template.Data.Models;
using Template.Services.Interfaces;

namespace Template.Services
{
    public class UserService : IUserService
    {
        public UserService(ITemplateUnitOfWork db)
        {
            _db = db;
        }

        private ITemplateUnitOfWork _db;

        public ICollection<User> GetAll()
        {
            return _db.Users.GetAll();
        }

    }
}
