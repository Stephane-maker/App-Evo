import { TestBed } from '@angular/core/testing';

import { InterptorTokenService } from './interptor-token.service';

describe('InterptorTokenService', () => {
  let service: InterptorTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterptorTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
