import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/data/signup.service';
import { AlertType } from 'src/app/UI/alert/alert.enum';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  httpCode: HttpStatusCode;
  responseType : AlertType;
  responseMessage : string;

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {}
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    handle: new FormControl('', [Validators.required]),
  });

  getErrorMessage() {
    if (this.signupForm.get('email').hasError('required')) {
    }

    return 'You must enter a value';
  }
  signupUser() {
    console.log('singing up handle: ' + this.signupForm.get('handle').value);
    this.signupService
      .createUser({
        handle: this.signupForm.get('handle').value,
        email: this.signupForm.get('email').value,
        password: this.signupForm.get('password').value,
        first_name: this.signupForm.get('firstName').value,
        last_name: this.signupForm.get('lastName').value,
      })
      .subscribe({
        next: (response) => {
          console.log('Response: ' + response);
          this.responseMessage = 'Success acount created';
          this.responseType = AlertType.Success;

        },
        error: (error) => {
          console.log('Error: ' + error);
          this.responseMessage = 'Handle is unavailable, try another handle.';
          this.responseType = AlertType.Failure;
        },
      });
  }
}
