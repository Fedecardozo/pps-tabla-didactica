import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
  imports: [IonButton, CommonModule],

  standalone: true,
})
export class ColoresComponent implements OnInit {
  colores: string[];
  @Input() idioma = 'castellano';
  constructor() {
    this.colores = [
      'amarillo',
      'rojo',
      'azul',
      'verde',
      'violeta',
      'blanco',
      'negro',
      'rosa',
    ];
  }

  ngOnInit() {}

  decir(item: string) {
    const audio = new Audio(`assets/audios/colores/${this.idioma}/${item}.mp3`);
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
