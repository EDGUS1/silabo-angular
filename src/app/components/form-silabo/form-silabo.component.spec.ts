import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormSilaboComponent } from './form-silabo.component';

describe('FormSilaboComponent', () => {
  let component: FormSilaboComponent;
  let fixture: ComponentFixture<FormSilaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSilaboComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSilaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
