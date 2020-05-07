import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentDescriptionComponent } from './accident-description.component';

describe('AccidentDescriptionComponent', () => {
  let component: AccidentDescriptionComponent;
  let fixture: ComponentFixture<AccidentDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
