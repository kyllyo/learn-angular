import { TestBed } from '@angular/core/testing';

import { DiretivaIfService } from './diretiva-if.service';

describe('DiretivaIfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiretivaIfService = TestBed.get(DiretivaIfService);
    expect(service).toBeTruthy();
  });
});
