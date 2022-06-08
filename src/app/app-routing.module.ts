import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'HomeLoan',component:FormComponent},
  
  {path:'PersonalLoan',component:FormComponent},
  {path:'CarLoan',component:FormComponent},
  {path:'EducationLoan',component:FormComponent},
 {path:'Result',component:ResultComponent}

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
