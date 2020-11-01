import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: "", redirectTo: "front-page", pathMatch: "full"},
  {path: "front-page", loadChildren: () => import('./pages/front-page/front-page.module').then(m => m.FrontPageModule)},
  {path: "home", loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule)},
  {path: "admin", loadChildren: () => import('./pages/admin/admin-routing.module').then(m => m.AdminRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
