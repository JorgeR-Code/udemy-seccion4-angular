import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

@Input() nuevo:Personaje = {
  nombre: '',
  poder: 0};

// @Output() personajes = new EventEmitter<Personaje>();



  constructor(private dbzService: DbzService){}


  agregar(){

    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    // this.personajes.emit(this.nuevo);
    this.dbzService.agregar(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0}
  }


}
