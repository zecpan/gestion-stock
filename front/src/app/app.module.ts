import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ArticleService } from './services/article.service';
import { HttpArticleService } from './services/http-article.service';
import { NotFoundComponent } from './routes/not-found/not-found.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: ArticleService, useClass: HttpArticleService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
