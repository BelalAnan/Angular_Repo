import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IEmployee} from '../../company/IEmployee'
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url ='http://localhost:5555/api/employees';

  constructor(private http:HttpClient) { }

  GetEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url).pipe(
    tap(data=>console.log('all',JSON.stringify(data)))
    )
  }
 
}
