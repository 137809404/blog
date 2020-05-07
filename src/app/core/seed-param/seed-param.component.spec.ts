import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedParamComponent } from './seed-param.component';

describe('SeedParamComponent', () => {
  let component: SeedParamComponent;
  let fixture: ComponentFixture<SeedParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
