import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {Angulartics2Module} from 'angulartics2';
import {AngularFireModule, FirebaseOptionsToken} from '@angular/fire';
import {HighlightModule} from 'ngx-highlightjs';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {firebaseKey} from './firebase.config';

import typescript from 'highlight.js/lib/languages/typescript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
import {MatPagesModule} from '@angular-material-extensions/pages';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MarkdownModule} from 'ngx-markdown';
import { defaultAuthFirebaseUIConfig } from 'ngx-auth-firebaseui/module/interfaces/config.interface';
import { ExchangesComponent } from './exchanges/exchanges.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

export function firebaseAppNameFactory() {
  return `cadeosio`;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ExchangesComponent
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'ngx-auth-firebaseui'}),
    Angulartics2Module.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp(firebaseKey),
    NgxAuthFirebaseUIModule.forRoot(firebaseKey, firebaseAppNameFactory,
      {
        enableFirestoreSync: true,
        toastMessageOnAuthSuccess: true,
        toastMessageOnAuthError: true,
        authGuardFallbackURL: 'examples/logged-out',
        authGuardLoggedInURL: 'examples/logged-in',
      }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    MarkdownModule.forRoot({loader: HttpClient}),
    MatPagesModule.forRoot(),
    ClipboardModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule,
    HomeModule,
    NgxAuthFirebaseUIModule.forRoot(firebaseKey)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
