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
}
