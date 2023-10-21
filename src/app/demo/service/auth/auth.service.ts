import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResponseModel } from "src/app/models/login.model";
import { ResponseModel } from "src/app/models/response.model";
import { LoginComponent } from "../../components/auth/login/login.component";
import { RessetPasswordModel } from "src/app/models/resset-password/resset-password.model";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'user-token';

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    url: string = 'https://localhost:7097/api/';

   constructor(/* @Inject('BASE_URL') private baseUrl: string, */ private http: HttpClient) {
    
   }

    login(username: string, password: string): Observable<ResponseModel<AuthResponseModel>>{
       return this.http.post<ResponseModel<AuthResponseModel>>(this.url + 'Auth/Login', {username, password})          
    }

    ressetPassword(ressetPassword: RessetPasswordModel) : Observable<ResponseModel<AuthResponseModel>>{
        return this.http.post<ResponseModel<AuthResponseModel>>(this.url + 'Auth/RessetPassword', ressetPassword) 
    }
    
    logOut(): void{

        window.sessionStorage.clear();
    }

    saveToken(token: string){
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token)
    }
    
    getToken(){
       return window.sessionStorage.getItem(TOKEN_KEY);
    }

    saveUser(user: any){
       window.sessionStorage.removeItem(USER_KEY)
       window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
    }

    getUser(): any{
      const user = window.sessionStorage.getItem(USER_KEY);
      if(user){
        return JSON.parse(user)
      }
      return {};
    }
}