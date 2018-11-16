import { Injectable } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public backend: BackendService
  ) { }

  getData(id: string): Observable<any[]> {
    return this.backend
      .httpGet(`http://server.com/data/${id}`)
      .pipe(
        map((response) => response.dataList)
      );
  }
}
