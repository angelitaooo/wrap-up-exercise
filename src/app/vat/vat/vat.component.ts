import { Component, OnInit, Input } from '@angular/core';

import { VatService } from 'app/vat/vat.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.css']
})
export class VatComponent implements OnInit {

  @Input() vat: number;

  article;
  value = 0;
  result = 0;
  vatResult = 0;

  constructor(
    private vatService: VatService
  ) { }

  ngOnInit() {
  }

  calculateVat() {
    this.result = this.vatService.getVatForArticle(this.value, this.vat);
    this.vatResult = this.vatService.getVat(this.value, this.vat);
  }

}
