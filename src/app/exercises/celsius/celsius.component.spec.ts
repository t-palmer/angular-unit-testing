import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CelsiusComponent } from './celsius.component';
import { CelsiusService } from './celsius.service';
import { CelsiusStubService } from './celsius-stub.service.spec';

describe('CelsiusComponent ...', () => {
  let component: CelsiusComponent;
  let fixture: ComponentFixture<CelsiusComponent>;

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
  });

  it('- should be created', () => {
    expect(component).toBeTruthy();
  });
});
