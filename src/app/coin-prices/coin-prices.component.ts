import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-coin-prices',
  templateUrl: './coin-prices.component.html',
  styleUrls: ['./coin-prices.component.css']
})
export class CoinPricesComponent implements OnInit, OnChanges {
  @Input() coinPrices = {};
  @Input() currency;

  coins = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    this.coins = Object.keys(this.coinPrices);
    console.log('coinPrices: ', this.coins);
  }

}
