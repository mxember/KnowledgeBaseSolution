import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService, Article } from '../../services/article.service';

@Component({
  selector: 'app-article-editor',
  standalone: false,
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.css'
})
export class ArticleEditorComponent implements OnInit{
  article: Article = { id: 0, title: '', content: '', createdAt: new Date().toISOString() };
  isNew: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id) && id !== 0) {
      this.articleService.getArticle(id).subscribe(
        (data: Article) => this.article = data,
        (error:any) => console.error("Error loading article:", error)
      );
    } else {
      this.isNew = true;
    }
  }

  saveArticle() {
    if (this.isNew) {
      this.articleService.createArticle(this.article).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
    else {
      this.articleService.updateArticle(this.article).subscribe(() => {
        this.router.navigate(['/article', this.article.id]);
      });
    }
  }

  cancel() {
    this.router.navigate(['/article', this.article.id]);
  }
}
