using Template.Data.Models;
using Template.Data.Interfaces;
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
        private GenericRepository<User> _users;
        private GenericRepository<Proverb> _proverbs;

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

        public IGenericRepository<Log4Net> Logs { get { return _logs ?? (_logs = new GenericRepository<Log4Net>(_context)); } }

        public IGenericRepository<User> Users { get { return _users ?? (_users = new GenericRepository<User>(_context)); } }

        public IGenericRepository<Proverb> Proverbs { get { return _proverbs ?? (_proverbs = new GenericRepository<Proverb>(_context)); } }
    }
}
