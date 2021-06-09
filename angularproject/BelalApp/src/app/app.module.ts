import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './product/product.module';
import {BookModule} from './BookStation/book/book.module';
import {CompanyModule} from './company/company.module'
import {AddheaderinterceptorInterceptor} from './addheaderinterceptor.interceptor'
import{LogresponseInterceptor} from './logresponse.interceptor'
import {CacheInterceptor} from './cache.interceptor'
import {CustomerModule} from '../app/customer/customer.module';
import {LoginModule} from './login/login.module';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    
      {path:'welcome',component:WelcomeComponent},
     
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'},
     
    ]),
    ProductModule,
    BookModule,
    CompanyModule,
    CustomerModule,
    LoginModule
  

 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,useClass:AddheaderinterceptorInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:LogresponseInterceptor,multi:true},{
         provide:HTTP_INTERCEPTORS,useClass:CacheInterceptor,multi:true},{

          provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
          JwtHelperService
    

    

  ],
  bootstrap: [AppComponent] //once per entire project
})
export class AppModule { }

//<app-student (StudentAdded)='Myfun($event)'></app-student>

