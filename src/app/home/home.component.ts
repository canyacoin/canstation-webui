import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GasApiService } from '../gas-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // currentUser: any = JSON.parse(localStorage.getItem('credentials'));
  estimates: any[] = [];
  gasInGwei: number;

  // TODO:: Load from external API
  currencyConversions: any = {
    eth: {
      usd: 374
    }
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private gasService: GasApiService) {
    this.loadGasEstimates();
  }

  ngOnInit() {
    const EVERY_30_SEC = 30 * 1000;
    setInterval(() => this.loadGasEstimates(), EVERY_30_SEC);
  }

  ngAfterViewInit() {
    // this.activatedRoute.params.subscribe((params) => {
    //   PARAM? = params['query'] ? params['query'] : '';
    // });
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
    console.log('estimates: ', this.estimates);
  }
}
