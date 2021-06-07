import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { EmployeesListComponent } from '../company/employees-list/employees-list.component'
import { EmployeDetailComponent } from './EmployeeDetail/employe-detail.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { AuthguardService } from '../Services/AuthGuardService/authguard.service';



@NgModule({
  declarations: [ EmployeesListComponent,EmployeDetailComponent,EmployeeCreateComponent
   ,EmployeeDeleteComponent ],
  imports: [
    RouterModule.forChild([
      {path:'Employees',canActivate:[AuthguardService],component:EmployeesListComponent},
      {path:'EmpDetail/:id',canActivate:[AuthguardService],component:EmployeDetailComponent},
      {path:'EmpCreate',canActivate:[AuthguardService],component:EmployeeCreateComponent},
      {path:'Empdelete/:id',component:EmployeeDeleteComponent}

     
     
    ]),
    CommonModule,
    SharedModule
 
  ]
})
export class CompanyModule { }
