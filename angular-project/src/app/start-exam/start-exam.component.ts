import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  subject: string;
  level: string;
  attempts: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subject= sessionStorage.getItem('subject');
    this.level= sessionStorage.getItem('level');
    this.attempts= sessionStorage.getItem('attempts');
  }
  
  fetchQuestions(){
    this.router.navigate(['app-exam'])
  }
}