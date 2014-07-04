using Template.Web.Interfaces;
using System.Security.Principal;
using System.Web;

namespace Template.Web.Implementations
{
    public class UserHelper : IUserHelper
    {
        public IPrincipal User
        {
            get { return HttpContext.Current.User; }
        }
    }
}