import { Component, OnInit } from '@angular/core';

export interface User{
  name:string;
  lastName:string;
  email:string;
  password:string;
  confirmPassword:string;
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  user:User = {
    name: "",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: ""
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formUser){
    console.log("Deu submit no form")
    console.log(formUser)
  }
}
