import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
   
  first_name:String;
  middle_name:string;
  last_name:string;
  email:string;
  mobile:string;
  city:string;
  dob:Date;
  state:string;
  qualification:string;
  yoc:Date;
  password:string;
  constructor() { }

  

}
