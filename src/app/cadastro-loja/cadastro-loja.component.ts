import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LojaService } from '../service/loja.service';
import { Loja } from '../classes/loja';

@Component({
  selector: 'app-cadastro-loja',
  templateUrl: './cadastro-loja.component.html',
  styleUrls: ['./cadastro-loja.component.css']
})
export class CadastroLojaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder,private _lojas: LojaService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['',[Validators.required]],
      localizacao: [''],
      categoria: ['',[Validators.required]],

    });
  }

  get nome(): FormControl {
    return <FormControl> this.formulario.get('nome');
  }

  get descricao(): FormControl {
    return <FormControl> this.formulario.get('descricao');
  }

  get localizacao(): FormControl {
    return <FormControl> this.formulario.get('localizacao');
  }

  get categoria(): FormControl {
    return <FormControl> this.formulario.get('categoria');
  }

  onSubmit(){
    this._lojas.addLoja(new Loja(Math.floor(Math.random() * 5+10),this.formulario.value.nome,this.formulario.value.descricao,this.formulario.value.localizacao,this.formulario.value.categoria,"imagem"))
    console.log(this._lojas)
  }

}
