import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface Article {
  id: number;
  title: string;
  content: string;
}


@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  private apiUrl = `${environment.apiUrl}/articles`;

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}
