import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent{
//i18nselect
 nombre: string = 'Susana';
 genero: string = 'femenino';

 invitacionMap = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
 }

 //i18nPlural
 clientes: string[] = ['Maria', 'Pedro', 'kris','Pedro', 'kerly'];
 clientesMapa = {
  '=0': 'no tenemos ningun clientes esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos 2 clientes esperando',
  'other': 'tenemos # clientes esperando'
 }

 cambiarPersona() {
  console.log('botonn')
  this.nombre = 'Cristhian';
  this.genero = 'masculino';
 }

 eliminarCliente(){

  this.clientes.shift();
 }
 // keyValuePipe
  
 persona = {
  nombre: 'Cristhian',
  edad: 28,
  direccion: 'urdeza este machala' 
 }

 //json pipe

 heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'goku',
    vuela: false
  },
  {
    nombre: 'Batbamn',
    vuela: true
  }
 ]
//asynPipe
miObservable = interval(200);
valorPromesa = new Promise( (resolve, reject)=> {

  setTimeout(() => {
    resolve('tenemos data de la promesa');
  }, 3500);
})

 
}
