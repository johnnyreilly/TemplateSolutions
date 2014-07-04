using System.Collections.Generic;

namespace Template.Data.Interfaces
{
    public interface IGenericRepository<TEntity>
    {
        ICollection<TEntity> GetAll();

        TEntity GetById(int id);

        void Insert(TEntity entity);

        void Delete(int id);

        void Delete(TEntity entityToDelete);

        void Update(TEntity entityToUpdate);
    }
}
