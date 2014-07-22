using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Template.Data.CommandQuery.Interfaces;
using Template.Data.EntityFramework;
using Template.Data.Models;

namespace Template.Data.CommandQuery
{
    public class ProverbQuery : BaseCommandQuery, IProverbQuery
    {
        public ProverbQuery(TemplateContext context) : base(context) { }

        public ICollection<Proverb> GetAll()
        {
            return _context.Proverbs.ToList();
        }

        public Proverb GetById(int id)
        {
            return _context.Proverbs.Find(id);
        }

        public ICollection<Proverb> GetByUserId(int userId)
        {
            return _context.Proverbs.Where(x => x.UserId == userId).ToList();
        }
    }
}
