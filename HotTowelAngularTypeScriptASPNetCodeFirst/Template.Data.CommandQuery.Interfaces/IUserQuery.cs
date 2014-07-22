using System.Collections.Generic;
using Template.Data.Models;

namespace Template.Data.CommandQuery.Interfaces
{
    public interface IUserQuery
    {
        ICollection<User> GetAll();
        ICollection<User> GetAllWithProverbs();
        User GetById(int id);
        User GetByIdWithProverbs(int id);
    }
}
