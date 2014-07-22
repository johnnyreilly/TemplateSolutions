using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Template.Data.CommandQuery.Interfaces;
using Template.Data.EntityFramework;
using Template.Data.Models;

namespace Template.Data.CommandQuery
{
    public class UserCommand : BaseCommandQuery, IUserCommand
    {
        public UserCommand(TemplateContext context) : base(context) { }

        public User Save(User user)
        {
            if (user.Id > 0)
            {
                _context.Entry(user).State = EntityState.Modified;
            }
            else
            {
                _context.Users.Add(user);
            }
            _context.SaveChanges();

            return user;
        }
    }
}
