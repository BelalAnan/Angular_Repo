import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from '../customer/customer.component';
import {AuthguardService} from '../Services/AuthGuardService/authguard.service'


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [ 
    RouterModule.forChild([
      {path:'Customers',
       canActivate:[AuthguardService],
      component:CustomerComponent}
     
    ]),
    SharedModule
  ]
})
export class CustomerModule { }
