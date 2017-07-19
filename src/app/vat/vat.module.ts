import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VatComponent } from './vat/vat.component';
import { VatService } from 'app/vat/vat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VatComponent],
  exports: [
    VatComponent
  ],
  providers: [
    VatService
  ]
})
export class VatModule { }
