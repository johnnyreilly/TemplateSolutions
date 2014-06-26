using System.Collections.Generic;
using Template.Data.Models;

namespace Template.Data.Interfaces
{
    public interface IProverbRepository : IGenericRepository<Proverb>
    {
        ICollection<Proverb> GetByUserId(int userId);
    }
}
