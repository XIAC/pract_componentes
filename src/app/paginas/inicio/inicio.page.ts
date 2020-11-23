import { Component, OnInit } from '@angular/core';

interface ListaComponente {
  icono: string;
  nombre: string;
  redireccion: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  listaComponentes: ListaComponente [] =[{
    icono : 'color-wand',
    nombre: 'Ir a Acciones',
    redireccion: '/acciones'
    }];
  constructor() { }
  // color-wand
  ngOnInit() {
  }

}
