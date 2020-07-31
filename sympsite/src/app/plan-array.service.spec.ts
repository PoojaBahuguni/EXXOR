import { TestBed } from '@angular/core/testing';

import { PlanArrayService } from './plan-array.service';

describe('PlanArrayService', () => {
  let service: PlanArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
