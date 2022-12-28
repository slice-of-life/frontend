import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/data/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  constructor(private loginService : LoginService, private router : Router) { }
  login = new FormGroup({
    handle : new FormControl('', [Validators.required]),
  
    password : new FormControl('', [Validators.required])
  
  })
  ngOnInit(): void {
  }
  getErrorMessage() {
    return 'You must enter a value';;
  }
  loginUser() {
    this.loginService.login(this.login.get('handle').value, this.login.get('password').value).subscribe(
      {
        next : (response) => {
          this.loginService.setJwt(response['token']);
        },
        error : () => {
          this.loading = false;
        },
        complete : () => {
          this.loading = false;
        }
      }
    );
  }

  logUserInfo() {
    this.loginService.getUserInfo().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
