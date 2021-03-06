import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit {
  subName: string;
  subject: any=[];
  data: any;
  subjectNameSelection: any=[];
  
  constructor(private service: QuestionService,private router: Router) { }

  ngOnInit(): void {
    
      this.service.getDropDown().subscribe(data =>{
        this.subjectNameSelection = data;
      })
  }

  sendDataToAdminToRemove(e)
  {
   let value = e.target.innerText;
   this.router.navigate(['/remove-levels'], { queryParams: { questionValue: value  } });

console.log(e.target.innerText);
  }
}