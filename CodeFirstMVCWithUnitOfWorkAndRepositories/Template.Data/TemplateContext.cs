﻿using Template.Data.Models;
using System;
using System.Data.Entity;

namespace Template.Data
{
    public class TemplateContext : DbContext
    {
        static TemplateContext() 
        {
            // the terrible hack without which code first does not function - http://stackoverflow.com/a/23329890/761388
            // Referenced by Entity Framework team here: https://entityframework.codeplex.com/workitem/1590
            // Detailed explanation here: http://robsneuron.blogspot.co.uk/2013/11/entity-framework-upgrade-to-6.html
            // Logged to the EF team here: https://entityframework.codeplex.com/workitem/2352
            var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
        }

        public DbSet<Log4Net> Logs { get; set; }
    }
}
