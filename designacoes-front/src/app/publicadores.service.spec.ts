import { TestBed } from '@angular/core/testing';

import { PublicadoresService } from './shared/services/publicadores.service';

describe('PublicadoresService', () => {
  let service: PublicadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
