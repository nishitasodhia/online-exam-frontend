import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-history-page',
  templateUrl: './test-history-page.component.html',
  styleUrls: ['./test-history-page.component.css']
})
export class TestHistoryPageComponent{
  testHistory:any = JSON.parse(sessionStorage.getItem('tHistory'));

  constructor() {}
} 
