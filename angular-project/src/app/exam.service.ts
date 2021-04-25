import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }

  getQuestions(subName:string,level:number,status:boolean) : Observable<any> {
    let url = "http://localhost:9191/viewQue/Java/3/true";
   return this.http.get(url); 
  }

}
