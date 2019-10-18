import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListaLojasComponent } from './lista-lojas/lista-lojas.component';
import { CadastroLojaComponent } from './cadastro-loja/cadastro-loja.component';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'principal', component: TelaPrincipalComponent},
  {path: 'lista-lojas', component: ListaLojasComponent},
  {path: 'cadastro-loja', component: CadastroLojaComponent},
  {path: "**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
