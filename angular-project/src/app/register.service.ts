import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  run( user: User) : Observable<object>{
    let url=;
    return this.http.post(url,user);
  }
}
