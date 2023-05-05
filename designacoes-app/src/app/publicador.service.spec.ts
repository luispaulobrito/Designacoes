import { TestBed } from '@angular/core/testing';

import { PublicadorService } from './publicador.service';

describe('PublicadorService', () => {
  let service: PublicadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
