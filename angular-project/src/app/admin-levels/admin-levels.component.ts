import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'admin-levels',
  templateUrl: './admin-levels.component.html',
  styleUrls: ['./admin-levels.component.css']
})
export class AdminLevelsComponent implements OnInit {
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
sendDataToDisplay(e){
  let value = e;
  this.router.navigate(['/display-question'], { queryParams: { levelValue: value ,subName : this.subjectName } });
}
}
