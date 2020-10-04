import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Router} from '@angular/router';

export interface Cliente{
  nome: string;
  sobrenome: string;
  nascimento: string;
  estado:string;
  cidade: string;
  rua: string;
  telefone:string;
  email:string;
}


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  cliente:Cliente = {
      nome: "",
      sobrenome: "",
      nascimento: "", 
      estado:"AM",  
      cidade: "", 
      rua:"",
      email: "",
      telefone: ""
    }

  constructor(private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    // this.cliente.nascimento = new Date('01-01-2000').toISOString().substr(0, 10);
  }

  onSubmit(){
    console.log(this.cliente)
  }

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

 blur(input){
   this.cliente[input.name] = input.model.toUpperCase(); 
   
 }

 navigate(){
   this.router.navigate(["form-validation"])
 }

}
