using Template.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Data.Repositories
{
    public class TemplateUnitOfWork : ITemplateUnitOfWork, IDisposable
    {
        public TemplateUnitOfWork()
        {
            _context = new TemplateContext();
        }

        private bool _disposed = false;

        private TemplateContext _context;
        private GenericRepository<Log4Net> _logs;

        public void Save()
        {
            _context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public IGenericRepository<Log4Net> Logs
        {
            get
            {
                _logs = _logs ?? new GenericRepository<Log4Net>(_context);
                return _logs;
            }
        }
    }
}
