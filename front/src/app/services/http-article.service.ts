import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from './article.service';

const url = '/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();

    this.refresh();
    this.save();
  }
  refresh() {
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        this.articles = articles;
        this.save();
      },
      complete: () => {},
      error: (err) => {},
    });
  }

  add(article: Article) {
    super.add(article);
    this.http.post<void>(url, article).subscribe({
      next: () => {
        this.refresh();
      },
      complete: () => {},
      error: (err) => {},
    });
  }

  remove(selectedArticles: Set<Article>) {
    super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    this.http
      .delete<void>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
      })
      .subscribe({
        next: () => {
          this.refresh();
        },
        complete: () => {},
        error: (err) => {},
      });
  }
}
