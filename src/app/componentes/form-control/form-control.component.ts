import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {


nome = new FormControl('')
email = new FormControl('');


  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {


    console.log(this.nome.value)

    this.nome.setValue('Pedro Henrique Bastos Carvalho')
    this.email.setValue('pedrosophbc@gmail.com')
    this.email.setValue(this.email.value.toString().toUpperCase())


    // this.getCep()

  }



  getCep(){

    let cep = '41387180';

    this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
    .toPromise()
    .then((retorno)=>{

      console.log('Retorno cep')
      console.log(retorno)

    })


  }

}
