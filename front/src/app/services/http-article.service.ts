import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http-article service');
    this.refresh();
  }
  refresh() {
    this.http.get('http://localhost:3000/api/articles');
  }
}
