import { TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';

describe('BasicService ...', () => {

  let service: BasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    service = TestBed.get(BasicService);
  });

  it('- should be created', () => {
    expect(service).toBeTruthy();
  });
});
