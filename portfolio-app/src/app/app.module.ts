import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FrontPageModule} from "./pages/front-page/front-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
