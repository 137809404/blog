import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusuanComponent } from './busuan.component';

describe('BusuanComponent', () => {
  let component: BusuanComponent;
  let fixture: ComponentFixture<BusuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
