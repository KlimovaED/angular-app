import { TestBed } from '@angular/core/testing';

import { BeautyLoggerService } from './beauty-logger.service';

describe('BeautyLoggerService', () => {
  let service: BeautyLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautyLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
