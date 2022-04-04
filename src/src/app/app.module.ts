import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { customPageTransition } from './animations/page-transition';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CreateTranslateLoader } from './functions/TranslateLoader';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule ,BrowserModule, IonicModule.forRoot({ navAnimation: customPageTransition }),
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (CreateTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
