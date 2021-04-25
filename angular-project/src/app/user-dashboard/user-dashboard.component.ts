import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  username:string;
  data: any;
  message: string="Test coming soon";
  subject: any;
  constructor(private service: RegisterService, private router: Router) {};

  ngOnInit():void{
  this.username=sessionStorage.getItem('userName');
  console.log(this.data)
  }

  java(text){
    this.subject= text.textContent
    //console.log(this.subject);
    sessionStorage.setItem('subject', String(this.subject));
    this.router.navigate(['levels'])
  }
 
  sql(text){
    this.subject= text.textContent
    //console.log(this.subject);
    sessionStorage.setItem('subject', String(this.subject));
    this.router.navigate(['levels'])
  }

  php(text){
    this.subject= text.textContent
    //console.log(this.subject);
    sessionStorage.setItem('subject', String(this.subject));
    this.router.navigate(['levels'])
  }

  net(){
    alert(
      this.message
    )
  }

  clang(){
    alert(
      this.message
    )
  }

  pylang(){
    alert(
      this.message
    )
  }

  testHistory(){
    this.service.testHistory(Number(sessionStorage.getItem('userId'))).subscribe( value => {
      sessionStorage.setItem('tHistory', JSON.stringify(value));
      this.router.navigate(['test-history-page']);
    })
  }

}
