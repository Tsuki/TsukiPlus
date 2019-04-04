import {AppComponent} from '~/app/app.component';
import {HomeComponent} from '~/app/Component/home/home.component';
import {OAuthComponent} from '~/app/Component/oauth/oauth.component';
import {ModuleWithProviders, Type} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '~/app/app-routing.module';
import {StoreModule} from '@ngrx/store';
import {metaReducersMap, reducers} from '~/app/ngrx';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '~/environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from '~/app/app.effects';

export const commonDeclarations: Array<Type<any> | any[]> = [
  AppComponent,
  HomeComponent,
  OAuthComponent,
];

export const commonImport: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  BrowserModule,
  AppRoutingModule,
  TranslateModule.forRoot(),
  StoreModule.forRoot(reducers, {metaReducers: metaReducersMap}),
  StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  StoreRouterConnectingModule.forRoot(),
  EffectsModule.forRoot([AppEffects]),
];
