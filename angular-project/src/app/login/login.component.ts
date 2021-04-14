import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  username:string;
  pass:string;
  decision:boolean;
 
  constructor(private router:Router) { }
    

  login(){
    
    if(this.username == "admin" && this.pass == "admin"){
     sessionStorage.setItem('loggedInUsername', this.username);
     this.decision=true;
     alert("Login successful");
     console.log("valid admin");
    this.router.navigate(['admin-dashboard']);
    }
  else if(this.username == 'shiv' && this.pass == '1305'){
      sessionStorage.setItem('loggedInUsername', this.username);
      this.decision=true;
      alert("welcome user");
      this.router.navigate(['user-dashboard']);
    }

    else{
      
    this.decision=false;
    alert("login denied");
    }

  }

}

  

