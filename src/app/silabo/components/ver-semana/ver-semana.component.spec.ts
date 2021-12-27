import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSemanaComponent } from './ver-semana.component';

describe('VerSemanaComponent', () => {
  let component: VerSemanaComponent;
  let fixture: ComponentFixture<VerSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSemanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
