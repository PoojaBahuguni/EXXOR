import { TestBed } from '@angular/core/testing';

import { GetScrollPositionService } from './get-scroll-position.service';

describe('GetScrollPositionService', () => {
  let service: GetScrollPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetScrollPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
