import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {

  levelSelected : number;
  subName: string;
  subject: any=[];
  data: any;
  status:boolean;
  constructor(private route: ActivatedRoute, private service: QuestionService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.levelSelected = params.levelValue;
      this.subName = params.subName;
      //this.status = params.status;
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

}
