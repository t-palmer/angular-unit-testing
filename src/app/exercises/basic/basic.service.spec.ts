import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';

describe('BasicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicService = TestBed.get(BasicService);
    expect(service).toBeTruthy();
  });
});
