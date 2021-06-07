import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { tap } from 'rxjs/operators';
import {CacheService} from './Services/CacheServices/cache.service'

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheservice:CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method!=='GET')
    {
      console.log(`invalidating cache which mean emptying it - ${request.url}`);
      this.cacheservice.invalidateCache();
      return next.handle(request);
     
    }

    var cachesresult:HttpResponse<unknown>= this.cacheservice.get(request.url)
    if(cachesresult)
    {
      console.log("wow chache is not empty")
      return of(cachesresult)
    }

    return next.handle(request).pipe(
      tap(
        event=>{
          if(event  instanceof HttpResponse)
          {
            console.log("iam getting data but cache is empty is iam putting it in cache")
                 this.cacheservice.put(request.url,event)
          }
        }
      )

    )
          
    
  }
}
