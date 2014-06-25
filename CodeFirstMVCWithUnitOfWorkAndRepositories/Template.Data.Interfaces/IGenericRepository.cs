using System.Collections.Generic;

namespace Template.Data.Interfaces
{
    public interface IGenericRepository<TEntity>
    {
        ICollection<TEntity> GetAll();

        TEntity GetById(object id);

        void Insert(TEntity entity);

        void Delete(object id);

        void Delete(TEntity entityToDelete);

        void Update(TEntity entityToUpdate);
    }
}
