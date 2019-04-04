import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {commonDeclarations, commonImport} from './app.common';
import {HttpClientModule} from '@angular/common/http';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';


@NgModule({
  declarations: [...commonDeclarations],
  imports: [
    ...commonImport,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
