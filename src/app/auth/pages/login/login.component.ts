import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get correoNoValido() {
    return (
      this.loginform.get('email').invalid && this.loginform.get('email').touched
    );
  }

  get passwordNoValido() {
    return (
      this.loginform.get('password').invalid &&
      this.loginform.get('password').touched
    );
  }

  login(email: string, passwrod: string) {
    this.authService.login(email, passwrod).subscribe(
      (response) => {
        if (response?.error) {
          alertify.set('notifier', 'position', 'top-right');
          alertify.error('Credenciales incorrectas');
        } else {
          sessionStorage.setItem('email', response['user_email']);
          sessionStorage.setItem('token', response['token']);
          this.authService.toggle();

          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Inicio de sesión corrrecto');

          this.router.navigate(['silabo']);
        }
      },
      (err) => console.log(err)
    );
  }

  cambiarVista(event) {
    event.preventDefault();
    if (this.loginform.valid) {
      this.login(
        this.loginform.get('email').value,
        this.loginform.get('password').value
      );
    } else {
      Object.values(this.loginform.controls).forEach((control) => {
        control.markAsTouched();
      });
      alertify.set('notifier', 'position', 'top-right');
      alertify.warning('Ingrese el email y contraseña');
    }
  }
}
