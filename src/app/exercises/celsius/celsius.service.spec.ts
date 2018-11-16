import { TestBed } from '@angular/core/testing';
import { CelsiusService } from './celsius.service';

describe('CelsiusService ...', () => {
  let service: CelsiusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(CelsiusService);
  });

  it('- should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('- The function toCelsius() ...', () => {
    it(`- should return 0 when input is 32`, () => {
      // Arrange
      const fahrenheit = 32;
      let celsius: number;

      // Act
      celsius = service.toCelsius(fahrenheit);

      // Assert
      expect(celsius).toEqual(0);
    });
  });
});
