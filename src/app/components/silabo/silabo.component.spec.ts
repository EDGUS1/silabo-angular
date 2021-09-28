import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SilaboComponent } from './silabo.component';

describe('SilaboComponent', () => {
  let component: SilaboComponent;
  let fixture: ComponentFixture<SilaboComponent>;
  const routerSpy = jasmine.createSpyObj('Router', [
    'getCurrentNavigation',
    'navigate',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SilaboComponent],
      imports: [HttpClientModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
