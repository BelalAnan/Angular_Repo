import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from './iuser';
import { AuthserviceService} from '../Services/AuthService/authservice.service';
import { IToken } from './itoken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:IUser={UserName:"",password:""}
object:IToken={token:"",expiration:""}
invalidlogin:boolean=true;
imageURL='../../assets/images/login.jpeg'
  constructor(private authservice:AuthserviceService,private router :Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

save(Loginform:NgForm)

{
  

  this.user=Loginform.value
  this.authservice.Senduser(this.user).subscribe({
    next:(res)=>{
      if(res==true)
      {
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
        if(returnUrl)
        {
          this.router.navigate([returnUrl])
        }else
        {
          this.router.navigate(['/welcome'])
        }
       // this.router.navigate([returnUrl]||['/welcome'])
        
 


      }else
      {
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnn")
        this.invalidlogin=false
      }
    },error:(err)=>{
     // console.log(err);
      this.invalidlogin=false;
    }
  }
    
    
   // next:(res)=>this.object=res, 
    //error:(err)=>console.log(err),
   // complete:()=>console.log("ok bolbol token is gotten")
  )
  

  console.log('saved : ' + JSON.stringify(Loginform.value));
}
}
