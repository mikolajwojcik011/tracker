import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

//comp

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
