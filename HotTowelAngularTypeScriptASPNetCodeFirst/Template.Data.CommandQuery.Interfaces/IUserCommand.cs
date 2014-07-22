using System.Collections.Generic;
using Template.Data.Models;

namespace Template.Data.CommandQuery.Interfaces
{
    public interface IUserCommand
    {
        User Save(User user);
    }
}
