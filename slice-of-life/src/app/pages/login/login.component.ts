import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/data/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }
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
    console.log("logging in");
    this.loginService.login('handle', 'password');
  }
}
