import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NoauthGuard } from './noauth.guard';

describe('NoauthGuard', () => {
  let guard: NoauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
      ],
    });
    guard = TestBed.inject(NoauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
