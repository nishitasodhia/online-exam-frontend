import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-remove-levels',
  templateUrl: './remove-levels.component.html',
  styleUrls: ['./remove-levels.component.css']
})
export class RemoveLevelsComponent implements OnInit {

  subjectName : String = "";
  

  constructor(private route: ActivatedRoute, private service: QuestionService ,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.subjectName = params.questionValue;
      console.log(this.subjectName); // price
    }
  );
}
sendDataToRemoveDisplay(e){
  let value = e;
  this.router.navigate(['/remove-question-display'], { queryParams: { levelValue: value ,subName : this.subjectName } });
}
}
