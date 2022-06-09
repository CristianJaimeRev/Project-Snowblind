import { TestBed } from '@angular/core/testing';

import { ErrorfireService } from './errorfire.service';

describe('ErrorfireService', () => {
  let service: ErrorfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
