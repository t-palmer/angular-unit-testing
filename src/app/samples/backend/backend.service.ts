import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  public httpGet(url: string, params?: any): Observable<any> {
    if (params) {
      return this.http.get<any>(url, { params: params });
    }
    return this.http.get<any>(url);
  }

  public httpPost(url: string, data: any, params?: any): Observable<any> {
    if (params) {
      return this.http.post<any>(url, data, { params: params });
    }
    return this.http.post<any>(url, data);
  }}
