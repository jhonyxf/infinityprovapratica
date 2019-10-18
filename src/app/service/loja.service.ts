import { Injectable } from '@angular/core';
import { Loja } from '../classes/loja';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor() { }

  public lojas = [
    new Loja(1,"Loja 1","loja de roupas","rua das zinias","roupa","imagem.jpg"),
    new Loja(2,"Loja 2","loja de calçados","rua das seila","calcado","imagem.jpg"),
    new Loja(3,"Loja 3","loja de chapéu","rua dos buritis","chapeu","imagem.jpg")
  ];

  getLojas(){
    return this.lojas;
  }

  addLoja(loja){
    this.lojas.push(loja);
  }

  removeLoja(id){
    for(let i=0; i < this.lojas.length;i++){
      if(this.lojas[i].id == id){
        this.lojas.splice(i,1)
      }
    }
    console.log(this.lojas)
  }
}
