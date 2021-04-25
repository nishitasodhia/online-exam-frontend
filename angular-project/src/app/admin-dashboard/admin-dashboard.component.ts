import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 username:string;
  constructor() { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('loggedInUsername');
  }
}
