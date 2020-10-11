import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontPageComponent} from "./pages/front-page/front-page.component";


const routes: Routes = [
  { path: "", redirectTo: "front-page", pathMatch: "full" },
  {
    path: "front-page",
    component: FrontPageComponent
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
