import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { State, Actions } from "../app.store";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  currency = {
    AUD: {
      symbol: 'A$',
      name: 'AUD',
      label: '$ AUD',
      value: 0
    },
    USD: {
      symbol: '$',
      name: 'USD',
      label: '$ USD',
      value: 0
    },
    EUR: {
      symbol: '€',
      name: 'EUR',
      label: '€ EUR',
      value: 0
    }
  };
  selectedCurrency = {};

  currentUser: any = JSON.parse(localStorage.getItem('credentials'));

  constructor(private router: Router, private store: Store<State>) { }

  ngOnInit() {
    this.setCurrency(this.currency.AUD);
  }

  setCurrency(currency) {
    this.selectedCurrency = currency;
    this.store.dispatch({
      type: Actions.CHANGE_CURRENCY,
      payload: { currency }
    });
  }
}
