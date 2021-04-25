import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../appmodel/user';
import { RegisterService } from '../register.service';

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno)){
      return true;
        }
      else
        {
        alert("invalid phone number");
        return false;
        }
}

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user: User = new User();
  theme:string;
  constructor(private service: RegisterService, private router: Router) { 

  }
  

  add(){
    //phonenumber(this.user.phoneNo);
    //alert(JSON.stringify(this.user));
    this.service.addUser(this.user).subscribe(data =>{
      //alert(JSON.stringify(data));
      if(data["status"] == true) {
        sessionStorage.setItem('userId', data["registeredUserId"]);
        this.router.navigate(['login']);
      }
    })
  }
}
