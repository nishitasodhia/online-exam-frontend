import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
    function closeNav(){
      this.show=true;
      if(this.router.navigate[('admin-dashboard')]==true){
      this.show=false;
      }
      else{
      this.show=true;
      }
    }
  }

}

