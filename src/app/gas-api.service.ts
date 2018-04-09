import { Injectable } from '@angular/core';

@Injectable()
export class GasApiService {

  constructor() { }

  async getGasEstimates(): Promise<any[]> {
    return await fetch('https://ethgasstation.info/json/ethgasAPI.json')
      .then(response => response.json())
      .then(res => [{
        name: `Fast (<${Math.ceil(res.fastWait)}m)`,
        costPerGwei: Number(res.fast) / Number(res.average_calc),
        waitTimeInMin: res.fastWait
      },
      {
        name: `Standard (<${Math.ceil(res.avgWait)}m)`,
        costPerGwei: Number(res.average) / Number(res.average_calc),
        waitTimeInMin: res.avgWait
      },
      {
        name: `SafeLow (<${Math.ceil(res.safeLowWait)}m)`,
        costPerGwei: Number(res.safeLow) / Number(res.safelow_calc),
        waitTimeInMin: res.safeLowWait
      }]);
    // .catch(err => console.log('Error, getGasEstimates: ', err));
  }

  async getPredictTable(): Promise<any[]> {
    return await fetch('https://ethgasstation.info/json/predictTable.json')
      .then(response => response.json());
    // .catch(err => console.log('Error, getPredictTable: ', err));
  }
}
