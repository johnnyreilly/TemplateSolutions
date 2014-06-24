using System.Security.Principal;

namespace Template.Web.Interfaces
{
    public interface IUserHelper
    {
        IPrincipal User { get; }
    }
}