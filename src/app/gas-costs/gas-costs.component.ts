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
  speed = '1';

  costsInFiat: number;
  costsInGWei: number;
  formattedCostPerGwei: number;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.calcCostsInFiat();
    this.formatWidgetLabel();
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
    const costs = Number(parseFloat((this.getCostsInGWei() * this.coinPrices.ETH[this.currency.name]) + '').toFixed(6));
    return this.costsInFiat = Math.round(costs * 100) / 100; // round to only 2 decimal places
  }

  formatCommaSepNum(val: number): string {
    return val ? val.toLocaleString('en-EN', { maximumFractionDigits: 6 }) : '0';
  }

  formatWidgetLabel() {
    const label = this.widgetLabel;
    const index = label.indexOf('<');
    this.speed = index > -1 ? label.substr(index) : this.speed;
    this.widgetLabel = index > -1 ? label.substr(0, label.indexOf('<')) : label;
  }
}
