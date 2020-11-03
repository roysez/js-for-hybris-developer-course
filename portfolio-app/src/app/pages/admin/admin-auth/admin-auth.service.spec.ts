import {inject, TestBed} from '@angular/core/testing';

import { AdminAuthService } from './admin-auth.service';
import {Router} from "@angular/router";

describe('AdminAuthService', () => {
  let service: AdminAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should navigate', inject([Router], (router: Router) => {
  //   spyOn(router, 'navigate').and.stub();
  //   service.submitLogin({'login': 'login','password': 'password'})
  //   expect(router.navigate).toHaveBeenCalledWith(['/login']);
  // }));
});
