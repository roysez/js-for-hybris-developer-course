import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {

  loginForm: FormGroup

  constructor() {
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
  }

  submitLogin() {
    if (this.loginForm.valid)
      console.log("Form submitted ", this.loginForm);
  }
}
