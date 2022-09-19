import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService  implements CanActivate{

    constructor(private authService: AuthService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = this.authService.getToken();
        
        if(!token){
            this.router.navigate(['login']);
            return false;
        }

        //throw new Error("Method not implemented.");
        return true;
    }

}