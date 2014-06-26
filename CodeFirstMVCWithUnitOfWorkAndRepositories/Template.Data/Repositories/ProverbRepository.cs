using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Template.Data.Interfaces;
using Template.Data.Models;

namespace Template.Data.Repositories
{
    public class ProverbRepository : GenericRepository<Proverb>, IProverbRepository
    {
        public ProverbRepository(TemplateContext context)
            : base(context)
        {
        }

        public ICollection<Proverb> GetByUserId(int userId)
        {
            return dbSet
                .Where(x => x.UserId == userId)
                .ToList();
        }
    }
}
