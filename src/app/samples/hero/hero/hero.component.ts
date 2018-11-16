import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero.types';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();

  click() {
    console.log('click()', this.hero);
    this.selected.emit(this.hero);
  }
}
