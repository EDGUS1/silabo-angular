import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSilaboComponent } from './card-silabo.component';

describe('CardSilaboComponent', () => {
  let component: CardSilaboComponent;
  let fixture: ComponentFixture<CardSilaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSilaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSilaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
