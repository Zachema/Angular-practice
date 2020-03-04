import { TestBed } from '@angular/core/testing';

import { ThreeAlphaService } from './three-alpha.service';

describe('ThreeAlphaService', () => {
  let service: ThreeAlphaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreeAlphaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
