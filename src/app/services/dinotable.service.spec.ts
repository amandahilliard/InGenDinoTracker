import { TestBed } from '@angular/core/testing';

import { DinotableService } from './dinotable.service';

describe('DinotableService', () => {
  let service: DinotableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinotableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
