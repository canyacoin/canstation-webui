import { TestBed, inject } from '@angular/core/testing';

import { CoinPriceService } from './coin-price.service';

describe('CoinPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinPriceService]
    });
  });

  it('should be created', inject([CoinPriceService], (service: CoinPriceService) => {
    expect(service).toBeTruthy();
  }));
});
