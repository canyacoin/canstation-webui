export const environment = {
  production: true,
  gasStation: {
    waitToRefetchInSec: 60,
    url: {
      priceEstimate: 'https://us-central1-canstation-46066.cloudfunctions.net/api/gas-estimate/average',
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
