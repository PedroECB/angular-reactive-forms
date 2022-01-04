import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsCustom } from '../utils/ValidatorsCustom';
/**
 *
 * @param FormGroup [FormGroup] -> Diretiva utilizada para determinar grupos de nível superior em formulários
 * @param FormGroupName FormGroupName -> Diretiva utilizada para determinar grupos de nível inferior (aninhado/nested) dentro de FormGroup em formulários
 * @param FormControlName FormControlName -> Diretiva para inputs em formGroups
 *
*/


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
    email: ['pedrosophbc@gmail.com', [Validators.required, Validators.minLength(10), Validators.email]],
    cpf: ['093.231.323-31', [Validators.required, ValidatorsCustom.ValidaCPF]],
    telefone: ['(81) 92323-3231', [Validators.required]],
    endereco: this.formBuilder.group({
      cep: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]]
    }),
    phones: this.formBuilder.array([''])
  })



  phones = this.userForm.get('phones') as FormArray;


  constructor(private http:HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('Init FormBuilder')

    console.log(this.phones.controls)
  }



  submitForm() {
    console.log(this.userForm.value)


    console.log(this.userForm.get(['nome']).valid)
    console.log(this.userForm.valid)
    this.userForm.get(['nome']).setErrors({cpfInvalid: true});
    // this.userForm.get(['nome']).se
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
          this.userForm.get(['endereco', 'rua']).setValue(returnData['logradouro'])
          this.userForm.get(['endereco', 'cidade']).setValue(returnData['localidade'])
          this.userForm.get(['endereco', 'bairro']).setValue(returnData['bairro'])
        }

      })
    }


  }



  addPhoneInput(){
    this.phones.push(this.formBuilder.control(''))
  }

}
