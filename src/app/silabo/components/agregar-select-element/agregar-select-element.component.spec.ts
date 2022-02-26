import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSelectElementComponent } from './agregar-select-element.component';

describe('AgregarSelectElementComponent', () => {
  let component: AgregarSelectElementComponent;
  let fixture: ComponentFixture<AgregarSelectElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSelectElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSelectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
