import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2FormsComponent } from './angular2-forms.component';

describe('Angular2FormsComponent', () => {
  let component: Angular2FormsComponent;
  let fixture: ComponentFixture<Angular2FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2FormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
