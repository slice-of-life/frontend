import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/data/signup.service';
import { AlertType } from 'src/app/UI/alert/alert.enum';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  httpCode: HttpStatusCode;
  responseType: AlertType;
  responseMessage: string;
  loading: boolean = false;
  unavailableHandles : String[] = [];

  signupForm = this.fb.group({
    email: ['', [Validators.email, Validators.required, Validators.maxLength(50)]],
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
    handle: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    confirmPassword: ['', Validators.required],
    
  });

  constructor(private signupService: SignupService, private fb: FormBuilder, private router :Router) {}

  ngOnInit(): void {}

  getErrorMessage(controlName: string) {
    const control = this.signupForm.get(controlName);
    if (control.hasError('email')) {
      return 'Invalid email address.';
    } 
    else if(control.hasError('minlength')){
      return `Must be at least ${control.errors['minlength'].requiredLength} characters`;
    }
    else if (control.hasError('maxlength')) {
      return `Maximum of ${control.errors['maxlength'].requiredLength} characters allowed.`;
    } 
    else if (control.hasError('confirm')) {
      return 'Password does not match above.';
    }
    else if (control.hasError('handle')){
      return 'Handle not available.';
    }
    return 'You must enter a value.';
  }
  
  hasErrors() {
    for(let x in this.signupForm.controls){
      if(this.signupForm.get(x).errors && this.signupForm.get(x).touched) {
        return true;
    }
  }
    return false;
  }
  confirmPassword() {
    if(this.signupForm.get('password').value !== this.signupForm.get('confirmPassword').value) {
      this.signupForm.get('confirmPassword').setErrors({confirm : true})
    }
    else {
      this.signupForm.get('confirmPassword').setErrors(null)
    }
  }

  submit() {
    this.signupForm.markAllAsTouched();
    if(this.signupForm.valid) {
      this.signupUser();
    }
  }

  handleError() {
    this.unavailableHandles.push(this.signupForm.get('handle').value);
    this.signupForm.get('handle').setErrors({ handle: true });
  }

  onChangeHandle() {
    if(this.unavailableHandles.includes(this.signupForm.get('handle').value)){
      this.signupForm.get('handle').setErrors({ handle: true });
    }
  }

  signupUser() {
    this.loading = true;
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
          this.responseMessage = 'Success acount created, automatically redirecting you to the login page.';
          this.responseType = AlertType.Success;
          setTimeout(() => this.router.navigateByUrl("/login"), 2500);
        },
        error: (error: HttpErrorResponse) => {
          this.responseMessage =
            error.status === 401
              ? 'Handle not available, please try another handle.'
              : `Received error: ${error.statusText}`;
          if (error.status === 401) this.handleError()
          this.responseType = AlertType.Warning;
        },
      })
      .add(() => (this.loading = false));
  }
}
