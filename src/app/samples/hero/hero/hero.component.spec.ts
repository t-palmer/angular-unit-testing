import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { Hero } from '../hero.types';
import { By} from '@angular/platform-browser';

describe('HeroComponent ...', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let nativeElement: HTMLElement;
  let debugElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    debugElement  = fixture.debugElement.query(By.css('.hero'));
    nativeElement = debugElement.nativeElement;
  });

  it('- should be created', () => {
    expect(component).toBeTruthy();
  });


  describe('After initialization ...', () => {
    it(`- the component should display the name of the hero`, () => {
      // Arrange
      const mockHeroName = 'Mock Hero';
      component.hero = {name: mockHeroName};

      // Act
      fixture.detectChanges();

      // Assert
      expect(nativeElement.textContent).toContain(mockHeroName);
    });
  });


  describe('Clicking the hero ...', () => {
    it(`- should emit the hero to the parent`, () => {
      // Arrange
      const mockHero = {name: 'Mock Hero'};
      component.hero = mockHero;
      let clickedHero: Hero;
      component.selected.subscribe((hero: Hero) => clickedHero = hero);

      // Act
      debugElement.triggerEventHandler('click', null);

      // Assert
      expect(clickedHero).toBe(mockHero);
    });
  });
});
