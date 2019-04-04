import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './Component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducersMap} from './ngrx';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '~/environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import { OauthComponent } from './Component/oauth/oauth.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OauthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers: metaReducersMap}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
