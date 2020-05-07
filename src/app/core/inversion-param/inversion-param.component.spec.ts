import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionParamComponent } from './inversion-param.component';

describe('InversionParamComponent', () => {
  let component: InversionParamComponent;
  let fixture: ComponentFixture<InversionParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversionParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InversionParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
