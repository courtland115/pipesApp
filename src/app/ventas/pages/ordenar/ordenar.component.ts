import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas : boolean = true;
  ordenaPor: string  = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robbin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Goku',
      vuela: true,
      color: Color.rojo
    }
  ]

  pasarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden (valor: string) {
    this.ordenaPor = valor;
  }
  
}
