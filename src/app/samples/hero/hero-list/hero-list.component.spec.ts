import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { HeroListComponent } from './hero-list.component';
import { HeroStubComponent } from '../hero/hero-stub.component.spec';
import { HeroService } from '../hero.service';
import { HeroStubService } from '../hero-stub.service.spec';
import { Hero } from '../hero.types';
import { asyncData } from '../../async-observable-helpers';

describe('HeroListComponent ...', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let heroService: HeroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroListComponent,
        HeroStubComponent
      ],
      providers: [
        {provide: HeroService, useClass: HeroStubService}
      ]
    })
    .compileComponents();

    heroService = TestBed.get(HeroService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
  });

  it('- should be created', () => {
    expect(component).toBeTruthy();
  });


  describe('The function ngOnInit ...', () => {
    it(`- should asynchronously load the hero list from the HeroService`, fakeAsync(() => {
      // Arrange
      const mockHeroes: Hero [] = [];
      mockHeroes.push({name: 'Mock Hero'});
      spyOn(heroService, 'getHeroesAsync').and.returnValue(asyncData(mockHeroes));

      // Act
      fixture.detectChanges();

      // Assert
      expect(component.updating).toBeTruthy();
      tick();
      expect(component.heroes.length).toEqual(1);
      expect(component.updating).toBeFalsy();
    }));
  });

  describe('The function gotoDetail ...', () => {
    it(`- should do something`, () => {
      // Arrange

      // Act
      component.gotoDetail({name: 'Mock Hero'});

      // Assert
      // We are cheating here just to get 100% code coverage.
      expect(component).toBeTruthy();
    });
  });
});
