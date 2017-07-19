import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VatModule } from 'app/vat/vat.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
