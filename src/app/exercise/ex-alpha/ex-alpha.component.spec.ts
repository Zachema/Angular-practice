import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAlphaComponent } from './ex-alpha.component';

describe('ExAlphaComponent', () => {
  let component: ExAlphaComponent;
  let fixture: ComponentFixture<ExAlphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExAlphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
