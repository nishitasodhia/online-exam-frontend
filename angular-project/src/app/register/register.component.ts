import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'register',
  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  
  user : User = new User();
  constructor(private service:RegisterService) { }
  run(){
    this.service.run(this.user).subscribe(data =>{
      alert(JSON.stringify(this.user));
    })
  }
  

}
export class User{
  fname:String;
  mname:string;
  lname:string;
  email:string;
  mobile:string;
  city:string;
  dob:Date;
  state:string;
  qualification:string;
  yoc:Date;
  password:string;
  confirm_password:string;
}
