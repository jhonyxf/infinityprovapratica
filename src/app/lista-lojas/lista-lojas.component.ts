import { Component, OnInit } from '@angular/core';
import { LojaService } from '../service/loja.service';

@Component({
  selector: 'app-lista-lojas',
  templateUrl: './lista-lojas.component.html',
  styleUrls: ['./lista-lojas.component.css']
})
export class ListaLojasComponent implements OnInit {

  public lojas = [];
  constructor(private _lojaService: LojaService) { }

  ngOnInit() {
    this.lojas = this._lojaService.getLojas();
  }

  removeLoja(id){
    this._lojaService.removeLoja(id);
  }



}
