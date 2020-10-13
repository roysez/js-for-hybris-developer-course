import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {TextBlockComponent} from "./text-block/text-block.component";
import {SkillsComponent} from "./skills/skills.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {FeedbacksComponent} from "./feedbacks/feedbacks.component";

const homePageRoutes: Routes = [
  {path: "home", redirectTo: "home/about", pathMatch: "full"},
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "about",
        component: TextBlockComponent
      },
      {
        path: "skills",
        component: SkillsComponent
      },
      {
        path: "education",
        component: EducationComponent
      },
      {
        path: "experience",
        component: ExperienceComponent
      },
      {
        path: "contacts",
        component: ContactsComponent
      },
      {
        path: "feedbacks",
        component: FeedbacksComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homePageRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
