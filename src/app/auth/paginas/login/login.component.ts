import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../../auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage: string = '';

  constructor(
              private loginService : LoginService,
              private router: Router,
              private fb :FormBuilder
    ) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        clave :['', [Validators.required]],
      });
  }
  ngOnInit(): void {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    this.loginService.errorMessage$.subscribe(message => {
      this.errorMessage = message;
  });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.loginService.login(this.loginForm.value);
     // this.authService.login(this.loginForm.getRawValue());
    }
  }

  registrate(): void {
    this.router.navigate(['auth/registrate']);
  }
}
