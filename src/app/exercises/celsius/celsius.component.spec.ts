import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CelsiusComponent } from './celsius.component';

describe('CelsiusComponent ...', () => {
  let component: CelsiusComponent;
  let fixture: ComponentFixture<CelsiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelsiusComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusComponent);
    component = fixture.componentInstance;
  });

  it('- should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
