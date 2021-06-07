import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../productlist/product';
import { ProductService } from '../Services/ProductServices/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
product : IProduct={productId:0,productName:"",productCode:0,description:"",releaseDate:"2019-06-18T10:34:09",price:30,starrating:0
,imageurl:"hammer.jpg"}
sub:Subscription|undefined

  constructor(private prouctserv:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  prosub(Product:NgForm)
  {
  this.sub= this.prouctserv.AddProduct(Product.value).subscribe({
    next:(res)=>this.product=res,
    error:(err)=>console.log(err),
    complete:()=>this.router.navigate(['products'])

  })
  }
  returnback()
  {
this.router.navigate(['products'])
  }
}
