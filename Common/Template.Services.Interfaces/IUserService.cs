using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Data.Models;

namespace Template.Services.Interfaces
{
    public interface IUserService
    {
        ICollection<User> GetAll();
        User GetById(int id);
    }
}
