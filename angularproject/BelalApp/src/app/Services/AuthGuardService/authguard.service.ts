import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from '../AuthService/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth:AuthserviceService,private router :Router) { }
  canActivate(route:any,state:RouterStateSnapshot)
  {
  if(this.auth.Isloggedin()) return true;
    this.router.navigate(['/Login'],{queryParams:{returnUrl: state.url}});
    return false;

  }
}
