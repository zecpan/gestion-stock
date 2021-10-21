import { Component } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  selectedArticles = new Set<Article>();

  constructor(public articleService: ArticleService) {}

  remove() {
    console.log('remove');
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.clear();
  }

  toggle(a: Article) {
    console.log('toggle', a);
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}
