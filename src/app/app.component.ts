import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pipesAppp';

  nombre: string = 'cristhiaN armijos'
  valor: number = 1000;
  obj = {
    nombre: 'Kris'
  }

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.valor );
  }
}
