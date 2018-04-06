import { Injectable } from '@angular/core';

@Injectable()
export class GasApiService {

  constructor() { }

  async getGasEstimates(): any[] {
    let estimates = [];
    try {
      const res = await fetch('https://ethgasstation.info/json/ethgasAPI.json').then(response => response.json());
      console.log('res: ', res);
      estimates = [
        {
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
        },
      ];
    } catch (err) { console.log('Error, getGasEstimates: ', err); }

    return estimates;
  }
}
