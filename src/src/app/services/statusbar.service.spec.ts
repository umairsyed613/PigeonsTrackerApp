import { TestBed } from '@angular/core/testing';

import { StatusbarService } from './statusbar.service';

describe('StatusbarService', () => {
  let service: StatusbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
