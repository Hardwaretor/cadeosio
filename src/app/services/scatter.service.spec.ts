import { TestBed } from '@angular/core/testing';

import { ScatterJSService } from './scatter.service';

describe('ScatterJSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScatterJSService = TestBed.get(ScatterJSService);
    expect(service).toBeTruthy();
  });
});
