import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SearchPipe } from 'src/app/silabo/pipes/search.pipe';

import { HomeSilabosComponent } from './home-silabos.component';

describe('HomeSilabosComponent', () => {
  let component: HomeSilabosComponent;
  let fixture: ComponentFixture<HomeSilabosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSilabosComponent, SearchPipe],
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
    fixture = TestBed.createComponent(HomeSilabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
