import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

usuario:User = {
  Nome: '',
  CPF: '',
  DataNascimento: '',
  Email: '',
  Salario: 0,
  Telefone:'',
  Senha: '',
  ConfirmacaoSenha:''
}

  constructor() { }

  ngOnInit(): void {
  }



  onSubmit(){
    console.log('Submit form...')
    console.log(this.usuario)
  }

}
