import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExBetaComponent } from './ex-beta.component';

describe('ExBetaComponent', () => {
  let component: ExBetaComponent;
  let fixture: ComponentFixture<ExBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
