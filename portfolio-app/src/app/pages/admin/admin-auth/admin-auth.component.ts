import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminAuthService} from "./admin-auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {

  loginForm: FormGroup
  wrongCredentials: boolean

  constructor(private adminAuth: AdminAuthService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.maxLength(6),
        Validators.required,
        Validators.pattern('^[A-Za-z ]+$')]),
      password: new FormControl(null, [Validators.minLength(6),
        Validators.required,
        Validators.pattern('^[A-Za-z1-9 ]+$')])
    });

    this.route.queryParams.subscribe(params => {
        this.wrongCredentials = params['wrongCredentials'];
        }
      );
  }

  submitLogin() {
    if (this.loginForm.valid)
      this.adminAuth.submitLogin(this.loginForm.value);
  }
}
