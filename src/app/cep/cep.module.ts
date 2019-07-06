import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepComponent } from './cep/cep.component';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {path: '', component: CepTextoComponent},
  {path: ':numero', component: CepComponent},  
];

@NgModule({
  declarations: [
    CepComponent,
    CepTextoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class CepModule { }
