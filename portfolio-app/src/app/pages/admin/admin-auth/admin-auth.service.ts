import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  isAuth: boolean = false;
  defaultPassword: String = "123456";
  defaultLogin: String = "login";

  constructor(private router: Router) {
  }

  submitLogin(loginData: LoginForm) {
    if (loginData.login == this.defaultLogin && loginData.password == this.defaultPassword) {
      this.isAuth = true;
      this.router.navigate(['/admin/edit']);
    } else {
      this.router.navigate(['/admin/login'], {
        queryParams: {
          wrongCredentials: true
        }
      });
    }
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    })
  }
}

interface LoginForm {
  login?: String,
  password?: String
}
