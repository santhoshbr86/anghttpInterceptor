import { TestBed, inject } from '@angular/core/testing';

import { LoginInterceptService } from './login-intercept.service';

describe('LoginInterceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginInterceptService]
    });
  });

  it('should be created', inject([LoginInterceptService], (service: LoginInterceptService) => {
    expect(service).toBeTruthy();
  }));
});
