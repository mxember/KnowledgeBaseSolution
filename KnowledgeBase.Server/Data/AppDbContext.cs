using Microsoft.EntityFrameworkCore;
using KnowledgeBase.Server.Models;
using KnowledgeBase.Server.Controllers;

namespace KnowledgeBase.Server.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) {}

        public DbSet<Article> Articles { get; set; }
    }
}
