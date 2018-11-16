import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.types';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  public heroes: Hero[];
  public updating: boolean;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.updating = true;
    this.heroService
      .getHeroesAsync()
      .subscribe(result => {
        this.heroes = result;
        this.updating = false;
      });
  }

  gotoDetail(hero: Hero) {
    console.log('GoTo hero', hero);
  }
}
