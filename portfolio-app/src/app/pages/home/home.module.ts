import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { SkillsComponent } from './skills/skills.component';
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [HomeComponent, SideNavComponent, TextBlockComponent, ExperienceComponent, EducationComponent, ContactsComponent, FeedbacksComponent, SkillsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
