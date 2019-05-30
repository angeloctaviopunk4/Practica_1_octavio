import { TestBed } from '@angular/core/testing';

import { Practica1serviceService } from './practica1service.service';

describe('Practica1serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Practica1serviceService = TestBed.get(Practica1serviceService);
    expect(service).toBeTruthy();
  });
});
