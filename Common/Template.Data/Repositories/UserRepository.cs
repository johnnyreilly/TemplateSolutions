using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Template.Data.Interfaces;
using Template.Data.Models;

namespace Template.Data.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(TemplateContext context) : base(context)
        {
        }

        public ICollection<User> GetAllWithProverbs()
        {
            return dbSet
                .Include(x => x.Proverbs)
                .ToList();
        }

        public User GetByIdWithProverbs(int id)
        {
            return dbSet
                .Include(x => x.Proverbs)
                .SingleOrDefault(x => x.Id == id);
        }
    }
}
