import { TestBed } from '@angular/core/testing';

import { MedewerkerService } from './medewerker.service';

describe('MedewerkerService', () => {
  let service: MedewerkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedewerkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
