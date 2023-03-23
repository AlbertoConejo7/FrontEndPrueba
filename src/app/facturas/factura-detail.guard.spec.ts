import { TestBed } from '@angular/core/testing';

import { FacturaDetailGuard } from './factura-detail.guard';

describe('FacturaDetailGuard', () => {
  let guard: FacturaDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FacturaDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
