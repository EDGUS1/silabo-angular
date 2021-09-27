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
  form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get correoNoValido() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get passwordNoValido() {
    return (
      this.form.get('password').invalid && this.form.get('password').touched
    );
  }

  login(email: string, passwrod: string) {
    this.authService.login(email, passwrod).subscribe(
      (response) => {
        console.log(response);

        if (response?.length > 0) {
          sessionStorage.setItem('email', response[0]['usuario_email']);
          this.authService.toggle();

          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Success message');

          this.router.navigate(['silabos']);
        }
      },
      (err) => console.log(err)
    );
  }

  cambiarVista(event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log({
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      });
      this.login(this.form.get('email').value, this.form.get('password').value);
    } else {
      alert('invalid');
    }
  }
}
