import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDeltaComponent } from './ex-delta.component';

describe('ExDeltaComponent', () => {
  let component: ExDeltaComponent;
  let fixture: ComponentFixture<ExDeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExDeltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
