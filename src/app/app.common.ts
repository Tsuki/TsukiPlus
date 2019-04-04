import {AppComponent} from '~/app/app.component';
import {HomeComponent} from '~/app/Component/home/home.component';
import {OAuthComponent} from '~/app/Component/oauth/oauth.component';
import {ModuleWithProviders, Type} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '~/app/app-routing.module';
import {StoreModule} from '@ngrx/store';
import {metaReducersMap, reducers} from '~/app/ngrx';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '~/environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from '~/app/app.effects';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export const commonDeclarations: Array<Type<any> | any[]> = [
  AppComponent,
  HomeComponent,
  OAuthComponent,
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const commonImport: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  BrowserModule,
  AppRoutingModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  StoreModule.forRoot(reducers, {metaReducers: metaReducersMap}),
  StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  StoreRouterConnectingModule.forRoot(),
  EffectsModule.forRoot([AppEffects]),
];
