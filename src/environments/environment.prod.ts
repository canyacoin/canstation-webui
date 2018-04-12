export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCAL5Z5g1F4RIowZh0vp_9D3QsfHN6LqEc',
    authDomain: 'caninvoice-9286f.firebaseapp.com',
    databaseURL: 'https://caninvoice-9286f.firebaseio.com',
    projectId: 'caninvoice-9286f',
    storageBucket: 'caninvoice-9286f.appspot.com',
    messagingSenderId: '313965483789'
  },
  gasStation: {
    waitToRefetchInSec: 60,
    url: {
      priceEstimate: 'https://us-central1-canyagasstation-a98a8.cloudfunctions.net/api/gas-estimate/average',
      predictTable: 'https://ethgasstation.info/json/predictTable.json'
    }
  },
  coinPrices: {
    waitToRefetchInSec: 60,
    url: {
      coinPrice: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=CAN,ETH&tsyms=AUD,USD,EUR'
    }
  }
};
