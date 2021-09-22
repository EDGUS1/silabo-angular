import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  constructor() {}

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authData');
    sessionStorage.removeItem('token');
  }

  getIsAuthenticated(): boolean {
    const user = sessionStorage.getItem('username');
    if (user != null) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}
