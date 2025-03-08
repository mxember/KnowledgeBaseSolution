using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace KnowledgeBase.Server.Controllers
{
    [ApiController]
    [Route("api/articles")]
    public class ArticlesController: ControllerBase
    {
        private static readonly List<Article> Articles = new()
        {
            new Article { Id = 1, Title = "Getting Started", Content = "This is an introduction"},
            new Article {Id = 2, Title ="How to Add Articles", Content="Use the editor to add content."}
        };

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Articles);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var article = Articles.FirstOrDefault(a => a.Id == id);
            return article != null ? Ok(article) : NotFound();
        }
    }

    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
