import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SignupService } from './signup.service';
import { User } from '../models/user.model';
import { fakeAsync, tick } from '@angular/core/testing';
import { Config } from '../config';


describe('SignupService', () => {
  let signupService: SignupService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignupService],
    });

    signupService = TestBed.inject(SignupService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create a new user account', fakeAsync(() => {
    const user: User = {
      handle: 'handle',
      email: 'email',
      password: 'password',
      first_name: 'first_name',
      last_name: 'last_name',
    };

    let response;
    signupService.createUser(user).subscribe((res) => (response = res));

    const req = httpTestingController.expectOne(Config.BASE_URL + '/api/v1/users/account/new');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(user);
    req.flush({ status: 'CREATED' });
    tick();
    expect(response).toEqual({ status: 'CREATED' });
  }));

  it('should return an error if the handle is unavailable', fakeAsync(() => {
    const user: User = {
      handle: 'handle',
      email: 'email',
      password: 'password',
      first_name: 'first_name',
      last_name: 'last_name',
    };

    let testError;
    let testResponse;
    signupService.createUser(user).subscribe({
      error: (err) => {
        testError = err;
      },
    });

    const req = httpTestingController.expectOne(Config.BASE_URL + '/api/v1/users/account/new');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(user);
    req.flush("", {
      status: 403,
      statusText: 'handle not available'
    });
    tick();
    expect({status: testError.status, statusText: testError.statusText}).toEqual({
      status: 403,
      statusText: 'handle not available'
    });
  }));
});
