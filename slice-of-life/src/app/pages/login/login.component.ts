import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/data/login.service';
import { AlertType } from 'src/app/UI/alert/alert.enum';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  responseType: AlertType;
  responseMessage: string;
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
    this.loading = true;
    this.loginService.login(this.login.get('handle').value, this.login.get('password').value).subscribe(
      {
        next : (response) => {
          this.loginService.setJwt(response['token']);
        },
        error : () => {
          this.loading = false;
          this.responseType = AlertType.Failure;
          this.responseMessage = "Invalid Credentials.";
        },
        complete : () => {
          this.loading = false;
          this.router.navigateByUrl('/')
        }
      }
    );
  }
}
