import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CelsiusService {

  toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 1.8;
  }
}
