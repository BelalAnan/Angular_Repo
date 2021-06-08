import { Injectable } from '@angular/core';
import { JwtModule,JwtHelperService} from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { IUser } from 'src/app/login/iuser';
import {catchError,tap} from 'rxjs/operators';
import { IToken } from 'src/app/login/itoken';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { IRegisteruser } from 'src/app/register/iregisteruser';




@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
user:IUser={UserName:"",password:""}
obj:IToken|undefined

private url ='http://localhost:4444/api/accounts';
private url2='http://localhost:4444/api/register';


  constructor(private http:HttpClient,private jwtservice:JwtHelperService) { }
  Senduser(credentials:IUser)
  {
    return this.http.post<IToken>(this.url,credentials,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).pipe(
        map(res=>{
          let result=res;
          if(result&&result.token)
          {
            console.log(res);
            localStorage.setItem('token',result.token);
            localStorage.setItem('expired',result.expiration);
       
            return true;
          }
        
        
            return false
       
        
        }
        
        ),catchError(this.handleError)
      )
  }
   Loggingout()
   {
     localStorage.removeItem("token")
     localStorage.removeItem("expired")
   }
   Isloggedin()
   {
     var firsttoken=localStorage.getItem("token");
     var expiredtoken=localStorage.getItem("expired");
    if(firsttoken==null&&expiredtoken==null)
   {
    return false;
   }      
    else
    {
     

      return true;

    }
   
    // return false;
   }
   Getuser()
   {
     let tokens=localStorage.getItem("token");
     if(tokens!=null)
     {
          return new JwtHelperService().decodeToken(tokens);
     }
   }
   Signup(user:IRegisteruser):Observable<void>
   {
     return this.http.post<void>(this.url2,user)
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
  //console.error(errormsg);
  return throwError(errormsg);
  }

  }
  

