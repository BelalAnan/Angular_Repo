import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from '../Services/AuthService/authservice.service';
import { IRegisteruser } from './iregisteruser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:IRegisteruser={UserName:"",Password:"",Email:"",ConfirmPassword:""}

  constructor(private serviceauth:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  save(form:NgForm)
  {
 this.serviceauth.Signup(form.value).subscribe({
   next:()=>console.log("ok you signed up successfully"),
   error:(err)=>console.log(err),
   complete:()=>this.router.navigate(['Login'])
 })
  }

}
