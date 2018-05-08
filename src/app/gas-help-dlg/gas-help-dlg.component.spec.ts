import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasHelpDlgComponent } from './gas-help-dlg.component';

describe('GasHelpDlgComponent', () => {
  let component: GasHelpDlgComponent;
  let fixture: ComponentFixture<GasHelpDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasHelpDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasHelpDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
