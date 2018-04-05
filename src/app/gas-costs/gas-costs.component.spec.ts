import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasCostsComponent } from './gas-costs.component';

describe('GasCostsComponent', () => {
  let component: GasCostsComponent;
  let fixture: ComponentFixture<GasCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
