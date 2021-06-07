import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { IEmployee } from '../IEmployee';
import { HttpClient } from '@angular/common/http';
import {CompanyService} from '../../Services/CompanyServices/company.service'
import { ThisReceiver } from '@angular/compiler';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { NgForm, NgModel } from '@angular/forms';
import { IDepartment } from '../idepartment';
import { DepartmentService } from 'src/app/Services/departmentServices/department.service';


@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})
export class EmployeDetailComponent implements OnInit {
Employee:IEmployee|undefined
Department:IDepartment[]=[]
EmployeeTitle="Employee required to modifiy"
sub :Subscription|undefined
errorMess='';

  constructor(private route:ActivatedRoute,private router :Router,private compservice:CompanyService,private depser:DepartmentService) { }


  ngOnInit(): void {
    const id= Number(this.route.snapshot.params['id'])
    this.sub=this.compservice.GetEmployeebyid(id).subscribe({
      next:Employee=>{
        this.Employee=Employee;
        console.log(this.Employee);
      },
      error:err=>this.errorMess=err,
      complete:()=>console.log("ok belal it's done")
    })
    this.depser.GetDept().subscribe({
      next:(res)=>this.Department=res,
      error:(err)=>console.log(err),
      complete:()=>console.log("dept is done")
  
    })
   
  }
  Empsub(Employeeform:NgForm)
  {
    console.log(Employeeform.value)
   this.compservice.UpdateEmployee(Employeeform.value).subscribe({
     next:()=>this.onSaveComplete(),
     error:(err)=>{
       this.errorMess=err;
       console.log(this.errorMess);
     }
    });
  }
  onSaveComplete()
  {
     this.router.navigate(['/Employees'])
  }
}
