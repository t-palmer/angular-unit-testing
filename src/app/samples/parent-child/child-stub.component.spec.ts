import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ''
})
export class ChildStubComponent {
  @Input() name: string;
}
