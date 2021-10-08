import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  isAuthenticated = false;
  urlApi: string = `${environment.api.baseUrl}`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.urlApi}/auth`, { email, password })
      .pipe(catchError(this.handleError));
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  }

  getIsAuthenticated(): boolean {
    const user = sessionStorage.getItem('email');
    if (user != null) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

  toggle(): void {
    this.isAuthenticated = this.getIsAuthenticated();
    this.change.emit(this.isAuthenticated);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Client error', error.error.message);
    } else {
      // Error en el lado del servidor
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    //catch and rethrow
    return throwError('Cannot perform the request, please try again later');
  }
}
