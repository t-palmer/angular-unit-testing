import { Component, Input } from '@angular/core';
import { Hero } from '../hero.types';

@Component({
  selector: 'app-hero',
  template: ''
})
export class HeroStubComponent {
  @Input() hero: Hero;
}
