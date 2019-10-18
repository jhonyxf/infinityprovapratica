import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public usuarios = [
      new Usuario("jhony","991146955","jhonyxf@gmail.com","06432912610"),
      new Usuario("camila","99999999","camila@gmail.com","123456"),
      new Usuario("luzia","88888888","luzia@gmail.com","123123"),
  ]

  getUsuarios(){
    return this.usuarios;
  }

  addUsuario(usuario){
    this.usuarios.push(usuario);
  }

  removeUsuario(cpf){
    for(let i=0; i < this.usuarios.length;i++){
      if(this.usuarios[i].cpf == cpf){
        this.usuarios.splice(i,1)
      }
    }
  }
}
