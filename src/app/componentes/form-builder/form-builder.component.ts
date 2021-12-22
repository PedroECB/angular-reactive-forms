import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  // userForm = new FormGroup({
  //   nome: new FormControl('Pedro Henrique Bastos'),
  //   email: new FormControl('pedrosophbc@gmail.com'),
  //   cpf: new FormControl('093.231.323-31'),
  //   telefone: new FormControl('(81) 92323-3231'),
  //   endereco: new FormGroup({
  //     cep: new FormControl(''),
  //     rua: new FormControl(''),
  //     cidade: new FormControl(''),
  //     estado: new FormControl('')
  //   })
  // })

  userForm = this.formBuilder.group({
    nome: ['Pedro Henrique Bastos'],
    email: ['pedrosophbc'],
    cpf: ['093.231.323-31'],
    telefone: ['(81) 92323-3231'],
    endereco: this.formBuilder.group({
      cep: [''],
      rua: [''],
      cidade: [''],
      bairro: ['']
    })
  })


  constructor(private http:HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('Init FormBuilder')
  }



  submitForm() {
    console.log(this.userForm.value)
  }


  getDataAddress(){

    let cepValue = this.userForm.value.endereco.cep;
    let regCep = new RegExp(/^[0-9]{5}-[0-9]{3}$/gm)

    if(regCep.test(cepValue)){

      let cepSearch = cepValue.replace('-','')

      this.http.get(`https://viacep.com.br/ws/${cepSearch}/json/`)
      .toPromise()
      .then((returnData)=>{

        if(!returnData['erro']){
          console.log(returnData)
          this.userForm.get(['endereco', 'rua']).setValue(returnData['logradouro'])
          this.userForm.get(['endereco', 'cidade']).setValue(returnData['localidade'])
          this.userForm.get(['endereco', 'bairro']).setValue(returnData['bairro'])

        }

      })
    }


  }

}
