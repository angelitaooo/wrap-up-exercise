import { Injectable } from '@angular/core';

@Injectable()
export class VatService {

  constructor() { }

  getVatForArticle(value: number, vat: number) {
    const result = value + value * (vat / 100);

    return result;
  }

}
