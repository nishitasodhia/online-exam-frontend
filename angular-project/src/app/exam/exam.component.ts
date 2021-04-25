import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionbankdto } from '../appmodel/questionbankdto';
import { UserResponse } from '../appmodel/userResponse';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  length:number;
  subName:string;
  userid:number;
  level:number;
 questions:Questionbankdto[]=[];
  questionIndex:number;
  userResponse : UserResponse[]=[];
 marks:number=0;
 status:boolean;
 // questions:questionbankdto = new questionbankdto();
  isSubmitted : boolean = false;
  givenAnswer: string;

  
  //Timer
  sec:any = 600;
  countDown:any;
  min:any;
  remSec:any;
  constructor(private exam : ExamService,private router:Router) { 
    this.questionIndex=0; 
    this.level=parseInt(sessionStorage.getItem("level"));
    this.subName=sessionStorage.getItem("subName");
    
    this.exam.getQuestions(this.subName,this.level,this.status).subscribe(data=>{
    //this.questions=data;
      console.log(data);
      console.log(data.length);
      for(let i=0;i< data.length;i ++){
        var temp :Questionbankdto=new Questionbankdto();
        
        temp.id=data[i].id;
        temp.question=data[i].question;
        temp.option1=data[i].option1;
        temp.option2=data[i].option2;
        temp.option3=data[i].option3;
        temp.option4=data[i].option4;
        temp.correctAnswer=data[i].correctAnswer;
        this.questions.push(temp);
      }
    })
   
  }

  ngOnInit(): void {
  }
 //  ngAfterViewInit(){
  //    this.length=this.questions.length;
  //   this.createUserRespObj();
  // }

  // public createUserRespObj(){
  //    let i:number;
  //  for(i=0;i<this.questions.length;i++){
  //     this.userResponse.push(new UserResponse());
  //   }
  //  } 
  selectedAnswer: string;
  save(ans){
    var r = '';
    switch(ans){
      case'option1':
        // console.log(this.questions[this.questionIndex].option1);
        r = (this.questions[this.questionIndex].option1).toString();
        break;
      case'option2':
        // console.log(this.questions[this.questionIndex].option2);
        r = (this.questions[this.questionIndex].option2).toString();
        break;
      case'option3':
        // console.log(this.questions[this.questionIndex].option3);
        r = (this.questions[this.questionIndex].option3).toString();
        break;
      case'option4':
        // console.log(this.questions[this.questionIndex].option4);
        r = (this.questions[this.questionIndex].option4).toString();
        break;
    }
    this.selectedAnswer = r;
  }

  userName: UserResponse;
  saveAns(){
    this.givenAnswer = this.selectedAnswer;
    console.log(this.givenAnswer);
    this.userName = new UserResponse(this.questionIndex, this.givenAnswer)
    this.userResponse.push(this.userName)
  }
  change(i){
  this.questionIndex = i;
  }
//   public nextQues(){
//     // this.userResponse[this.questionIndex].answerGiven=this.givenAnswer;
//     // this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].id;
//     this.questionIndex++;
//  }

//    public prevQues(){
//     // this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].id;
//    this.questionIndex--;
//   }
 

   public submit(){
       this.isSubmitted=true;
       this.questions[this.questionIndex].id;
      //  this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].id;
      
       let i:number;
       for(i=0;i<this.questions.length;i++){     
        if(this.userResponse[i].answerGiven==this.questions[i].correctAnswer){
      
         this.marks+=10;
         }
       }
      console.log(this.userResponse);
     alert("You scored "+this.marks+" marks");
    }
 
    }
  //Timer
 //countDown   = setInterval(() =>      
  //this.secpass(), 1000);

//public secpass():any {
    //'use strict';    
     //this.min  = Math.floor(this.sec / 60);
       // this.remSec  = this.sec % 60;    
   // if (this.remSec < 10) {        
     //   this.remSec = '0' + this.remSec;    
/* }
if (this.min < 10) {        
    this.min = '0' + this.min;    
}
if(this.min==0 && this.sec==0 && this.isSubmitted==false){

  this.submit();
}
this.countDiv = this.min + ":" + this.remSec;

if (this.sec > 0) {        
    this.sec = this.sec - 1;        
} 
else {        
    clearInterval(this.countDown);               
}
} */

