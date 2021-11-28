import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Trunks',
      poder: 14235
    },
    {
      nombre: 'Vegeta',
      poder: 8255
    }
  ];


  get personajes():Personaje[]{
    return [...this._personajes];
  }

  constructor(){}

  agregar(personaje: Personaje){
    this._personajes.push(personaje);
  }

};
