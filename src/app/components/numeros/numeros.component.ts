import { Component, Input, OnInit } from '@angular/core';
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
  @Input() idioma = 'castellano';

  constructor() {
    this.numeros = [];
    this.colores = ['amarillo', 'rojo', 'azul', 'verde', 'violeta'];
    for (let index = 0; index < 10; index++) {
      this.numeros.push(index + 1);
    }
  }

  ngOnInit() {}

  decir(item: string) {
    const audio = new Audio(`assets/audios/numeros/${this.idioma}/${item}.mp3`);
    switch (this.idioma) {
      case 'ingles':
        audio.play();

        break;
      case 'portuges':
        audio.play();

        break;
      default:
        audio.play();
        break;
    }
  }
}
