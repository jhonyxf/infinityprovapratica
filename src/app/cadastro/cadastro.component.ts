import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../classes/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder,private _usuarios: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      telefone: [''],
      cpf: ['',[Validators.required, Validators.minLength(11)]],

    });
  }

  get nome(): FormControl {
    return <FormControl> this.formulario.get('nome');
  }

  get email(): FormControl {
    return <FormControl> this.formulario.get('email');
  }

  get telefone(): FormControl {
    return <FormControl> this.formulario.get('telefone');
  }

  get cpf(): FormControl {
    return <FormControl> this.formulario.get('cpf');
  }

  onSubmit(){
    this._usuarios.addUsuario(new Usuario(this.formulario.value.nome,this.formulario.value.telefone,this.formulario.value.email,this.formulario.value.cpf))
    console.log(this._usuarios)
    this.router.navigate(['/login']);
  }

  removeUsuario(cpf){
    this._usuarios.removeUsuario(cpf)
  }

}
