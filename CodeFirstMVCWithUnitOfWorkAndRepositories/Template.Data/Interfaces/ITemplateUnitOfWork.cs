using Template.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Data.Repositories
{
    public interface ITemplateUnitOfWork
    {
        void Save();

        void Dispose();

        IGenericRepository<Log4Net> Logs { get; }
    }
}
