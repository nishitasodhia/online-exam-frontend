import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from '../appmodel/search';
import { RegisterService } from '../register.service';

@Component({
  selector: 'search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {

  sub:string;
  lev:number;
  citys:string;
  states:string;

  constructor(private service: RegisterService, private router: Router) { }

  searchUser(){
    this.service.searchUser(this.sub,this.lev,this.citys,this.states).subscribe(data =>{
      sessionStorage.setItem('userDetails',JSON.stringify(data));
      this.router.navigate(['display-searched-user'])
    })
  }
}
