import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  calculateVat() {
    this.result = this.value + this.value * (this.vat / 100);
  }

}
