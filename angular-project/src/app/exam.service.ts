import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }

  getQuestions(subName:string,level:number) : Observable<any> {
    let url = "http://localhost:9091/viewQue/"+subName+"/"+level+"/"+1;
   return this.http.get(url); 
  }

}
