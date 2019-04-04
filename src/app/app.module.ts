import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {commonDeclarations, commonImport} from '~/app/app.common';


@NgModule({
  declarations: [...commonDeclarations],
  imports: [
    ...commonImport,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
