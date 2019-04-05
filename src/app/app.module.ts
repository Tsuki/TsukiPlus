import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {commonDeclarations, commonImport} from '~/app/app.common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [...commonDeclarations],
  imports: [
    ...commonImport,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

