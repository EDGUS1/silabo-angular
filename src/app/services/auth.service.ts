import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  constructor() {}

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem('email');
  }

  getIsAuthenticated(): boolean {
    const user = sessionStorage.getItem('email');
    if (user != null) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}
