import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasCostsVsWaitTimeChartComponent } from './gas-costs-vs-wait-time-chart.component';

describe('GasCostsVsWaitTimeChartComponent', () => {
  let component: GasCostsVsWaitTimeChartComponent;
  let fixture: ComponentFixture<GasCostsVsWaitTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasCostsVsWaitTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasCostsVsWaitTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
