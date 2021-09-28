import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CardSilabosListComponent } from './card-silabos-list.component';

describe('CardSilabosListComponent', () => {
  let component: CardSilabosListComponent;
  let fixture: ComponentFixture<CardSilabosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSilabosListComponent],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSilabosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
