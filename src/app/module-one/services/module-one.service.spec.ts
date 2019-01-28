import { TestBed } from '@angular/core/testing';

import { ModuleOneService } from './module-one.service';

describe('ModuleOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleOneService = TestBed.get(ModuleOneService);
    expect(service).toBeTruthy();
  });
});
