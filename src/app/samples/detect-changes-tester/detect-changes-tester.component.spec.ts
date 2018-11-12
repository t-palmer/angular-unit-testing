import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetectChangesTesterComponent } from './detect-changes-tester.component';

describe('DetectChangesTesterComponent ...', () => {
  let component: DetectChangesTesterComponent;
  let fixture: ComponentFixture<DetectChangesTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectChangesTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectChangesTesterComponent);
    component = fixture.componentInstance;
  });

  it('- should be created', () => {
    expect(component).toBeTruthy();
  });


  describe('detectChanges testing ...', () => {
    it(`- the constructor is always called even without 'detectChanges()'`, () => {
      // Arrange
      // Notice in the output that the constructor gets called before this.
      component.message = 'NO detectChanges()';

      // Act

      // Assert
      expect(component.message).toEqual('NO detectChanges()');
    });

    it(`- ngOnInit is called once and only one by 'detectChanges()'`, () => {
      // Arrange
      component.message = 'ONCE detectChanges()';

      // Act
      fixture.detectChanges();
      component.message = 'TWICE detectChanges()';
      fixture.detectChanges();

      // Assert
      expect(component.message).toEqual('TWICE detectChanges()');
    });

    it(`- ngOnInit can be called multiple times if you call it directly`, () => {
      // Arrange
      component.message = 'MANUALLY ngOnInit()';

      // Act
      component.ngOnInit();
      component.message = 'detectChanges() after ngOnInit';
      fixture.detectChanges();

      // Assert
      expect(component.message).toEqual('detectChanges() after ngOnInit');
    });
  });
});
