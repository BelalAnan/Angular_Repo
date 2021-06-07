import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IDepartment} from '../../company/idepartment'
import {catchError,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
url="http://localhost:5555/api/departments"
Department:IDepartment[]|undefined
  constructor(private http:HttpClient) { }
GetDept():Observable<IDepartment[]>
{
  return this.http.get<IDepartment[]>(this.url).pipe(
    tap(data=>console.log('belal depart not from intercept'))

  );
}



}
