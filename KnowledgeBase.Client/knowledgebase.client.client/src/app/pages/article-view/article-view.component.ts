import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-view',
  standalone: false,
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.css'
})
export class ArticleViewComponent implements OnInit {
  articleId!: number;
  article: any;

  articles = [
    { id: 1, title: "Getting Started with the Knowledge Base", content: "This article helps you navigate..." },
    { id: 2, title: "How to Add Articles", content: "You can add articles using the editor..." },
    { id: 3, title: "Managing Your Knowledge Base", content: "Keep your articles organized..." }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
      this.article = this.articles.find(a => a.id === this.articleId);
    });
  }
}
