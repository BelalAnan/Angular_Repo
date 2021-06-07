import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {Customer} from './Customer'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer =new Customer();

  constructor() { }

  ngOnInit(): void {
  }
  save(customerform:NgForm)
  {
    

    console.log(customerform);
    console.log("-------------------------------------------")

    console.log(customerform.form);
    console.log("-------------------------------------------")

    console.log('saved : ' + JSON.stringify(customerform.value));
  }
 
}
