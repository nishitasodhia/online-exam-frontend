import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user: User = new User();
  s_city: String;
  constructor(private service: RegisterService ) { }

  add(){
    this.service.addUser(this.user).subscribe(data=>{
      alert(JSON.stringify(this.user));
    })
  }
  
}
export class User{
  fname: String;
  lname: String;
  mname: String;
  email:String;
  phone: String;
  dob: String;
  gender:String;
  qualification: String;
  city: String;
  state:String;
  password:String;
  confirm_password:String;
  s_city:String;

}
