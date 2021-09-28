import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/servicos/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  hide: boolean = true
  Usuario: User = {
    CPF: '',
    Email: '',
    ConfirmacaoSenha: '',
    Nome: '',
    DataNascimento: '',
    Salario: 0,
    Senha: ''
  }

  listaUsuarios: User[];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("On init cadastro")

    this.loginService.getUsers()
      .then((returnData: User[]) => {
        this.listaUsuarios = returnData

        console.log(this.listaUsuarios)
      })
  }


  submitForm() {
    console.log('Submit Form...');
    console.log(this.Usuario);

    this.loginService.cadastrarUsuario(this.Usuario)

  }

  onSubmit() {
    console.log('OnSubmit...');
    console.log(this.Usuario);
  }

}
