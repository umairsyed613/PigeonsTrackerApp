import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { customPageTransition } from './animations/page-transition';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CreateTranslateLoader } from './functions/TranslateLoader';
import { MyAppState } from './app.global';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';

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
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence()],
  providers: [MyAppState, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },],
  bootstrap: [AppComponent],
})
export class AppModule {
}
