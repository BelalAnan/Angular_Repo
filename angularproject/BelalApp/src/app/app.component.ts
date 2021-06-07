import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IToken } from './login/itoken';
import { AuthserviceService } from './Services/AuthService/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'BelalApp';
  pageTitle:string="belal page";
 checklogging:boolean=true;
token:string="no"
  constructor(public auth:AuthserviceService,private router :Router) {}
  
  ngOnInit()
  {
   // this.checklogging=this.auth.Isloggedin()
   // console.log(this.checklogging+ " from app component")
   let token=localStorage.getItem("token");
   if(token!=null)
   {

     this.checklogging=true;
     console.log(token+ " not null")
     console.log(this.checklogging)
   }else
   {
    this.checklogging=false;
    console.log(token + " no ")

    console.log(this.checklogging)
    

   }
  }
  



    
  
  Logout()
  {
    this.auth.Loggingout()
    this.checklogging=false

  }
}
