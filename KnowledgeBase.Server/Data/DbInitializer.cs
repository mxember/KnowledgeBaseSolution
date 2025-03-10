using KnowledgeBase.Server.Models;

namespace KnowledgeBase.Server.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            if (context.Articles.Any()) return;

            var articles = new List<Article>
            {
                new Article { Id = 1, Title= "Introduction to Knowledgebase", Content = "This is your first article."},
                new Article { Id = 2, Title = "How to Use the Editor", Content = "This article explains the editor" }
            };

            context.Articles.AddRange(articles);
            context.SaveChanges();
        }
    }
}
