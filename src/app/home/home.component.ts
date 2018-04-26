import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Actions } from '../app.store';
import { GasApiService } from '../gas-api.service';
import { CoinPriceService } from '../coin-price.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  // currentUser: any = JSON.parse(localStorage.getItem('credentials'));
  estimates = [];
  gasInGwei: number;
  currency: {
    name: 'USD',
    symbol: '$'
  };
  coinPrices: any = {
    ETH: {
      USD: 430.9
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

    const EVERY_X_SEC = Number(environment.gasStation.waitToRefetchInSec) * 1000;
    setInterval(() => this.loadGasEstimates(), EVERY_X_SEC);

    this.store.select('app').subscribe(appState => this.currency = appState.filters.currency);
  }

  ngOnChanges() { }

  setGasInGwei(val) {
    this.gasInGwei = val;
  }

  getGasInGwei(): number {
    return this.gasInGwei;
  }

  async loadGasEstimates() {
    const estimateObj = await this.gasService.getGasEstimates();
    delete estimateObj['Fastest']; // no need to display fastest, mostly equals to fast

    this.estimates = Object.values(estimateObj).map(est => {
      const minute = est.avgCostPerGwei > 1 ? ' Minute' : ' Minutes';
      est.label = est.label.replace('m', minute);
      return est;
    });
  }

  async loadCoinPrices() {
    this.coinPrices = await this.coinPriceService.getCoinPrice();
  }
}
