import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  addFoo(value: string): string {
    return `${value}Foo`;
  }

}
