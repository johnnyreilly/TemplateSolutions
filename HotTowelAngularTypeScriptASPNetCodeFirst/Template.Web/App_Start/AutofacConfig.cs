﻿using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using log4net;
using Template.Data;
using Template.Web.Implementations;
using Template.Web.Interfaces;
using Template.Web.Utilities;
using System.Reflection;
using System.Web;
using System.Web.Optimization;
using Template.Data.EntityFramework;

namespace Template.Web
{
    public class AutofacConfig
    {
        public static void RegisterAndBuild()
        {
            var builder = new ContainerBuilder();

            // DbContext
            builder.RegisterType<TemplateContext>().As<TemplateContext>().InstancePerLifetimeScope();

            // Queries / Commands
            builder.RegisterAssemblyTypes(Assembly.Load("Template.Data.CommandQuery"))
                .Where(t => t.Name.EndsWith("Query") || t.Name.EndsWith("Command"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            // Domain Services
            builder.RegisterAssemblyTypes(Assembly.Load("Template.Services"))
                .Where(t => t.Name.EndsWith("Service"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            // Web Project
            var assembly = Assembly.GetExecutingAssembly();
            builder.RegisterControllers(assembly).InstancePerLifetimeScope();
            builder.RegisterApiControllers(assembly).InstancePerLifetimeScope();

            builder.RegisterType<UserHelper>().As<IUserHelper>().InstancePerLifetimeScope();

            // Logger
            builder.Register(c => LoggerHelper.GetLogger()).As<ILog>().InstancePerLifetimeScope();

            builder.RegisterFilterProvider();

            var container = builder.Build();

            // Set the dependency resolver for Web API.
            var webApiResolver = new AutofacWebApiDependencyResolver(container);
            System.Web.Http.GlobalConfiguration.Configuration.DependencyResolver = webApiResolver;

            // Set the dependency resolver for MVC.
            var mvcResolver = new AutofacDependencyResolver(container);
            System.Web.Mvc.DependencyResolver.SetResolver(mvcResolver);
        }
    }
}
