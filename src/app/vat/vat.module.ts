import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VatComponent } from './vat/vat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VatComponent],
  exports: [
    VatComponent
  ]
})
export class VatModule { }
