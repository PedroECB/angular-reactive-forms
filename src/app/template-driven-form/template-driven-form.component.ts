import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

export interface Cliente{
  nome: string;
  sobrenome: string;
  nascimento: Date;
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
      nascimento: new Date, 
      estado:"AM",  
      cidade: "", 
      rua:"",
      email: "",
      telefone: ""
    }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente)
  }

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

 blur(){
   this.cliente.nome = this.cliente.nome.toUpperCase();
 }

}
