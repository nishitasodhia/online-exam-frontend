import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { RegisterService } from '../register.service';

@Component({
  selector: 'login',
 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  login: Login = new Login();
  message: string;
  decision: string;
  constructor(private registerService: RegisterService, private router:Router) { }
    

  loginCheck(){
    //console.log(this.login);
    this.registerService.login(this.login).subscribe(response => {
      //alert(JSON.stringify(response));
      alert(response["message"]);
      console.log(response);
      this.decision=response["status"];
      if(response["status"] == true) {
        this.message = response["message"];
        let userId = response["userId"];
        let userName = response["name"];
        sessionStorage.setItem('userId', String(userId));
        sessionStorage.setItem('userName', userName);
        this.router.navigate(['user-dashboard']);
      }
      else
        this.message = response["message"];
    })
  
    }

  }

  

