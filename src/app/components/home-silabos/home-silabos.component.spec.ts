import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSilabosComponent } from './home-silabos.component';

describe('HomeSilabosComponent', () => {
  let component: HomeSilabosComponent;
  let fixture: ComponentFixture<HomeSilabosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSilabosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSilabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
