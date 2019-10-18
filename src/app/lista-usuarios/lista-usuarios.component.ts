import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios = [];
  constructor(private _usuarioService: UsuarioService) { }


  ngOnInit() {
    this.usuarios = this._usuarioService.getUsuarios();
  }

}
