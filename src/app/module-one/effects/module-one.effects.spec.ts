import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ModuleOneEffects } from './module-one.effects';

describe('ModuleOneEffects', () => {
  let actions$: Observable<any>;
  let effects: ModuleOneEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModuleOneEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ModuleOneEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
