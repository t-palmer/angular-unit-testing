import { TestBed } from '@angular/core/testing';

import { YesNoService } from './yes-no.service';

describe('YesNoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YesNoService = TestBed.get(YesNoService);
    expect(service).toBeTruthy();
  });
});
