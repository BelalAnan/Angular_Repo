import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../productlist/product';
import { ProductService } from '../Services/ProductServices/product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
      product:IProduct|undefined
      sub:Subscription|undefined
  constructor(private route:ActivatedRoute,private productservice:ProductService,private router:Router) { }
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.productservice.GetProductbyid(id).subscribe(
      {
        next:(res)=>
          this.product=res,
        error:(err)=>console.log(err)
      }
    )
  
  }
    prosub(product:NgForm)
    {
       this.sub=this.productservice.UpdateProduct(product.value).subscribe({
         next:()=>console.log("update product"),
         error:(err)=>console.log(err),
         complete:()=>console.log("done")
  
    })
    }
    returnback()
    {
      this.router.navigate(['/products'])
    }

  

}
