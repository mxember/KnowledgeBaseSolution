import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-view',
  standalone: false,
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.css'
})
export class ArticleViewComponent implements OnInit {
  articleId!: number;
  article: any;

  //articles = [
  //  { id: 1, title: "Getting Started with the Knowledge Base", content: "This article helps you navigate..." },
  //  { id: 2, title: "How to Add Articles", content: "You can add articles using the editor..." },
  //  { id: 3, title: "Managing Your Knowledge Base", content: "Keep your articles organized..." }
  //];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = +params['id'];
      this.articleService.getArticle(articleId).subscribe(
        (data) => this.article = data,
        () => this.article = null
      );
    });
  }
}
