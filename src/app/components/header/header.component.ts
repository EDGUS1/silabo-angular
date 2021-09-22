import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.login = this.authService.getIsAuthenticated();
  }
  logout() {
    this.authService.logout();
    this.login = this.authService.getIsAuthenticated();
    this.router.navigate(['/']);
  }
}
