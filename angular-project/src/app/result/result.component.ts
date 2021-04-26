import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveResultDto } from '../appmodel/saveResultDto';
import { RegisterService } from '../register.service';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

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
  uid: number;
  sid: number;
  srd : SaveResultDto = new SaveResultDto();

  constructor(private service: RegisterService, private router: Router) {
    if(sessionStorage.getItem('level')=="Level 1"){
      this.urlLevel = 1;
    }
    else if(sessionStorage.getItem('level')=="Level 2"){
      this.urlLevel = 2;
    }
    else{
      this.urlLevel = 3;
    }
   
    this.srd.score = Number(sessionStorage.getItem('marks'));
    this.srd.attempts = Number(sessionStorage.getItem('attempts'))+1;
    this.srd.level = this.urlLevel;
    this.srd.user.id = Number(sessionStorage.getItem('userId'));
    this.srd.subject.id= Number(sessionStorage.getItem('sid'));    

    //this.rid = Number(sessionStorage.getItem('rid'));
    this.service.viewResult(this.srd).subscribe(value =>{
      alert(JSON.stringify(value))

          this.score = value['score'];
          this.attempts = value['attempts'];
          this.status = value['status'];
          this.subject = sessionStorage.getItem('subject');
          this.level = sessionStorage.getItem('level');
          })
  }
  }

/*userDashboard() {
  this.router.navigate(['user-dashboard']);
}

function userDashboard() {
  
}*/
  // // // // result(){
  // // // //   if(sessionStorage.getItem('level')=="Level 1"){
  // // // //     this.urlLevel = 1;
  // // // //   }
  // // // //   else if(sessionStorage.getItem('level')=="Level 2"){
  // // // //     this.urlLevel = 2;
  // // // //   }
  // // // //   else{
  // // // //     this.urlLevel = 3;
  // // // //   }
   
  // // // //   this.srd.score = Number(sessionStorage.getItem('marks'));
  // // // //   this.srd.attempts = Number(sessionStorage.getItem('attempts'));
  // // // //   this.srd.level = this.urlLevel;
  // // // //   this.srd.user.id = Number(sessionStorage.getItem('userId'));
  // // // //   this.srd.subject.id= Number(sessionStorage.getItem('sid'));    

  // // // //   //this.rid = Number(sessionStorage.getItem('rid'));
  // // // //   this.service.viewResult(this.srd).subscribe(value =>{
  // // // //     alert(JSON.stringify(value))

  // // // //         this.score = value['score'];
  // // // //         this.attempts = value['attempts'];
  // // // //         this.status = value['status'];
  // // // //         this.subject = sessionStorage.getItem('subject');
  // // // //         this.level = sessionStorage.getItem('level');
  // // // //         })
  // // // // }

//}
