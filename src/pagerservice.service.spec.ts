import { TestBed } from '@angular/core/testing';

import { PagerserviceService } from './pagerservice.service';

describe('PagerserviceService', () => {
  let service: PagerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
