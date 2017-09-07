import { TestBed, inject } from '@angular/core/testing';

import { LehrerService } from './lehrer.service';

describe('LehrerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LehrerService]
    });
  });

  it('should be created', inject([LehrerService], (service: LehrerService) => {
    expect(service).toBeTruthy();
  }));
});
