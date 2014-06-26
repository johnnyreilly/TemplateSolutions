using Template.Data.Models;

namespace Template.Data.Interfaces
{
    public interface ITemplateUnitOfWork
    {
        void Save();

        void Dispose();

        IGenericRepository<Log4Net> Logs { get; }
        IUserRepository Users { get; }
        IProverbRepository Proverbs { get; }
    }
}
