import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { SignIn } from '../signin/sign-in';
import { ServerConstant } from 'src/app/common/server-constant';


@Injectable({
    providedIn: 'root'
  })


export class AccountService {
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-version':'TE_Web_1.0'
      })
    }


    constructor(private http: HttpClient) {


    }
    LoginUser(signin:SignIn): Observable<[]> {
      const signinObj = {
        "username": signin.UserName,
        "password": signin.Password
      };

      
      return this.http.post<[]>(ServerConstant.apiUrl + 'services/network/login',signinObj, this.httpOptions);
    }
    LogoutUser(): Observable<[]> {

     return this.http.get<[]>(ServerConstant.apiUrl + '/network/logout',this.httpOptions);

    }
    Signup(signupObj:any): Observable<[]> {

    
      return this.http.post<[]>(ServerConstant.apiUrl + 'services/network/user/register',signupObj,this.httpOptions);

    }
    ForgetPassword(email:string): Observable<[]> {
    
      return this.http.get<[]>(ServerConstant.apiUrl + 'unauthenticated/user/reset/password?username='+email,this.httpOptions);

    }
    updateProfile(id:any, userObj:any){
     
      return this.http.put<[]>(ServerConstant.apiUrl + 'services/network/user/update/profile'+id +userObj,this.httpOptions);
    }
    userProfile(id:String){
     
      return this.http.get<[]>(ServerConstant.apiUrl + 'services/network/user/profile'+id,this.httpOptions);
    }

  }
