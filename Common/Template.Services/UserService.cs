using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Data.CommandQuery.Interfaces;
using Template.Data.Models;
using Template.Services.Interfaces;

namespace Template.Services
{
    public class UserService : IUserService
    {
        public UserService(IUserQuery userCQ)
        {
            _userCQ = userCQ;
        }

        private IUserQuery _userCQ;

        public ICollection<User> GetAll()
        {
            return _userCQ.GetAll();
        }

        public User GetById(int id)
        {
            return _userCQ.GetById(id);
        }

    }
}
