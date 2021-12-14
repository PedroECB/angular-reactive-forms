import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgxCurrencyModule, CurrencyMaskInputMode } from 'ngx-currency';
import { NgxMaskModule } from 'ngx-mask';
import { FormNativeValidationComponent } from './form-native-validation/form-native-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    FormNativeValidationComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxCurrencyModule,
    NgxMaskModule

  ],
  exports:[
    CadastroComponent,
    LoginComponent,
    FormNativeValidationComponent,
    ReactiveFormComponent
  ],
  providers:[

  ]
})
export class ComponentesModule { }
