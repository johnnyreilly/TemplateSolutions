using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HotTowel.Startup))]
namespace HotTowel
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
