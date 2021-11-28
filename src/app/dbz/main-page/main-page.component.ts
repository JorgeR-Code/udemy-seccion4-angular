import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

personajes: Personaje[] = [
  {
    nombre: 'Trunks',
    poder: 14235
  },
  {
    nombre: 'Vegeta',
    poder: 8255
  }
];

nuevo: Personaje = {
  nombre: '',
  poder: 0
}

agregar(event: Personaje){

  this.personajes.push(event);

}


constructor(private dbzService: DbzService){

}

}
