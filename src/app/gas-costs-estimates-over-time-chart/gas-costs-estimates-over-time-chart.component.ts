import { Component, OnInit, Input } from '@angular/core';
import { GasApiService } from '../gas-api.service';

@Component({
  selector: 'app-gas-costs-estimates-over-time-chart',
  templateUrl: './gas-costs-estimates-over-time-chart.component.html',
  styleUrls: ['./gas-costs-estimates-over-time-chart.component.css']
})
export class GasCostsEstimatesOverTimeChartComponent implements OnInit {
  @Input() estimates = [];

  index = 1;
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartOptions: any = {
    responsive: false,
    scales: {
      yAxes: [{ scaleLabel: { display: true, labelString: 'Gas Estimated Price (Gwei)' } }],
      xAxes: [{ scaleLabel: { display: true, labelString: 'Time (Dynamic every a few seconds)' } }],
    }
  };
  
  public lineChartColors: Array<any> = [];

  constructor(private gasService: GasApiService) { }

  ngOnInit() { }

  ngOnChanges() {
    this.updatePriceToWaitTimeChartData(this.estimates);
  }

  updatePriceToWaitTimeChartData(estimates: any[]) {
    this.lineChartLabels = [].concat(this.lineChartLabels, [new Date().toLocaleTimeString()]);

    if (this.lineChartData.length === 0) {
      return estimates.map(item => this.lineChartData.push({ data: [item.totalCostPerGwei], label: item.type }));
    }

    let index = 0;
    estimates.map(item => this.lineChartData[index++].data.push(item.totalCostPerGwei));

    this.limitChartData(100);
  }

  // keep the chart within 100 readings
  limitChartData(sliceLimit) {    
    if (this.lineChartLabels.length > sliceLimit) {
      this.lineChartLabels = this.lineChartLabels.slice(this.lineChartLabels.length - sliceLimit);

      for (let i = 0; i < 3; i++) {
        let chartData = this.lineChartData[i].data;
        chartData = chartData.slice(chartData.length - 100);
      }
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
