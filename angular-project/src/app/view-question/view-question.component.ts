import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
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

  sendDataToAdmin(e)
  {
   let value = e.target.innerText;
   this.router.navigate(['/admin-levels'], { queryParams: { questionValue: value  } });

console.log(e.target.innerText);
  }
}
