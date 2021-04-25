import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{
  rid :number;
  score: number;
  attempts: number;
  status: number;
  subject: string;
  level: string;
  highestMarks: string;
  urlLevel: number;

  constructor(private service: RegisterService) { }

  result(){
    if(sessionStorage.getItem('level')=="Level 1"){
      this.urlLevel = 1;
    }
    else if(sessionStorage.getItem('level')=="Level 2"){
      this.urlLevel = 2;
    }
    else{
      this.urlLevel = 3;
    }
      this.rid = Number(sessionStorage.getItem('rid'));
      this.service.viewResult(3, sessionStorage.getItem('subject'), Number(sessionStorage.getItem('userId')),
      this.urlLevel).subscribe(value =>{
      this.score = value['score'];
      this.attempts = value['attempts'];
      this.status = value['status'];
      this.subject = sessionStorage.getItem('subject');
      this.level = sessionStorage.getItem('level');
      this.highestMarks = value['highestMarks']
  })
  }

}
