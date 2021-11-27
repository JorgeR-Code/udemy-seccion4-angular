import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  heroeBorrado: string= '';

  borrarHeroe(){

      this.heroeBorrado = this.heroes.pop() || '';

      console.log(this.heroeBorrado)

  };

}
