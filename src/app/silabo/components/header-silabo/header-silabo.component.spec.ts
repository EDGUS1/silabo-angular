import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSilaboComponent } from './header-silabo.component';

describe('HeaderSilaboComponent', () => {
  let component: HeaderSilaboComponent;
  let fixture: ComponentFixture<HeaderSilaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSilaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSilaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
