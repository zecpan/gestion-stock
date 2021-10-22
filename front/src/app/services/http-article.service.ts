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
    console.log('http article service instantiated.');
    this.refresh();
    this.save();
  }
  refresh() {
    console.log('refresh');
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
        this.save();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }

  add(article: Article) {
    super.add(article);
    this.http.post<void>(url, article).subscribe({
      next: () => {
        this.refresh();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
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
        complete: () => {
          console.log('complete');
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
  }
}
