import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn:'root'
})
export class LoginService {

  constructor() { }



  cadastrarUsuario(user:User): User{
    // console.log('Autenticando usuário...')
    // console.log(user)
    return user
  }


  getUsers():Promise<User[]>{

    return new Promise((resolve, reject)=>{
      resolve([
        {
          Nome:'Pedro Carvalho',
          Email:'pedro@gmail.com',
          CPF:'000.000.000-23',
          Salario: 0,
          DataNascimento:'09/06/1960',
          Senha:'123',
          ConfirmacaoSenha:'123'
        },
        {
          Nome:'Luiz Silva',
          Email:'pedro@gmail.com',
          CPF:'000.000.000-12',
          Salario: 0,
          DataNascimento:'09/06/1985',
          Senha:'123',
          ConfirmacaoSenha:'123'
        },
        {
          Nome:'Maria Angélica',
          Email:'maria21@gmail.com',
          CPF:'000.000.000-11',
          Salario: 1000,
          DataNascimento:'09/06/1990',
          Senha:'123',
          ConfirmacaoSenha:'123'
        },
      ])
    })
  }
}
