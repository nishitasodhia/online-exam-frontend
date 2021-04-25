import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { User } from './appmodel/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) {}
  //private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus())

  addUser( user: User) : Observable<object>{
    let url="http://localhost:8086/register";
    return this.http.post(url,user);
  }
  login(login: Login) :Observable<object>{
    let url = "http://localhost:8086/login";
    return this.http.post(url, login);
  }

  subId(subName: string): Observable<object>{
    let url = "http://localhost:8086/subName?subName="+subName;
    return this.http.get(url);
  }

  level(sName: String, uid: number, level: number ): Observable<object>{
    let url = "http://localhost:8086/score?sName="+sName+"&uid="+uid+"&level="+level;
    return this.http.get(url);
  }

  viewResult(rid: number, sName: String, uid: number, level: number){
    let url = "http://localhost:8086/rid?rid="+rid+"&sName="+sName+"&uid="+uid+"&level="+level;
    return this.http.get(url);
  }

  testHistory(uid: number){
    let url = "http://localhost:8086/resultHistory?uid="+uid;
    return this.http.get(url);
  }

  searchUser(subject: string, level: number, city: string, state: string){
    let url = "http://localhost:8086/adminSearch?subject="+subject+"&level="+level+"&city="+city+"&state="+state;
    return this.http.get(url);
  }
  /*checkLoginStatus() : boolean{
    return false;
  }

  logout(){
    this.loginStatus.next(false);
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('level');
    sessionStorage.removeItem('subject');
    sessionStorage.removeItem('userDetails');
    sessionStorage.removeItem('tHistory');
    sessionStorage.removeItem('attempts');
    sessionStorage.setItem('loginStatus','0');
    alert("Logged out successfully!");
    this.router.navigate(['login']);
  }

  get isLoggesIn(){
    return this.loginStatus.asObservable();
  }

  /*get currentUserName(){
    return 
  }
  */
}
