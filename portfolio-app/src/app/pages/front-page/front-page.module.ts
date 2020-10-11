import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontPageComponent} from './front-page.component';


@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule

  ],
  exports: [
    FrontPageComponent
  ]
})
export class FrontPageModule {
}
