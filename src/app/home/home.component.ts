import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from "@ngrx/store";
import { State, Actions } from "../app.store";
import { GasApiService } from '../gas-api.service';
import { CoinPriceService } from '../coin-price.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  // currentUser: any = JSON.parse(localStorage.getItem('credentials'));
  estimates = {};
  estimatesKeys = [];
  gasInGwei: number;
  currency: {
    name: 'AUD',
    symbol: 'A$'
  };
  coinPrices: any = {
    ETH: {
      AUD: 531.96
    }
  };

  constructor(
    private gasService: GasApiService,
    private coinPriceService: CoinPriceService,
    private store: Store<State>) {
  }

  ngOnInit() {
    this.loadGasEstimates();
    this.loadCoinPrices();
    
    const EVERY_30_SEC = 30 * 1000;
    setInterval(() => this.loadGasEstimates(), EVERY_30_SEC);

    this.store.select('app').subscribe(appState => {
      console.log('filters (currency): ', appState.filters.currency);
      this.currency = appState.filters.currency;
    });
  }

  ngOnChanges() {
  }

  setGasInGwei(val) {
    console.log('gas change: ', val);
    this.gasInGwei = val;
  }

  getGasInGwei(): number {
    return this.gasInGwei;
  }

  async loadGasEstimates() {
    this.estimates = await this.gasService.getGasEstimates();
    delete this.estimates['Fastest']; // no need to display fastest, mostly equals to fast

    this.estimatesKeys = Object.keys(this.estimates);    
  }

  async loadCoinPrices() {
    this.coinPrices = await this.coinPriceService.getCoinPrice();
  }
}
