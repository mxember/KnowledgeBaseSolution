import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService, Article } from '../../services/article.service';

@Component({
  selector: 'app-article-view',
  standalone: false,
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.css'
})
export class ArticleViewComponent implements OnInit {
  article: Article | null = null;
  articleId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.articleService.getArticle(id).subscribe(
        data => this.article = data,
        error => console.error("Error loading article:", error)
      );
    }
  }

  editArticle() {
    if (this.article) {
      this.router.navigate(['/edit', this.article.id]);
    }
  }

  deleteArticle(articleId: number): void {
    debugger
    if (!articleId) {
      alert('Invalid article ID.');
      return;
    }

    if (confirm('Are you sure you want to delete this article?')) {
      this.articleService.deleteArticle(articleId).subscribe(() => {
        alert('Article deleted successfully');
        this.router.navigate(['/']);
      }, error => {
        console.error('Error deleting article:', error);
        alert('Failed to delete the article.');
      });
    }
  }
}
