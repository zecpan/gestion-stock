import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.restore();

  add(article: Article) {
    this.articles.push(article);
    this.save();
  }

  restore(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        { name: 'Tournevis', price: 1.23, qty: 234 },
        { name: 'Pelle', price: 2.4, qty: 120 },
        { name: 'Pince', price: 3, qty: 5 },
        { name: 'Marteau', price: 5, qty: 1200 },
      ];
    }
    return JSON.parse(str);
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
