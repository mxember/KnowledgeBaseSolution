using Humanizer;
using KnowledgeBase.Server.Data;
using KnowledgeBase.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace KnowledgeBase.Server.Controllers
{
    [ApiController]
    [Route("api/articles")]
    public class ArticlesController: ControllerBase
    {
        private readonly AppDbContext _context;

        public ArticlesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            return await _context.Articles.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(int id)
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null)
            {
                return NotFound();
            }

            return article;
        }

        [HttpPost]
        [Consumes("application/json")]
        public async Task<IActionResult> CreateArticle([FromBody] Article article)
        {
            if (article == null)
            {
                return BadRequest("Request body is missing");
            }
            if (string.IsNullOrWhiteSpace(article.Title) || string.IsNullOrWhiteSpace(article.Content))
            {
                return BadRequest("Title and content are required");
            }

            article.CreatedAt = DateTime.UtcNow;

            try
            {
                _context.Articles.Add(article);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetArticle), new { id = article.Id }, article);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occured while saving the article: " + ex.Message);
            }
            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateArticle(int id, Article article)
        {
            if (id != article.Id)
            {
                return BadRequest();
            }

            _context.Entry(article).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(article);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Articles.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null)
            {
                return NotFound();
            }

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
