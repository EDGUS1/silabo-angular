import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder) {}

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
  cambiarVista(event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log({
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      });

      sessionStorage.setItem('email', this.form.get('email').value);

      this.router.navigate(['silabo']);
    } else {
      alert('invalid');
    }
  }
}
