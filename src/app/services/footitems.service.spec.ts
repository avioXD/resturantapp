import { TestBed } from '@angular/core/testing';

import { FootitemsService } from './footitems.service';

describe('FootitemsService', () => {
  let service: FootitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
