import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
  standalone: true,
  imports: [IonButton, CommonModule],
})
export class NumerosComponent implements OnInit {
  numeros: number[];
  colores: string[];

  constructor() {
    this.numeros = [];
    this.colores = ['amarillo', 'rojo', 'azul', 'verde', 'violeta'];
    for (let index = 0; index < 10; index++) {
      this.numeros.push(index + 1);
    }
  }

  ngOnInit() {}
}
