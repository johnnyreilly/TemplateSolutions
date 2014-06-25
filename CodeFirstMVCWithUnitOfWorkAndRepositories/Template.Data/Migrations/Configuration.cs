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

            context.Users.AddOrUpdate(
                l => l.Id,
                new User { Id = 1, Name = "Developer", UserName = "dev" },
                new User
                {
                    Id = 2,
                    Name = "Arul Aruldas",
                    UserName = "arul.aruldas",
                    Proverbs = new[] {
                        new Proverb { Text = "Every storm starts with drops of rain..." },
                        new Proverb { Text = "Call the class George Clooney" },
                        new Proverb { Text = "Keeping Einsteins picture in the exam hall makes people nervous." },
                        new Proverb { Text = "Who's the best? Developers or testers?  Answer - we carry each other..." },
                        new Proverb { Text = "I have so many problems... which would you like to know?" },
                        new Proverb { Text = "I did not break the build.. it is Microsofts inefficiency" },
                        new Proverb { Text = "Tish: It works on my PC. Arul: Fix it - we are not shipping your PC to the customer!" },
                        new Proverb { Text = "If you write some helpers for me I give go down to a 5" },
                        new Proverb { Text = "Salt is high, fat is high, in 5 years time you won't be able to eat those things" },
                        new Proverb { Text = "True isn't it?" },
                        new Proverb { Text = "I tell you one thing; it is always better to lose an argument than a friend" },
                        new Proverb { Text = "He writes helpers so he calls himself a helper now" },
                        new Proverb { Text = "A small hole can sink the whole ship" },
                        new Proverb { Text = "It is not where you start the race but where you finish" },
                        new Proverb { Text = "The whole ocean is never crossed until you start sailing" },
                        new Proverb { Text = "My handwriting is not bad - I just have my own font" },
                        new Proverb { Text = "You don't always get the right things but you can always get the things right" },
                        new Proverb { Text = "When you're underwater it doesn't matter if it's by one foot or one metre" },
                        new Proverb { Text = "To a frightened man everthing looks like a ghost" },
                        new Proverb { Text = "Women drivers are like stars, you can see them but they can't see you" }
                    }
                },
                new User
                {
                    Id = 3,
                    Name = "John Reilly",
                    Email = "johnny_reilly@hotmail.com",
                    UserName = "john.reilly",
                    Proverbs = new[] {
                        new Proverb { Text = "Ive got to join Marc's back end up with my front end. (a JR quote)" }
                    }
                },
                new User
                {
                    Id = 4,
                    Name = "Gemma Ozbek",
                    UserName = "gemma.ozbek",
                    Proverbs = new[] {
                        new Proverb { Text = "I've joined I.T., I've turned 30, life's boring, I feel like Bridget Jones, right, give me them donugts, lets get this over and done with (a Gemma Oz quote)" }
                    }
                },
                new User
                {
                    Id = 5,
                    Name = "Marc Talary",
                    UserName = "marc.talary",
                    Proverbs = new[] {
                        new Proverb { Text = "I am band c because I see everything (Marc T speaking about Arul)" }
                    }
                },
                new User
                {
                    Id = 6,
                    Name = "Pauline Davis",
                    UserName = "pauline.davis",
                    Proverbs = new[] {
                        new Proverb { Text = "Have you still got it up Marc and can I see it? Pauline enquiring about Five Guys webpage" }
                    }
                }
            );

        }
    }
}
