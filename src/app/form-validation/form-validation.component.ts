import { Component, OnInit } from '@angular/core';

export interface UserRegister{
  name:string;
  email:string;
  username:string;
  password:string;
  confirmPassword:string;
}

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  error:boolean = true
  hide:boolean= true
  hideSecondary:boolean= true

  user:UserRegister = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log('Submit user registration')
    console.log(this.user)
    console.log(form)
  }

}
