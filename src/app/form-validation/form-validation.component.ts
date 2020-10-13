import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatInput } from '@angular/material/input';

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

@ViewChild('nameit') nameInput:ElementRef;

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
  
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if(this.nameInput.nativeElement.focused){
      this.nameInput.nativeElement.focus();
    }
    
}


  onSubmit(form){
    console.log('Submit user registration')
    console.log(this.user)
    console.log(form)
  }




}
