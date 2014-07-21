using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Data.Interfaces;
using Template.Data.Models;
using Template.Services.Interfaces;

namespace Template.Services
{
    public class ProverbService : IProverbService
    {
        public ProverbService(ITemplateUnitOfWork db)
        {
            _db = db;
        }

        private ITemplateUnitOfWork _db;

        public ICollection<Proverb> GetAll()
        {
            return _db.Proverbs.GetAll();
        }

    }
}
