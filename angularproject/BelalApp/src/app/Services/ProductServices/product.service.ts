import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/productlist/product';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { IToken } from 'src/app/login/itoken';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url ='http://localhost:4444/api/products';


  products:IProduct[]=[];
  constructor(private http:HttpClient) { }
  
  Getproduct():Observable<IProduct[]>
  {
     var token= localStorage.getItem("token");
    return this.http.get<IProduct[]>(this.url,{
      headers:new HttpHeaders({
        'Authorization':'Bearer '+token,
        'Content-Type':'application/json'


      })}).pipe(
        tap(data=>console.log('all',JSON.stringify(data))),
        catchError(this.handleError)
      )    
    
  }
  GetProductbyid(id:any):Observable<IProduct>
  {
    var token= localStorage.getItem("token");

   return this.http.get<IProduct>(`http://localhost:4444/api/products/${id}`,{
     headers:new HttpHeaders({
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
     })
   }).pipe(
     tap((res)=>console.log("iam get singl independ product")),

     catchError(this.handleError)
     
   )
  }
  UpdateProduct(product:IProduct):Observable<void>
  {
    var token= localStorage.getItem("token");

   return this.http.put<void>(`http://localhost:4444/api/products/${product.productId}`,product,{
    headers: new HttpHeaders({
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
    })
   })
  }
  AddProduct(product:IProduct):Observable<IProduct>
  {
    var token= localStorage.getItem("token");

    return this.http.post<IProduct>(this.url,product,{
     headers:new HttpHeaders({
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
    })})
 
  }
  
  

private handleError(err:HttpErrorResponse)
{
let errormsg='';
if(err.error instanceof ErrorEvent)
{
  errormsg=`an error has occured :${err.error.message}}`;
}else{
 errormsg=  `server return code ${err.status},error message is ${err.message}`;
}
console.error(errormsg);
return throwError(errormsg);
}
}