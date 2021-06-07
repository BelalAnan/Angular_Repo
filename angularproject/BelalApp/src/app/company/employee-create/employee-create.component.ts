import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../IEmployee';
import {CompanyService} from '../../Services/CompanyServices/company.service'
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IDepartment } from '../idepartment';
import { DepartmentService } from 'src/app/Services/departmentServices/department.service';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
Employee:IEmployee={id:0 , name:"",address:"",departmentId:0,department:{id:0,name:""}}
Department:IDepartment[]=[]
sub :Subscription|undefined
errorMess='';
  constructor(private route:ActivatedRoute,private router :Router,private comserv:CompanyService,private depserv:DepartmentService) { }

  ngOnInit(): void {
    this.sub=this.depserv.GetDept().subscribe(
      {
        next:(res)=>(this.Department=res),
        error:(err)=>console.log(err),
        complete:()=>console.log("ok no problem")
      }
    )
  }
  Empsub(Employeeform:NgForm)
  {
    //console.log(Employeeform.value)
    this.comserv.AddEmployee(Employeeform.value).subscribe({
      
      next:(emp:IEmployee)=>{
        console.log(emp)
        this.onSaveComplete();

      },
      error:(err)=>console.log(this.errorMess)
    })
    
  }
  onSaveComplete()
  {
     this.router.navigate(['Employees'])
  }

}
