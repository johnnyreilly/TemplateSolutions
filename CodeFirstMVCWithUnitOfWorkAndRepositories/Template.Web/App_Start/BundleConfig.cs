using System.Web;
using System.Web.Optimization;

namespace Template.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/css/app").Include("~/content/site.css"));

            bundles.Add(new ScriptBundle("~/js/app").Include(

                // 3rd party libraries
                "~/scripts/jquery-{version}.js"//,
                //"~/scripts/angular.js",
                //"~/scripts/angular-route.js",
                //"~/scripts/angular-animate.js",
                //"~/scripts/angular-ui/ui-bootstrap-tpls.js",
                //
                //// App files
                //"~/js/app.js")
                //
                //.IncludeDirectory("~/js/controllers", "*.js", false)
                //.IncludeDirectory("~/js/services", "*.js", false)
                ));
        }
    }
}
