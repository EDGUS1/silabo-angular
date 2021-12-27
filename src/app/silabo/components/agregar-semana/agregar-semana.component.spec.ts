import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSemanaComponent } from './agregar-semana.component';

describe('AgregarSemanaComponent', () => {
  let component: AgregarSemanaComponent;
  let fixture: ComponentFixture<AgregarSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSemanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
