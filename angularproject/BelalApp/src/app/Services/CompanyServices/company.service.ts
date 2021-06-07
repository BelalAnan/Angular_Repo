import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { IEmployee } from 'src/app/company/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 private url ='http://localhost:5555/api/employees';
  constructor(private http:HttpClient) { }
 GetEmployees():Observable<IEmployee[]>
 {
   return this.http.get<IEmployee[]>(this.url).pipe
   (
     tap(data=>console.log('all',JSON.stringify(data)))
   )
 }
 GetEmployeebyid(id:number):Observable<IEmployee>
 {
   return this.http.get<IEmployee>(`http://localhost:5555/api/employees/${id}`)
 }

 AddEmployee(newemployee:IEmployee):Observable<IEmployee>
 {
   return this.http.post<IEmployee>(this.url,newemployee,{
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })}).pipe(
      tap(
      (emp)=>  console.log("Creating element" + emp)
      ),catchError(this.handleError)
    )
   
 }
 UpdateEmployee(updatedEmp:IEmployee):Observable<void>
 {
   return this.http.put<void>(`http://localhost:5555/api/employees/${updatedEmp.id}`,updatedEmp,{
    headers:new HttpHeaders({ 
   'Content-Type':'application/json'

   })}).pipe(
    tap(
    ()=>  console.log("updating element")
    ),catchError(this.handleError)
  )
 
 }
 
  DeleteEmployee(EmpId:number):Observable<void>
  {
    return this.http.delete<void>(`http://localhost:5555/api/employees/${EmpId}`);
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
