import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasCostsEstimatesOverTimeChartComponent } from './gas-costs-estimates-over-time-chart.component';

describe('GasCostsEstimatesOverTimeChartComponent', () => {
  let component: GasCostsEstimatesOverTimeChartComponent;
  let fixture: ComponentFixture<GasCostsEstimatesOverTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasCostsEstimatesOverTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasCostsEstimatesOverTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
