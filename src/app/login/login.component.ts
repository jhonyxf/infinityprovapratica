import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private _usuarios: UsuarioService, private router: Router) {}

  formulario: FormGroup;
  acesso = true;

  public usuarios = [];

  ngOnInit(): void {
    this.createForm();
    this.usuarios = this._usuarios.getUsuarios();
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['',[Validators.required]],

    });
  }

  get nome(): FormControl {
    return <FormControl> this.formulario.get('nome');
  }

  get cpf(): FormControl {
    return <FormControl> this.formulario.get('cpf');
  }


  onSubmit(){
    for(let i = 0; i < this.usuarios.length;i++){
      if(this.formulario.value.nome == this.usuarios[i].nome && this.formulario.value.cpf == this.usuarios[i].cpf){
        this.router.navigate(['/principal']);
        }
    }
    this.acesso = false;

  }
}
