import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './appmodel/question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionActive(questionList: any) {
    throw new Error('Method not implemented.');
  }
  questionInactive: any;

  constructor(private http: HttpClient) { }

  view(subName: string, level: number){
    let url="http://localhost:9091/viewQuestion/"+subName+"/"+level;
    return this.http.get(url);
  }
 getDropDown(){
  let url="http://localhost:9091/fetchQuestion/";
    return this.http.get(url);
  }
  addQuestion(question: Question){
    let url="http://localhost:9091/add";
    return this.http.post(url, question);
  }
  getSubAndId(){
    let url="http://localhost:9091/fetchSubjects/";
    return this.http.get(url);
  }
 inactiveQuestion(subList : any){
    let url="http://localhost:9091/questionInactive";
    return this.http.post(url,subList);
  }
  activeQuestion(subList : any){
    let url="http://localhost:9091/questionActive";
    return this.http.post(url,subList);
  }
}
