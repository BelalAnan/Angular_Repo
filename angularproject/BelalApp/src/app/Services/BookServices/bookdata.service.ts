import { Injectable } from '@angular/core';
import {IBook} from '../../BookStation/book/Book';
import { IOldBook } from '../../BookStation/book/Core/oldBook';
import {map,tap} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookdataService {
  private url='assets/books.json';


  constructor(private http:HttpClient) { }
  GetAllbook():Observable<IBook[]>
  {
    return this.http.get<IBook[]>(this.url).pipe(
      tap(returning=>console.log(returning + " ya 3enyyyy"))
    )
  }
  GetbookbyID(id:number):Observable<IBook>
  {
    return this.http.get<IBook>(`/assets/books.json/${id}`);
  }
}
 /* GetOldBookByID(id:number):Observable<IOldBook>
  {
    return this.http.get<IBook>(`/assets/books.json/${id}`).pipe(
      map(b=><IOldBook>{
        id:b.id,
        title:b.title

      }
    ),
      tap(classicbook=>console.log(classicbook))
    );
  } */
 
 