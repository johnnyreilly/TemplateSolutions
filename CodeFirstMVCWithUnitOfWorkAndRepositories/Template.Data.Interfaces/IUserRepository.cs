using System.Collections.Generic;
using Template.Data.Models;

namespace Template.Data.Interfaces
{
    public interface IUserRepository : IGenericRepository<User>
    {
        ICollection<User> GetAllWithProverbs();

        User GetByIdWithProverbs(int id);
    }
}
