import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { User } from './appmodel/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  addUser( user: User) : Observable<object>{
    let url="http://localhost:8081/register";
    return this.http.post(url,user);
  }
  login(login: Login) :Observable<object>{
    let url = "http://localhost:8081/login";
    return this.http.post(url, login);
  }
}
