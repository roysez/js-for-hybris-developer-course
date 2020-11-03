import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminAuthComponent} from './admin-auth.component';
import {AdminAuthService} from "./admin-auth.service";
import {ActivatedRoute} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {By} from "@angular/platform-browser";

describe('AdminAuthComponent', () => {
  let component: AdminAuthComponent;
  let service: AdminAuthService;
  let fixture: ComponentFixture<AdminAuthComponent>;

  const router = {
    navigate(...args: any): any {
      return;
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAuthComponent],
      providers: [{
        provide: AdminAuthService,
        useValue: service
      }, {
        provide: ActivatedRoute,
        useValue: router
      }],
      imports: [FormsModule, ReactiveFormsModule, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button if form is invalid', async(() => {
    fixture.autoDetectChanges();

    prepareInputs('not', 'valid');

    const button = fixture.debugElement
      .query(By.css('.submit-button')).nativeElement;

    fixture.whenStable().then(() => {
      expect(button.disabled).toBe(true);
    });
  }));

  it('should enable button if form is valid', async(() => {
    fixture.autoDetectChanges();

    prepareInputs('admin', '123456');

    const button = fixture.debugElement
      .query(By.css('.submit-button')).nativeElement;

    fixture.whenStable().then(() => {
      expect(button.disabled).toBe(false);
    });
  }));

  function prepareInputs(login: string, pass: string) {
    const loginInputElement = fixture.debugElement.query(By.css('input[name="login"]')).nativeElement;
    loginInputElement.value = login;
    loginInputElement.dispatchEvent(new Event('input'));

    const passwordInputElement = fixture.debugElement.query(By.css('input[name="password"]')).nativeElement;
    passwordInputElement.value = pass;
    passwordInputElement.dispatchEvent(new Event('input'));
  }
});
