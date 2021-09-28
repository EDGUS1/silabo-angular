import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

import { CardSilaboComponent } from './card-silabo.component';

describe('CardSilaboComponent', () => {
  let component: CardSilaboComponent;
  let fixture: ComponentFixture<CardSilaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSilaboComponent, TruncatePipe],
      imports: [HttpClientModule],
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
    fixture = TestBed.createComponent(CardSilaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
