import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../Services/ProductServices/product.service';
import { IProduct } from './product';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [ProductService]
})
export class ProductlistComponent implements OnInit , OnDestroy {
  PageTitle="Product List";
  imagewidth=50;
  imagemargin=2;
  sub:Subscription|undefined;
  sub2:Subscription|undefined;
  errorMess='';
  isdisabled=false;
  private _listfiler='';
  get listfilter()
  {
    return this._listfiler;
  }
  set listfilter(value:string)
  {
    this._listfiler=value;
    console.log("this filter",value);
    this.filterproducts=this.performfilter(value);
  }
  filterproducts:IProduct[]=[];
  products:IProduct[]=[]
    

  
  constructor(private pservice:ProductService,private router:Router) { }


  ngOnInit(): void {
  /*this.sub=  this.pservice.getproducts().subscribe({
    next:products=>{
      this.products=products;
      this.filterproducts=this.products;

    },
    error:err=>this.errorMess=err
    })*/
 this.sub2=this.pservice.Getproduct().subscribe(
   {
     next:(products)=>{
       this.products=products;
       this.filterproducts=this.products;

       console.log(this.products);
     },
     error:(err)=>this.errorMess=err,
     complete:()=>console.log("all done with auth data")
     
   }
 )
     
  }
  ngOnDestroy():void
  {
this.sub?.unsubscribe();
  }
  hide()
{
 
     this.isdisabled=!this.isdisabled;
  
}
performfilter(filterby:string):IProduct[]
{
  filterby=filterby.toLowerCase();
 return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().includes(filterby));
}
Myfun(message:string):void
{
this.PageTitle="Product List  ";
this.PageTitle+=message;
}
createnew()
{
this.router.navigate(['productcreate'])
}
}



