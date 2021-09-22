import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSilabosListComponent } from './home-silabos-list.component';

describe('HomeSilabosListComponent', () => {
  let component: HomeSilabosListComponent;
  let fixture: ComponentFixture<HomeSilabosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSilabosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSilabosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
