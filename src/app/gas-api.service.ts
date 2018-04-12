import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const URL = environment.gasStation.url;

@Injectable()
export class GasApiService {

  constructor() { }
  /*
  {
    "Fastest": {
      "totalCostPerGwei": 12,
      "totalWaitTimeInMin": 1.5,
      "numRecords": 3,
      "avgCostPerGwei": "4.000",
      "avgWaitTimeInMin": "0.500",
      "label": "Fastest < 1m",
      "type": "Fastest"
    },
    "Fast": {
      "totalCostPerGwei": 3,
      "totalWaitTimeInMin": 1.5,
      "numRecords": 3,
      "avgCostPerGwei": "1.000",
      "avgWaitTimeInMin": "0.500",
      "label": "Fast < 1m",
      "type": "Fast"
    },
    "Standard": {
      "totalCostPerGwei": 0.8999999999999999,
      "totalWaitTimeInMin": 159,
      "numRecords": 3,
      "avgCostPerGwei": "0.300",
      "avgWaitTimeInMin": "53.000",
      "label": "Standard < 53m",
      "type": "Standard"
    },
    "Safelow": {
      "totalCostPerGwei": 0.6000000000000001,
      "totalWaitTimeInMin": 383.4,
      "numRecords": 3,
      "avgCostPerGwei": "0.200",
      "avgWaitTimeInMin": "127.800",
      "label": "Safelow < 128m",
      "type": "Safelow"
    }
  }
  */
  async getGasEstimates(): Promise<any[]> {
    return await fetch(URL.priceEstimate)
      .then(response => response.json());
    // .catch(err => console.log('Error, getGasEstimates: ', err));
  }

  async getPredictTable(): Promise<any[]> {
    return await fetch(URL.predictTable)
      .then(response => response.json());
    // .catch(err => console.log('Error, getPredictTable: ', err));
  }
}
