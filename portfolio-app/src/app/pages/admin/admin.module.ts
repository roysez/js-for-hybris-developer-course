import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';



@NgModule({
  declarations: [AdminComponent, AdminAuthComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
