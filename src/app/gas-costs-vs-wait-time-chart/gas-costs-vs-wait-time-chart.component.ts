import { Component, OnInit } from '@angular/core';
import { GasApiService } from '../gas-api.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gas-costs-vs-wait-time-chart',
  templateUrl: './gas-costs-vs-wait-time-chart.component.html',
  styleUrls: ['./gas-costs-vs-wait-time-chart.component.css']
})
export class GasCostsVsWaitTimeChartComponent implements OnInit {

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{ scaleLabel: { display: true, labelString: 'Expected Wait Time (minutes)' } }],
      xAxes: [{ scaleLabel: { display: true, labelString: 'Gas Price (Gwei)' } }],
    }
  };

  constructor(private gasService: GasApiService) { }

  ngOnInit() {
    const EVERY_X_SEC = Number(environment.gasStation.waitToRefetchInSec) * 1000;
    this.loadPriceToWaitTimeData();
    setInterval(() => this.loadPriceToWaitTimeData(), EVERY_X_SEC);
  }

  async loadPriceToWaitTimeData() {
    const pTable = await this.gasService.getPredictTable();
    const label = [];
    const data = [];

    pTable.map(item => {
      let time = item.expectedTime > 100 ? 100 : item.expectedTime;

      // Ignore records with same waitTime.
      // Ex: all gasPrice > 1 Gwei will produce a waitTime of 0.48 so no need to display them to make the chart clear.
      if (data.indexOf(time) === -1) {
        data.push(time);
        label.push(item.gasprice);
      }
    });

    this.lineChartLabels = label;
    this.lineChartData = [{ data, label: 'Gas Price vs Wait Time' }];
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
