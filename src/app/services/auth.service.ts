import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

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

  toggle() {
    this.isAuthenticated = this.getIsAuthenticated();
    this.change.emit(this.isAuthenticated);
  }
}
