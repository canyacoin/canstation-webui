import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const URL = environment.coinPrices.url;

@Injectable()
export class CoinPriceService {

  constructor() { }

  /**
  Sample output
  {
    "CAN": {
      "AUD": 0.2543,
      "USD": 0.1977,
      "EUR": 0.1598
    },
    "ETH": {
      "AUD": 531.96,
      "USD": 413.41,
      "EUR": 334.31
    }
  }
  */
  async getCoinPrice(): Promise<any> {
    return await fetch(URL.coinPrice)
      .then(response => response.json())
      .catch(err => console.log('Err, getCoinPrice: ', err));
  }
}
