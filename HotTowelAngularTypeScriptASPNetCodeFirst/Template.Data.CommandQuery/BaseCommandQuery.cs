using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Template.Data.EntityFramework;

namespace Template.Data.CommandQuery
{
    public abstract class BaseCommandQuery : IDisposable
    {
        protected TemplateContext _context;

        public BaseCommandQuery(TemplateContext context) 
        {
            _context = context;
        }

        private bool _disposed = false;

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
        }
    }
}
