import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './avatar/avatar.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StorageServiceModule} from "ngx-webstorage-service";


@NgModule({
  declarations: [AvatarComponent, SkillsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  exports: [AvatarComponent, SkillsFormComponent]
})
export class SharedModule {
}
