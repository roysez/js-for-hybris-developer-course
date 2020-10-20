import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminEditComponent } from './admin-edit/admin-edit.component';



@NgModule({
  declarations: [AdminComponent, AdminAuthComponent, AdminEditComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
