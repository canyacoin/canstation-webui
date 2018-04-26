import { Component, OnInit, Input, OnChanges } from '@angular/core';

const GWEI_UNIT = 1000000000;

@Component({
  selector: 'app-gas-costs',
  templateUrl: './gas-costs.component.html',
  styleUrls: ['./gas-costs.component.css']
})
export class GasCostsComponent implements OnInit, OnChanges {
  @Input() gasInGwei = 0;
  @Input() costPerGwei = 0;
  @Input() widgetLabel: string;
  @Input() currency: any;
  @Input() coinPrices: any;

  costsInFiat: number;
  costsInGWei: number;
  formattedCostPerGwei: number;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.calcCostsInFiat();
  }

  getCostsInGWei(): number {
    if (isNaN(this.gasInGwei) || isNaN(this.costPerGwei)) {
      return this.costsInGWei = 0;
    }

    this.costsInGWei = this.gasInGwei * this.costPerGwei;
    this.formattedCostPerGwei = Number(parseFloat(this.costPerGwei + '').toFixed(2)); // Math.ceil(this.costPerGwei);
    return !isNaN(this.costsInGWei) ? Number(parseFloat(this.costsInGWei + '').toFixed(6)) : 0;
  }

  calcCostsInFiat(): number {
    return this.costsInFiat = Number(parseFloat((this.getCostsInGWei() * this.coinPrices.ETH[this.currency.name]) + '').toFixed(6));
  }

  formatCommaSepNum(val: number): string {
    return val ? val.toLocaleString('en-EN', { maximumFractionDigits: 6 }) : '0';
  }
}
