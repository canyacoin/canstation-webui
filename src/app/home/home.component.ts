import { Component, OnInit, OnChanges, AfterViewInit, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Actions } from '../app.store';
import { GasApiService } from '../gas-api.service';
import { CoinPriceService } from '../coin-price.service';
import { environment } from '../../environments/environment';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { GasHelpDlgComponent } from '../gas-help-dlg/gas-help-dlg.component';
import { Subject } from 'rxjs/Subject';

declare var BancorConvertWidget: any;
declare var createCards: any; // = window['createCards'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {

  // currentUser: any = JSON.parse(localStorage.getItem('credentials'));
  displayFlashMessage = true;
  estimates: any = {};
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
  _closeDialog$ = new Subject<void>();


  constructor(
    private gasService: GasApiService,
    private coinPriceService: CoinPriceService,
    private store: Store<State>,
    private modalDialogService: ModalDialogService,
    private viewContainer: ViewContainerRef) {
  }

  ngAfterViewInit() {
    createCards('CanStation');
    BancorConvertWidget.init({
      'type': '1',
      'baseCurrencyId': '5a6f61ece3de16000123763a',
      'pairCurrencyId': '5937d635231e97001f744267',
      'primaryColor': '#00BFFF',
      'primaryColorHover': '55DAFB'
    });
  }

  ngOnInit() {

    this.loadGasEstimates();
    this.loadCoinPrices();

    const EVERY_X_SEC = Number(environment.gasStation.waitToRefetchInSec) * 1000;
    setInterval(() => this.loadGasEstimates(), EVERY_X_SEC);

    this.store.select('app').subscribe(appState => this.currency = appState.filters.currency);
    this.displayFlashMessage = localStorage.getItem('welcomeFlashMsg') === null;
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

    Object.values(estimateObj).forEach(est => {
      const minute = Math.ceil(est.avgWaitTimeInMin) > 1 ? ' Minutes' : ' Minute';
      est.label = est.label.replace('m', minute);
    });

    this.estimates = estimateObj;
  }

  async loadCoinPrices() {
    this.coinPrices = await this.coinPriceService.getCoinPrice();
  }

  hideFlashMessage() {
    this.displayFlashMessage = false;
    localStorage.setItem('welcomeFlashMsg', 'false');
  }

  openHelpDlg() {
    this.modalDialogService.openDialog(this.viewContainer, {
      childComponent: GasHelpDlgComponent,
      closeDialogSubject: this._closeDialog$,
      settings: {
        headerClass: 'hidden'
      }
    });
  }
}
