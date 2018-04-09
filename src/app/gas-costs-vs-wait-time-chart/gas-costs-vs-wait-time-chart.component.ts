import { Component, OnInit } from '@angular/core';
import { GasApiService } from '../gas-api.service';

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
    responsive: false,
    scales: {
      yAxes: [{ scaleLabel: { display: true, labelString: 'Expected Wait Time (minutes)' } }],
      xAxes: [{ scaleLabel: { display: true, labelString: 'Gas Price (Gwei)' } }],
    }
  };

  constructor(private gasService: GasApiService) { }

  ngOnInit() {
    const EVERY_60_SEC = 1000 * 60;
    this.loadPriceToWaitTimeData();
    setInterval(() => this.loadPriceToWaitTimeData(), EVERY_60_SEC);
  }

  async loadPriceToWaitTimeData() {
    const pTable = await this.gasService.getPredictTable();
    const label = [];
    const data = [];

    pTable.map(item => {
      // Ignore records with same waitTime.
      // Ex: all gasPrice > 1 Gwei will produce a waitTime of 0.48 so no need to display them to make the chart clear.
      if (data.indexOf(item.expectedTime) === -1) {
        data.push(item.expectedTime);
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
