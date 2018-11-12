import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProviderComponent } from './provider.component';
import { SimpleService } from '../simple/simple.service';
import { SimpleStubService } from '../simple/simple-stub.service.spec';

describe('ProviderComponent ...', () => {
  let component: ProviderComponent;
  let fixture: ComponentFixture<ProviderComponent>;
  let simpleService: SimpleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderComponent ],
      providers: [
        {provide: SimpleService, useClass: SimpleStubService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderComponent);
    component = fixture.componentInstance;
    simpleService = TestBed.get(SimpleService);
  });

  it('- should be created', () => {
    expect(component).toBeTruthy();
  });


  describe('- the function ngOnInit ...', () => {
    it(`- should call 'addFoo()' with the value 'Testing'`, () => {
      // Arrange
      spyOn(simpleService, 'addFoo');

      // Act
      component.ngOnInit();

      // Assert
      expect(simpleService.addFoo).toHaveBeenCalledWith('Testing');
    });

    it(`- should update the variable 'result' with the result of addFoo`, () => {
      // Arrange
      const mockReturnValue = 'mock';
      spyOn(simpleService, 'addFoo').and.returnValue(mockReturnValue);

      // Act
      // Notice we can also use detectChanges to get ngOnInit called by the component.
      fixture.detectChanges();

      // Assert
      expect(component.result).toEqual(mockReturnValue);
    });
  });
});
