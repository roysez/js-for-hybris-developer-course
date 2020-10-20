import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {AdminAuthComponent} from "./admin-auth/admin-auth.component";

const adminPageRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "login",
        component: AdminAuthComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(adminPageRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
