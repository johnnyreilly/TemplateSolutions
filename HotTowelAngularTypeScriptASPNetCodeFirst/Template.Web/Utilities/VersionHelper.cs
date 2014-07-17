using System;

namespace Template.Web.Utilities
{
    public static class VersionHelper
    {
        /// <summary>
        /// Return the version of the app
        /// </summary>
        public static Version Version
        {
            get { return System.Reflection.Assembly.GetExecutingAssembly().GetName().Version; }
        }
    }
}