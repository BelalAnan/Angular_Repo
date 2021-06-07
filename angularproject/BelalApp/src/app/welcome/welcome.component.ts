import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Services/AuthService/authservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public auth:AuthserviceService) { }

  ngOnInit(): void {
  }

}
