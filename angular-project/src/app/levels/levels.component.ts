import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  lev: string;
  userId: number;
  selectedLevel: number;
  attempts: string;
  constructor(private service: RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  startTest(level){

    this.userId=Number(sessionStorage.getItem('userId'));
    this.lev= level.textContent;
    sessionStorage.setItem('level', String(this.lev));

    if(this.lev=="Level 1"){
      this.selectedLevel=1;
      this.service.level(sessionStorage.getItem('subject'), this.userId, this.selectedLevel).subscribe(value => {
        sessionStorage.setItem('attempts',value['attempts']);
      })
      this.attempts=sessionStorage.getItem('attempts');
      this.router.navigate(['start-exam']);
    }

    else if(this.lev=="Level 2"){
      this.selectedLevel=2;
      this.navigate(this.selectedLevel);
    }

    else{
      this.selectedLevel=3;
     this.navigate(this.selectedLevel);
    } 
  }

  navigate(selectedLevel){
      //alert("Inside subid subscription")
      this.service.level(sessionStorage.getItem('subject'), this.userId, selectedLevel).subscribe(value => {
        sessionStorage.setItem('attempts',value['attempts']);
        this.attempts=sessionStorage.getItem('attempts');
      })
      this.service.level(sessionStorage.getItem("subject"), this.userId, selectedLevel-1).subscribe(value => {
        //alert("Inside level subscription")
        //alert("Selected level: "+this.selectedLevel)
        console.log(value["attempts"]); 
        if(value["status"]=="Fail"){
          alert("Please clear previous level")
        }
        else{
          this.router.navigate(['start-exam']);
        }
      })
    
  }
}
