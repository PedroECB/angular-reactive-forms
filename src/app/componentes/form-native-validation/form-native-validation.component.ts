import { DataSource } from '@angular/cdk/collections';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-native-validation',
  templateUrl: './form-native-validation.component.html',
  styleUrls: ['./form-native-validation.component.css']
})
export class FormNativeValidationComponent implements OnInit, AfterViewChecked {

  usuario = {
    nome: '',
    sobreNome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmacaoSenha: ''
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.keyCode == 11) {
      // console.log('CTRL + SHIFT + K')
      this.preencherDados()
    }
  }


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }


  onSubmit() {
    console.log('Submit form')
    console.log(this.usuario)
  }

  preencherDados() {
    this.usuario.nome = 'Joselino';
    this.usuario.sobreNome = 'Bezerra da Silva';
    this.usuario.email = 'josebezerra@gmail.com';
    this.usuario.senha = 'zezobrasil@2312';
    this.usuario.confirmacaoSenha = 'zezobrasil@2312';


  }


  toUpperCase(value: any) {
    // console.log(value)
    return value.toUpperCase();
  }

}
