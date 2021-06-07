import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../productlist/product';
import { ProductService } from '../Services/ProductServices/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  ProductTile="Welcome To Product no"
  product :IProduct |undefined;
  sub:Subscription|undefined
  constructor(private route:ActivatedRoute,private router:Router,private pservice:ProductService) { }

  ngOnInit(): void {
   const id= Number(this.route.snapshot.paramMap.get('id'));
  this.ProductTile+=`${id}`;
  this.sub=this.pservice.GetProductbyid(id).subscribe({
    next:(res)=>this.product=res,
    error:(err)=>console.log(err),
    complete:()=>console.log("it's done baby")
  })
  
  }
  return() :void
  {
      this.router.navigate(['/products'])
  }
onBack()
{
this.router.navigate(['/products'])
}

}
