import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeAlphaComponent } from './three-alpha.component';

describe('ThreeAlphaComponent', () => {
  let component: ThreeAlphaComponent;
  let fixture: ComponentFixture<ThreeAlphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeAlphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
