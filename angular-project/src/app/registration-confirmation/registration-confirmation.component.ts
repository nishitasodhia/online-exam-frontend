import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {

  userId: number;
  constructor() { }

  ngOnInit(): void {
    this.userId = parseInt(sessionStorage.getItem('userId'));
  }

}
