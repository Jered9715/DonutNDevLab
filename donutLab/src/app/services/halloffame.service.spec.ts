import { TestBed } from '@angular/core/testing';

import { HalloffameService } from './halloffame.service';

describe('HalloffameService', () => {
  let service: HalloffameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalloffameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
