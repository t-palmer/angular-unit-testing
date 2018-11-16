import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from './data.service';
import { asyncData } from '../async-observable-helpers';
import { BackendService } from '../backend/backend.service';
import { BackendStubService } from '../backend/backend-stub.service.spec';
import {componentFactoryName} from '@angular/compiler';

describe('DataService', () => {
  let service: DataService;
  let backendService: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: BackendService, useClass: BackendStubService}
      ]
    });

    service = TestBed.get(DataService);
    backendService = TestBed.get(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe(`The function getData ...`, () => {
    it(`- should call 'httpGet' with the correct URL`, fakeAsync(() => {
      // Arrange
      const id = 'mockId';
      const mockUrl = 'http://server.com/data/mockId';
      const mockData = {
        dataList: []
      };
      let responseData;
      spyOn(backendService, 'httpGet').and.returnValue(asyncData(mockData));

      // Act
      service.getData(id)
        .subscribe(reponse => {
          responseData = reponse;
        });

      // Assert
      expect(responseData).toBeUndefined();
      expect(backendService.httpGet).toHaveBeenCalledWith(mockUrl);
      tick();
      expect(responseData).toEqual([]);
    }));
  });
});
