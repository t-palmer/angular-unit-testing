import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import { HeroService } from './hero.service';
import { Hero } from './hero.types';

describe('HeroService ...', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    service = TestBed.get(HeroService);
  });

  it('- should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('The function getHeroes ...', () => {
    it(`- should return an observable that resolves to an array`, () => {
      // Arrange
      let heroes: Hero[];

      // Act
      service
        .getHeroes()
        .subscribe(result => {
          heroes = result;
        });

      // Assert
      expect(heroes.length > 0).toBeTruthy();
    });
  });


  describe('The function getHeroesAsync ...', () => {
    it(`- should asynchronously return an observable that resolves to an array`, fakeAsync(() => {
      // Arrange
      let heroes: Hero[];

      // Act
      service
        .getHeroesAsync()
        .subscribe(result => {
          heroes = result;
        });

      // Assert
      expect(heroes).toBeUndefined();
      tick();
      expect(heroes.length > 0).toBeTruthy();
    }));
  });
});
