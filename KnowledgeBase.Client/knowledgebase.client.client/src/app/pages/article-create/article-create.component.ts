import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService, Article } from '../../services/article.service';

@Component({
  selector: 'app-article-create',
  standalone: false,
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css'
})
export class ArticleCreateComponent { 
article: Article = {
  id: 0,
  title: '',
  content: '',
  createdAt: new Date().toISOString()
};

  constructor(private articleService: ArticleService, private router: Router) { }

  createArticle(): void {
    if (!this.article.title.trim() || !this.article.content.trim()) {
      alert('Title and content are required.');
      return;
    }

    this.articleService.createArticle(this.article).subscribe({
      next: () => {
        alert('Article create successfully!');
        this.router.navigate(['/']);
      }, error: (error) => {
        console.error('Error creating article:', error);
        alert('Failed to create this article.');
      }
    });
  }

}
