import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarElementoCardComponent } from './agregar-elemento-card.component';

describe('AgregarElementoCardComponent', () => {
  let component: AgregarElementoCardComponent;
  let fixture: ComponentFixture<AgregarElementoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarElementoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarElementoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
