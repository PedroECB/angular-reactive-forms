import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 *
 * @param userForm -> Grupamento de formulário, que não precisa necessáriamente ser um <form>
 * @param FormGroup -> O FormGroup permite o aninhamento de formulários...
 * @param FormControl -> Usado para campos independentes (standalone)
 *
 *  */


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {


  userForm = new FormGroup({
    nome: new FormControl('Pedro Henrique'),
    email: new FormControl('pedrosophbc@gmail.com'),
    cpf: new FormControl('000.000.000-23'),
  });


  //FormGroup também pode user utilizado para aninhanmento de formulários
/*   userForm = new FormGroup({
    nome: new FormControl('Pedro Henrique'),
    email: new FormControl('pedrosophbc@gmail.com'),
    cpf: new FormControl('000.000.000-23'),
    endereco: new FormGroup({
      nome: new FormControl('Pedro Henrique'),
      email: new FormControl('pedrosophbc@gmail.com'),
      cpf: new FormControl('000.000.000-23'),
    })
  }); */

  constructor() { }

  ngOnInit(): void {
    console.log('Init first component!');
    // this.userForm.statusChanges.subscribe((change)=>{
    //   console.log(change)
    // })
  }




  submitForm() {
    console.log('%c Enviando dados do usuário', 'color: yellow');
    console.log(this.userForm.value);
    // console.log(this.userForm.value.nome)



  }

}
