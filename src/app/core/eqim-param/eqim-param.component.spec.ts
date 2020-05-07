import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EQIMParamComponent } from './eqim-param.component';

describe('EQIMParamComponent', () => {
  let component: EQIMParamComponent;
  let fixture: ComponentFixture<EQIMParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EQIMParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EQIMParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
