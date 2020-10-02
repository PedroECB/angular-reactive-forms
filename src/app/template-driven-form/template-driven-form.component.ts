import { Component, OnInit } from '@angular/core';

export interface Cliente{
  nome: string;
  sobrenome: string;
  nascimento: Date;
  estado:string;
  cidade: string;
  rua: string;
  telefone:string;
  telefone2:string;
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
      nascimento: new Date, 
      estado:"AM",  
      cidade: "", 
      rua:"",
      telefone: "",
      telefone2: ""
    }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente)
  }

}
