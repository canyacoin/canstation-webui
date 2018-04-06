import { TestBed, inject } from '@angular/core/testing';

import { GasApiService } from './gas-api.service';

describe('GasApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GasApiService]
    });
  });

  it('should be created', inject([GasApiService], (service: GasApiService) => {
    expect(service).toBeTruthy();
  }));
});
