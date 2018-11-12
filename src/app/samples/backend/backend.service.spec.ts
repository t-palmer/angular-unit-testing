import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {asyncData} from '../async-observable-helpers';

describe('BackendService ...', () => {

  let service: BackendService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        BackendService
      ]
    });

    service = TestBed.get(BackendService);
    httpClient = TestBed.get(HttpClient);
  });

  it(`- should be created`, () => {
    expect(service).toBeTruthy();
  });


  describe(`The function httpGet ...`, () => {
    it(`- should call 'get' on the service 'HttpClient' and provide data if params is undefined`, fakeAsync(() => {
      // Arrange
      const mockUrl = 'mockUrl';
      spyOn(httpClient, 'get').and.returnValue(asyncData('mock'));

      // Act
      let reponseReceived;
      service.httpGet(mockUrl)
        .subscribe(reponse => {
          reponseReceived = reponse;
        });

      // Assert
      expect(httpClient.get).toHaveBeenCalledWith(mockUrl);
      tick();
      expect(reponseReceived).toEqual('mock');
    }));

    it(`- should call 'get' on the service 'HttpClient' and provide data if params is defined`, fakeAsync(() => {
      // Arrange
      const mockUrl = 'mockUrl';
      const params = { mock: 'mock' };
      spyOn(httpClient, 'get').and.returnValue(asyncData('mock'));

      // Act
      let reponseReceived;
      service.httpGet(mockUrl, params)
        .subscribe(reponse => {
          reponseReceived = reponse;
        });

      // Assert
      expect(httpClient.get).toHaveBeenCalledWith(mockUrl, { params: params });
      tick();
      expect(reponseReceived).toEqual('mock');
    }));
  });


  describe('The function httpPost ...', () => {
    it(`- should call 'post' on the service 'HttpClient' and provide data if params is undefined`, fakeAsync(() => {
      // Arrange
      const mockUrl = 'mockUrl';
      const mockPostData = { mock: 'mockData' };
      spyOn(httpClient, 'post').and.returnValue(asyncData('mock'));

      // Act
      let reponseReceived;
      service.httpPost(mockUrl, mockPostData)
        .subscribe(reponse => {
          reponseReceived = reponse;
        });

      // Assert
      expect(httpClient.post).toHaveBeenCalledWith(mockUrl, mockPostData);
      tick();
      expect(reponseReceived).toEqual('mock');
    }));

    it(`- should call 'post' on the service 'HttpClient' and provide data if params is defined`, fakeAsync(() => {
      // Arrange
      const mockUrl = 'mockUrl';
      const mockPostData = { mock: 'mockData' };
      const params = { mock: 'mock' };
      spyOn(httpClient, 'post').and.returnValue(asyncData('mock'));

      // Act
      let reponseReceived;
      service.httpPost(mockUrl, mockPostData, params)
        .subscribe(reponse => {
          reponseReceived = reponse;
        });

      // Assert
      expect(httpClient.post).toHaveBeenCalledWith(mockUrl, mockPostData, { params: params });
      tick();
      expect(reponseReceived).toEqual('mock');
    }));
  });
});
