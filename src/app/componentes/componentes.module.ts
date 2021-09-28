import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxMaskModule } from 'ngx-mask';
import { FormNativeValidationComponent } from './form-native-validation/form-native-validation.component';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    FormNativeValidationComponent
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
    FormNativeValidationComponent
  ],
  providers:[

  ]
})
export class ComponentesModule { }
