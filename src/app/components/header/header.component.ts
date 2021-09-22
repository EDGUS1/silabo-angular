import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @HostBinding()
  login: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLogged();
    this.authService.change.subscribe((isAuthenticated) => {
      this.login = isAuthenticated;
    });
  }

  isLogged() {
    this.login = this.authService.getIsAuthenticated();
  }
  logout() {
    this.authService.logout();
    this.isLogged();
    this.router.navigate(['/']);
  }
}
