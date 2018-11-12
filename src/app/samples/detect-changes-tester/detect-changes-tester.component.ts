import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect-changes-tester',
  templateUrl: './detect-changes-tester.component.html',
  styleUrls: ['./detect-changes-tester.component.css']
})
export class DetectChangesTesterComponent implements OnInit {

  message = 'new';

  constructor() {
    console.log('constructor', this.message);
  }

  ngOnInit() {
    console.log('ngOnInit', this.message);
  }

}
