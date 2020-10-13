import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontPageComponent} from './front-page.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "front-page",
        component: FrontPageComponent
      }
    ]),
    SharedModule

  ],
  exports: [
    RouterModule
  ]
})
export class FrontPageModule {
}
