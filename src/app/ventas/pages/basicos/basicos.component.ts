import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower: string = 'cristhian';
  nombreUpper: string = 'CRISTHIAN';
  nombreCompleto: string = 'CriSthiAN aRMIjos'
  fecha: Date = new Date();
  
}
