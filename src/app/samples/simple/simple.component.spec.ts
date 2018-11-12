import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleComponent } from './simple.component';

describe('SimpleComponent ...', () => {
  let component: SimpleComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('- should create', () => {
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
  });
});
