import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'display-searched-user',
  templateUrl: './display-searched-user.component.html',
  styleUrls: ['./display-searched-user.component.css']
})
export class DisplaySearchedUserComponent{
  display : any = JSON.parse(sessionStorage.getItem('userDetails'));
  id : number;
  constructor(private service: RegisterService, private router: Router) {}
 
  details(value){
    //console.log(value);
      this.service.testHistory(value).subscribe(data =>{
      sessionStorage.setItem('tHistory',JSON.stringify(data));
      this.router.navigate(['test-history-page']);
    })
  }
}