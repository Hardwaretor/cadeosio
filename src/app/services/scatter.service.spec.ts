import { TestBed } from '@angular/core/testing';

import { ScatterService } from './scatter.service';

describe('ScatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScatterService = TestBed.get(ScatterService);
    expect(service).toBeTruthy();
  });
});
