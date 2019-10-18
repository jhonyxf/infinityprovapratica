import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaLojasComponent } from './lista-lojas/lista-lojas.component';
import { UsuarioService } from './service/usuario.service';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroLojaComponent } from './cadastro-loja/cadastro-loja.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    ListaLojasComponent,
    LoginComponent,
    CadastroComponent,
    TelaPrincipalComponent,
    MenuComponent,
    CadastroLojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
