import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private request:any={}
  constructor() { }
  put(url:string,response:HttpResponse<unknown>):void{
 this.request[url]=response
  }
  get(url:string):HttpResponse<unknown>
  {
    return this.request[url]
  }
  invalidateUrl(url:string):void{
    this.request[url]=undefined
  }
  invalidateCache():void{
    this.request={}
  }
}
