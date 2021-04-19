import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  username:string;
  data: any;
  constructor() { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('userName');
    console.log(this.data)
  }
 

}
