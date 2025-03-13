import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}


@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  private apiUrl = `${environment.apiUrl}/articles`;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  updateArticle(article: Article): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${article.id}`, article);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }
}
