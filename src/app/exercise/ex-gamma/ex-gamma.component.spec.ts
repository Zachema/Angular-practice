import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExGammaComponent } from './ex-gamma.component';

describe('ExGammaComponent', () => {
  let component: ExGammaComponent;
  let fixture: ComponentFixture<ExGammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExGammaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExGammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
