import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple/simple.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  public result: string;

  constructor(
    public simpleService: SimpleService
  ) { }

  ngOnInit() {
    this.result = this.simpleService.addFoo('Testing');
  }
}
