import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { Hero } from './hero.types';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public getHeroes(): Observable<Hero[]> {
    const heroArray: Hero[] = [
      {name: 'Iron Man'},
      {name: 'Hulk'}
    ];
    return of(heroArray);
  }

  public getHeroesAsync(): Observable<Hero[]> {
    const heroArray: Hero[] = [
      {name: 'Iron Man'},
      {name: 'Hulk'}
    ];
    return defer(() => Promise.resolve(heroArray));
  }
}
