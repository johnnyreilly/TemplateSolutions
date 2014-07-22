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
    public class ProverbService : IProverbService
    {
        public ProverbService(IProverbQuery proverbCQ)
        {
            _proverbCQ = proverbCQ;
        }

        private IProverbQuery _proverbCQ;

        public ICollection<Proverb> GetAll()
        {
            return _proverbCQ.GetAll();
        }

    }
}
