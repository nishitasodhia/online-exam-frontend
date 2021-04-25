import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-remove-question-display',
  templateUrl: './remove-question-display.component.html',
  styleUrls: ['./remove-question-display.component.css']
})
export class RemoveQuestionDisplayComponent implements OnInit {
  levelSelected : number;
  subName: string;
  subject: any=[];
  questionList: any =[];

  constructor(private route: ActivatedRoute, private service: QuestionService) { }


  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params =>{
      console.log(params);
      this.levelSelected = params.levelValue;
      this.subName = params.subName;
      console.log(this.levelSelected); // price
    }
  );
  this.fetch();
  }
  fetch(){
  
    
    this.service.view(this.subName,this.levelSelected).subscribe(data=>{
      this.subject = data;
    })

  }
  checkboxClick(subject: any){
    console.log(subject);
    if(this.questionList.includes(subject.id)){

    }
    else{
      this.questionList.push(subject.id)
    }
    
  }
  delete(){
    
    this.service.inactiveQuestion(this.questionList).subscribe(data=>{
      
    },
  );
  this.fetch();
}
add(){
    
  this.service.activeQuestion(this.questionList).subscribe(data =>{

  })
this.fetch();
}

}