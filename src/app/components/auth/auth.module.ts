import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { InputAuthFormComponent } from './shared/input-auth-form/input-auth-form.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    InputAuthFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent, pathMatch: 'full' },
    ]),
  ]
})

export class  AuthModule { }
