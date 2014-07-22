using System.Collections.Generic;
using Template.Data.Models;

namespace Template.Data.CommandQuery.Interfaces
{
    public interface IProverbQuery
    {
        ICollection<Proverb> GetAll();
        Proverb GetById(int id);
        ICollection<Proverb> GetByUserId(int userId);
    }
}
