import { TestBed } from '@angular/core/testing';

import { RacePropertiesOverriderService } from './race-properties-overrider.service';

describe('RacePropertiesOverriderService', () => {
  let service: RacePropertiesOverriderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacePropertiesOverriderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
