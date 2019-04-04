import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './Component/home/home.component';
import {StoreModule} from '@ngrx/store';
import {metaReducersMap, reducers} from './ngrx';
import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';
import { OauthComponent } from './Component/oauth/oauth.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OauthComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers: metaReducersMap})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
