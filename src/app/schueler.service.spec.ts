import { TestBed, inject } from '@angular/core/testing';

import { SchuelerService } from './schueler.service';

describe('SchuelerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchuelerService]
    });
  });

  it('should be created', inject([SchuelerService], (service: SchuelerService) => {
    expect(service).toBeTruthy();
  }));
});
