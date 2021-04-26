import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../appmodel/question';
import { Subject } from '../appmodel/admin-subject';
import { QuestionService } from '../question.service';

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  subjectNameAndId: any=[];
  id: number;
  ques: Question = new Question();
  subject: any=[];
  subName: any;


  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.questionService.getSubAndId().subscribe(data =>{
      this.subjectNameAndId = data;
    })
  }
  add(){
    
   this.ques.subject.id=this.subName;
  //  alert(JSON.stringify(this.ques))
    this.questionService.addQuestion(this.ques).subscribe(data =>{
      // alert(JSON.stringify(data));
      alert("Question added successfully!");
      data=this.ques;
    window.location.reload();
    })
  }
    /*fetchSubject(){
      this.questionService.getSubAndId(this.subName).subscribe(data =>{
        this.subject = data;
      })
    }*/

}
