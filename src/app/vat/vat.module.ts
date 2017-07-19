import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VatComponent } from './vat/vat.component';
import { VatService } from 'app/vat/vat.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
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
