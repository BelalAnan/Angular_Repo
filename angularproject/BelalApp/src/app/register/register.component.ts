import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Services/AuthService/authservice.service';
import { IRegisteruser } from './iregisteruser';
import {}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
User:IRegisteruser={UserName:"",Password:"",Email:""}

  constructor(private serviceauth:AuthserviceService) { }

  ngOnInit(): void {
  }

}
