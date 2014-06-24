using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Data.Repositories
{
    public interface IGenericRepository<TEntity>
    {
        IQueryable<TEntity> Get();

        TEntity GetById(object id);

        void Insert(TEntity entity);

        void Delete(object id);

        void Delete(TEntity entityToDelete);

        void Update(TEntity entityToUpdate);
    }
}
