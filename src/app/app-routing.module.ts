import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: TemplateDrivenFormComponent},
  {path: 'group', component: FormGroupComponent},
  {path: 'form-validation', component: FormValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
