import { TestBed, inject } from '@angular/core/testing';

import { KlassenService } from './klassen.service';

describe('KlassenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlassenService]
    });
  });

  it('should be created', inject([KlassenService], (service: KlassenService) => {
    expect(service).toBeTruthy();
  }));
});
