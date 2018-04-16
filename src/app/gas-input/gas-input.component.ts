import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { isNumber } from 'util';

const GWEI = 1000000000;

@Component({
  selector: 'app-gas-input',
  templateUrl: './gas-input.component.html',
  styleUrls: ['./gas-input.component.css']
})
export class GasInputComponent implements OnInit {
  @Output() gasChange: EventEmitter<number> = new EventEmitter<number>();

  gasLimit: string = '21,000';
  gasInGwei: number;

  constructor() { }

  ngOnInit() {
    this.updateGasLimi('21,000');
  }

  updateGasLimi(gasLimit = '0') {
    this.gasLimit = Number(gasLimit.replace(/,/g, '')) > 0 ? gasLimit : this.gasLimit ;
    if (Number(this.gasLimit) < 0) {
      this.gasLimit = Number(this.gasLimit) + '';
    }
    this.convertNumToCommaSep();
    this.gasToGwei();
  }

  convertNumToCommaSep(): void {
    let gas = this.gasLimit ? Number(this.gasLimit.replace(/,/g, '')) : 0;
    if (!isNaN(gas) && gas < 0) {
      gas = Math.abs(gas);
    }
    this.gasLimit = !isNaN(gas) ? Number(gas).toLocaleString() : '';
  }

  gasToGwei(): void {
    const gas = this.gasLimit ? Number(this.gasLimit.replace(/,/g, '')) : 0;
    this.gasInGwei = !isNaN(gas) ? gas / GWEI : 0;
    this.gasChange.emit(this.gasInGwei);
  }

}
