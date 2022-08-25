import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de angular',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Textos y fechas',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-dollar',
                    routerLink: 'numeros'
                },
                {
                    label: 'No Comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'no-comunes'
                }
                
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-android',
            routerLink: 'ordenar'
        }
    ];
    }

}