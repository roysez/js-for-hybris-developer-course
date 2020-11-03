import {inject, TestBed} from '@angular/core/testing';

import {AdminAuthService} from './admin-auth.service';
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

describe('AdminAuthService', () => {
  let service: AdminAuthService;
  const router = {
    navigate(...args: any): any {
      return;
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: Router,
        useValue: router
      }],
      imports: [CommonModule]
    }).compileComponents();
    service = TestBed.inject(AdminAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate if creds are valid', inject([Router], (router: Router) => {
    spyOn(router, 'navigate').and.stub();

    service.submitLogin({'login': 'login','password': '123456'})

    expect(router.navigate).toHaveBeenCalledWith(['/admin/edit']);
  }));
});
