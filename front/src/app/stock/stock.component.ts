import { Component } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  articles: Article[] = [
    { name: 'Tournevis', price: 1.23, qty: 234 },
    { name: 'Pelle', price: 2.4, qty: 120 },
    { name: 'Pince', price: 3, qty: 5 },
    { name: 'Marteau', price: 5, qty: 1200 },
  ];
}
