import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {LoginComponent} from './login.component'
import { AdminComponent } from '../admin/admin.component'
import { NoAccessComponent } from '../no-access/no-access.component';
import { RegisterComponent } from '../register/register.component';


import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LoginComponent,AdminComponent,NoAccessComponent,RegisterComponent],
  imports: [
    RouterModule.forChild([
      {path:'Login',component:LoginComponent},
      {path:'Signup',component:RegisterComponent},

      {path:'Admin',component:AdminComponent},
      {path:'NoAccess',component:NoAccessComponent},

  ]),
  SharedModule
  ]
})
export class LoginModule { }
