import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  {
    path: 'stock',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => m.StockModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
