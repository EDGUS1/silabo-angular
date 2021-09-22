import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSilabosGridComponent } from './home-silabos-grid.component';

describe('HomeSilabosGridComponent', () => {
  let component: HomeSilabosGridComponent;
  let fixture: ComponentFixture<HomeSilabosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSilabosGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSilabosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
