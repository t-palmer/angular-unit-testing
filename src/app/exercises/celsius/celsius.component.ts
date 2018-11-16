import { Component, OnInit } from '@angular/core';
import { CelsiusService } from './celsius.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.css']
})
export class CelsiusComponent implements OnInit {
  public fahrenheit: number;
  public celsius: number;

  // Add CelsiusService in the constructor
  constructor(
    public celiusService: CelsiusService
  ) { }

  ngOnInit() {
    this.fahrenheit = 30;
    this.celsius = this.celiusService.toCelsius(this.fahrenheit);
  }

}
