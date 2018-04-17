// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  gasStation: {
    waitToRefetchInSec: 60,
    url: {
      priceEstimate: 'http://localhost:5000/canstation-46066/us-central1/api/gas-estimate/average', // 'https://ethgasstation.info/json/ethgasAPI.json',
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
