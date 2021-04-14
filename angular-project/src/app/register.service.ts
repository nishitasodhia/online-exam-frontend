import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user-registration/user-registration.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  addUser( user: User) : Observable<object>{
    let url="http://localhost:8181/java-project/registerUser.lti";
    return this.http.post(url,user);
  }
  fetchUser(s_city: String) :Observable<object>{
    let url = "http://localhost:8181/java-project/searchUser.lti?city= "+s_city;
    return this.http.get<User>(url);
  }
}
