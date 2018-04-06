import { Component, OnInit, Input, OnChanges } from '@angular/core';

const ETH_PRICE_DOLLAR = 374;

@Component({
  selector: 'app-gas-costs',
  templateUrl: './gas-costs.component.html',
  styleUrls: ['./gas-costs.component.css']
})
export class GasCostsComponent implements OnInit, OnChanges {
  @Input() gasInGwei = 0;
  @Input() costPerGwei = 0;
  @Input() widgetLabel: string;
  @Input() currency = '$';

  costsInFiat: number;
  costsInEth: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.calcCostsInFiat();
  }

  getCostsInEth(): number {
    console.log(this.gasInGwei, this.costPerGwei);
    if (isNaN(this.gasInGwei) || isNaN(this.costPerGwei)) {
      return this.costsInEth = 0;
    }

    this.costsInEth = this.gasInGwei * this.costPerGwei;
    return !isNaN(this.costsInEth) ? Number(parseFloat(this.costsInEth + '').toFixed(6)) : 0;
  }

  calcCostsInFiat(): number {
    return this.costsInFiat = Number(parseFloat((this.getCostsInEth() * ETH_PRICE_DOLLAR) + '').toFixed(6));
  }

  formatCommaSepNum(val: number): string {
    return val ? val.toLocaleString('en-EN', { maximumFractionDigits: 6 }) : '0';
  }
}
