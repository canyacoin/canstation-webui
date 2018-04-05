import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasInputComponent } from './gas-input.component';

describe('GasInputComponent', () => {
  let component: GasInputComponent;
  let fixture: ComponentFixture<GasInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
