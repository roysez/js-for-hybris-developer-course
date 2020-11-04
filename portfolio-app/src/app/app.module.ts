import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FrontPageModule} from "./pages/front-page/front-page.module";
import {HomeModule} from "./pages/home/home.module";
import {AdminModule} from "./pages/admin/admin.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/skill.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontPageModule,
    AdminModule,
    HomeModule,
    NgbModule,
    StoreModule.forRoot({
      skill: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
