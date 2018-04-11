import { Injectable } from '@angular/core';

const URL = {
  priceEstimate: 'http://localhost:5000/canyagasstation-a98a8/us-central1/api/gas-estimate/average', //'https://ethgasstation.info/json/ethgasAPI.json',
  predictTable: 'https://ethgasstation.info/json/predictTable.json'
}

@Injectable()
export class GasApiService {

  constructor() { }
//   {
//     "fastest": {
//         "totalCostPerGwei": 78,
//         "totalWaitTimeInMin": 6,
//         "numRecords": 12,
//         "avgCostPerGwei": "6.500",
//         "avgWaitTimeInMin": "0.500"
//     },
//     "fast": {
//         "totalCostPerGwei": 78,
//         "totalWaitTimeInMin": 6,
//         "numRecords": 12,
//         "avgCostPerGwei": "6.500",
//         "avgWaitTimeInMin": "0.500"
//     },
//     "standard": {
//         "totalCostPerGwei": 78,
//         "totalWaitTimeInMin": 6,
//         "numRecords": 12,
//         "avgCostPerGwei": "6.500",
//         "avgWaitTimeInMin": "0.500"
//     },
//     "safelow": {
//         "totalCostPerGwei": 78,
//         "totalWaitTimeInMin": 6,
//         "numRecords": 12,
//         "avgCostPerGwei": "6.500",
//         "avgWaitTimeInMin": "0.500"
//     }
// }
  async getGasEstimates(): Promise<any[]> {
    return await fetch(URL.priceEstimate)
      .then(response => response.json());
      // .then(res => [{
      //   name: `Fast (<${Math.ceil(res.avgWaitTimeInMin)}m)`,
      //   costPerGwei: res.avgCostPerGwei,
      //   waitTimeInMin: res.avgWaitTimeInMin
      // },
      // {
      //   name: `Standard (<${Math.ceil(res.avgWait)}m)`,
      //   costPerGwei: Number(res.average) / Number(res.average_calc),
      //   waitTimeInMin: res.avgWait
      // },
      // {
      //   name: `SafeLow (<${Math.ceil(res.safeLowWait)}m)`,
      //   costPerGwei: Number(res.safeLow) / Number(res.safelow_calc),
      //   waitTimeInMin: res.safeLowWait
      // }]);
    // .catch(err => console.log('Error, getGasEstimates: ', err));
  }

  async getPredictTable(): Promise<any[]> {
    return await fetch(URL.predictTable)
      .then(response => response.json());
    // .catch(err => console.log('Error, getPredictTable: ', err));
  }
}
