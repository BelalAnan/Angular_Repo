import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../Services/CompanyServices/company.service'
import { IEmployee } from '../IEmployee'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {DepartmentService} from '../../Services/departmentServices/department.service'
import { IDepartment } from '../idepartment';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
Employees:IEmployee[]=[]
Departments:IDepartment[]=[]
sub:Subscription|undefined;
sub2:Subscription|undefined;
errorMess=""
  constructor(private Comserv:CompanyService,private router:Router,private deptServ:DepartmentService) { }

  ngOnInit(): void {
 this.sub=this.Comserv.GetEmployees().subscribe(
   (data:IEmployee[])=>this.Employees=data,
   (err:any)=>console.log(err),
   ()=>console.log('all done getting all employees')
  
 )
 this.sub2=this.deptServ.GetDept().subscribe({
   next:(data)=>this.Departments=data,
   error:(err)=>console.log(err),
   complete:()=>{console.log("ok belal no intecept no serves")
   console.log(this.Departments)


 }
 }

    
 
   
 )
  }
  DeleteEmp(x:number)
  {
          this.Comserv.DeleteEmployee(x).subscribe({
            next:()=>{
              console.log("delete is done ")
              this.onSaveComplete()
            },
            error:(err)=>{
              this.errorMess=err;
              console.log(this.errorMess);
            },
            complete:()=>this.onSaveComplete()
          }
          )
  }
  ngOnDestroy():void
  {
this.sub?.unsubscribe;
  }
  onSaveComplete()
  {
     this.router.navigate(['Employees'])
  }
}
