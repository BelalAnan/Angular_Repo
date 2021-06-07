import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CompanyService} from '../../Services/CompanyServices/company.service'
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../IEmployee';
import { Observable, Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
Employee:IEmployee|undefined
sub :Subscription|undefined
errorMess='';
errorMess2='';
TITLE="Deleting Employee"

  constructor(private route:ActivatedRoute,  private router:Router,private compservice:CompanyService) { }

  ngOnInit(): void {
     const id=Number(this.route.snapshot.paramMap.get('id'))
     this.sub= this.compservice.GetEmployeebyid(id).subscribe({
       next:Employee=>{
        this.Employee=Employee
       },
       error:err=>{
         console.log(err)
       
       },complete:()=>{
         console.log("delete page is done with emp")

       }

       
     })
    
  
 
  }
  go()
  {
    this.compservice.DeleteEmployee(this.Employee!.id).subscribe(
      {
        next:()=>{
          console.log("delete emp")
        },error:err=>{
          this.errorMess2=err
          console.log(this.errorMess2)
        },complete:()=>this.onSaveComplete()
       
      })
    }
    onSaveComplete()
    {
       this.router.navigate(['Employees'])
    }
}
