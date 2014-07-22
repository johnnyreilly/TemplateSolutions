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
        public UserService(IUserCommand userCommand, IUserQuery userQuery)
        {
            _userCommand = userCommand;
            _userQuery = userQuery;
        }

        private IUserCommand _userCommand;
        private IUserQuery _userQuery;

        public ICollection<User> GetAll()
        {
            return _userQuery.GetAll();
        }

        public User GetById(int id)
        {
            return _userQuery.GetById(id);
        }

        public User Save(User user) 
        {
            return _userCommand.Save(user);
        }

    }
}
