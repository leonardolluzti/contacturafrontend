import { LoginService } from './../login.service';
import { Authentication } from './../model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  authentication: Authentication;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{}

  login(){
    this.authentication = this.loginForm.value;
    if(this.loginForm.valid){
      this.loginService.authenticate(this.authentication).subscribe(
        data => {
          console.log(data, 'o token é');
        }
      );
    }else{
      Swal.fire({
        title: 'Oops!',
        text: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  }
}
