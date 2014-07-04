using System.Web;
using System.Web.Optimization;

namespace HotTowel
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/app").Include(

                // Vendor Scripts 
                "~/scripts/jquery-{version}.js",
                "~/scripts/angular.js",
                "~/scripts/angular-animate.js",
                "~/scripts/angular-route.js",
                "~/scripts/angular-sanitize.js",
                "~/scripts/bootstrap.js",
                "~/scripts/toastr.js",
                "~/scripts/moment.js",
                "~/scripts/ui-bootstrap-tpls-{version}.js",
                "~/scripts/spin.js",

                // Bootstrapping
                "~/app/app.js",
                "~/app/config.js",
                "~/app/config.exceptionHandler.js",
                "~/app/config.route.js",

                // common Modules
                "~/app/common/common.js",
                "~/app/common/logger.js",
                "~/app/common/spinner.js",

                // common.bootstrap Modules
                "~/app/common/bootstrap/bootstrap.dialog.js",

                // app
                "~/app/admin/admin.js",
                "~/app/dashboard/dashboard.js",
                "~/app/layout/shell.js",
                "~/app/layout/sidebar.js",

                // app Services 
                "~/app/services/datacontext.js",
                "~/app/services/directives.js"
                        
            ));

            bundles.Add(new StyleBundle("~/css").Include(
                "~/content/ie10mobile.css",
                "~/content/bootstrap.min.css",
                "~/content/font-awesome.min.css",
                "~/content/toastr.css",
                "~/content/customtheme.css",
                "~/content/styles.css"
            ));
        }
    }
}
