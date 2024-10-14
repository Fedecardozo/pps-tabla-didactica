import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
  standalone: true,
})
export class AnimalesComponent implements OnInit {
  animales: string[];
  colores: string[];

  constructor() {
    this.colores = ['amarillo', 'rojo', 'azul', 'verde', 'violeta', 'rosa'];
    this.animales = ['caballo', 'leon', 'gato', 'oso', 'perro', 'vaca'];
  }

  ngOnInit() {}
}
