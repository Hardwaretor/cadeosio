import { TestBed } from '@angular/core/testing';

import { Scatter.ServiceService } from './scatter.service.service';

describe('Scatter.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Scatter.ServiceService = TestBed.get(Scatter.ServiceService);
    expect(service).toBeTruthy();
  });
});
