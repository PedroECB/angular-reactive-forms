import { Component, HostListener, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';

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


@HostListener('document:keypress', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {

  if (event.keyCode == 11) {
    // this.preencherDados()
    console.log(event)
  }
}

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }



  onSubmit(){
    console.log('Submit form...')
    console.log(this.usuario)
  }




}
