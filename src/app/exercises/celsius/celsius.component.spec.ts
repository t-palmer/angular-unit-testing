import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CelsiusComponent } from './celsius.component';
import { CelsiusService } from './celsius.service';
import { CelsiusStubService } from './celsius-stub.service.spec';

describe('CelsiusComponent ...', () => {
  let component: CelsiusComponent;
  let fixture: ComponentFixture<CelsiusComponent>;
  let celsiusService: CelsiusService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelsiusComponent ],
      providers: [
        {provide: CelsiusService, useClass: CelsiusStubService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusComponent);
    component = fixture.componentInstance;
    celsiusService = TestBed.get(CelsiusService);
  });

  it('- should be created', () => {
    expect(component).toBeTruthy();
  });


  describe('- The function ngOnInt() ...', () => {
    it(`- should call toCelsius() from the CelsiusService with the fahrenheit member`, () => {
      // Arrange
      spyOn(celsiusService, 'toCelsius');

      // Act
      fixture.detectChanges();

      // Assert
      expect(celsiusService.toCelsius).toHaveBeenCalledWith(component.fahrenheit);
    });

    it(`- celsius should be initialized with the result of toCelsius`, () => {
      // Arrange
      const celsius = 0;
      spyOn(celsiusService, 'toCelsius').and.returnValue(celsius);

      // Act
      fixture.detectChanges();

      // Assert
      expect(component.celsius).toEqual(celsius);
    });
  });
});
