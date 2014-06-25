using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Template.Data.Interfaces;


namespace Template.Data.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        internal readonly TemplateContext context;
        internal readonly DbSet<TEntity> dbSet;

        public GenericRepository(TemplateContext context)
        {
            this.context = context;
            this.dbSet = context.Set<TEntity>();
        }

        public virtual ICollection<TEntity> GetAll()
        {
            return dbSet.ToList();
        }

        public virtual TEntity GetById(object id)
        {
            return dbSet.Find(id);
        }

        public virtual void Insert(TEntity entity)
        {
            dbSet.Add(entity);
        }

        public virtual void Delete(object id)
        {
            var entityToDelete = dbSet.Find(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (context.Entry(entityToDelete).State == EntityState.Detached)
            {
                dbSet.Attach(entityToDelete);
            }
            dbSet.Remove(entityToDelete);
        }

        public virtual void Update(TEntity entityToUpdate)
        {
            dbSet.Attach(entityToUpdate);
            context.Entry(entityToUpdate).State = EntityState.Modified;
        }
    }
}
