import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SignupService } from 'src/app/data/signup.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
  }
  signupForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    firstName : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    confirmPassword : new FormControl('',[Validators.required]),
    handle : new FormControl('', [Validators.required])
  
  })
  
  getErrorMessage() {

    if (this.signupForm.get('email').hasError('required')) {
      
    }
    

    return 'You must enter a value';;
  }
  signupUser() {
    console.log("singing up handle" + this.signupForm.get('handle').value);
  //   this.signupService.createUser('handle', 'email', 'password', 'first_name', 'last_name')
  //   .subscribe({
  //     next: response => {
  //       // Handle the "CREATED" response
  //     },
  //     error: error => {
  //       // Handle the error, such as a "403" response for an unavailable handle
  //     }
  // });
  
  }
}
