namespace Template.Data.Migrations
{
    using Template.Data.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Template.Data.TemplateContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Template.Data.TemplateContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.

            context.Logs.AddOrUpdate(
                l => l.Id,
                new Log4Net { Id = 1, Date = DateTime.Now, Thread = "24", Level = "INFO", Logger = "Test Logger", Message = "Test Message", Exception = "Test Exception" }
            );

        }
    }
}
