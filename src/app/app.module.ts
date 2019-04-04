import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {commonDeclarations, commonImport} from '~/app/app.common';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const PrimeNgModule = [
  ButtonModule,
  AutoCompleteModule,
];

@NgModule({
  declarations: [...commonDeclarations],
  imports: [
    ...commonImport,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

