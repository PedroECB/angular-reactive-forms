import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


const routes: Routes = [
  // {path: '', component: TemplateDrivenFormComponent},
  {path: "home", component: TemplateDrivenFormComponent},
  {path: "form-validation", component: FormValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
