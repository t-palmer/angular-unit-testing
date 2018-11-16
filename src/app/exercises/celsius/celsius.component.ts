import { Component, OnInit } from '@angular/core';

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
  ) { }

  ngOnInit() {
    this.fahrenheit = 30;
    // this.celsius = the result of calling CelsiusSerive with this.fahrenheit
  }

}
