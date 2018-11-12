import { TestBed } from '@angular/core/testing';
import { SimpleService } from './simple.service';

describe('SimpleService ...', () => {

  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    service = TestBed.get(SimpleService);
  });

  it('- should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('The function addFoo ...', () => {
    it(`- should should return 'YesFoo' with input 'Yes'`, () => {
      // Arrange
      const firstString = 'Yes';

      // Act
      const result = service.addFoo(firstString);

      // Assert
      expect(result).toEqual('YesFoo');
    });
  });
});
