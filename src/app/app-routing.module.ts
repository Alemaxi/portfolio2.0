import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumoComponent } from './resumo/resumo.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  {path:'resumo',component:ResumoComponent},
  {path:'objetivos', component: ObjetivosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'',redirectTo:'/resumo', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
