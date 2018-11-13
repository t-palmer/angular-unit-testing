import { TestBed } from '@angular/core/testing';
import { YesNoService } from './yes-no.service';

describe('YesNoService ...', () => {

  let service: YesNoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    service = TestBed.get(YesNoService);
  });

  it('- should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add a describe to test the getString function
  describe('getString ...', () => {
    it(`- should return 'Yes' when passed 'true'`, () => {
      // Arrange
      let result: string;

      // Act
      result = service.getString(true);

      // Assert
      expect(result).toEqual('Yes');
    });

    it(`- should return 'No' when passed 'false'`, () => {
      // Arrange
      let result: string;

      // Act
      result = service.getString(false);

      // Assert
      expect(result).toEqual('No');
    });
  });
});
