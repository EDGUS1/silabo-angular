import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    /* TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(AuthService); */
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login correct', (done: DoneFn) => {
    const mockUserCredentials = {
      email: 'eduardo@gmail.com',
      password: '123456',
    };

    const mockResultLogin = [
      {
        data: {
          id: 1,
        },
      },
    ];

    httpClientSpy.post.and.returnValue(of(mockResultLogin));

    const { email, password } = mockUserCredentials;

    service.login(email, password).subscribe((resultado) => {
      expect(resultado).toEqual(mockResultLogin);
      done();
    });
  });
});
