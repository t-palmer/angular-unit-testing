import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomComponent } from './dom.component';
import { DebugElement } from '@angular/core';

describe('DomComponent', () => {
  let component: DomComponent;
  let fixture: ComponentFixture<DomComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit ...', () => {
    it(`- should should set message to 'initialized'`, () => {
      // Arrange
      let preInit: string;
      let postInit: string;

      // Act
      preInit = component.message;
      component.ngOnInit();
      postInit = component.message;

      // Assert
      expect(preInit).toEqual('pending');
      expect(postInit).toEqual('initialized');
    });

    it(`- should display message as 'initialized'`, () => {
      // Arrange

      // Act
      fixture.detectChanges();

      // Assert
      expect(nativeElement.textContent).toContain('initialized');
    });

    it(`- will only update message after we run fixture.detectChanges()`, () => {
      // Arrange
      let beforeOnNgInit: string;
      let afterOnNgInit: string;
      let afterSetMessage: string;
      let afterDetectChanges: string;

      // Act
      beforeOnNgInit = nativeElement.textContent;
      fixture.detectChanges(); // this runs ngOnInit
      afterOnNgInit = nativeElement.textContent;
      component.message = 'updated';
      afterSetMessage = nativeElement.textContent;
      fixture.detectChanges(); // this just updates the GUI
      afterDetectChanges = nativeElement.textContent;

      // Assert
      console.log('beforeOnNgInit', beforeOnNgInit);
      expect(afterOnNgInit).toContain('initialized');
      console.log('afterOnNgInit', afterOnNgInit);
      console.log('afterSetMessage', afterSetMessage);
      console.log('afterDetectChanges', afterDetectChanges);
    });
  });

});
