import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class AnimalesComponent implements OnInit {
  animales: string[];
  colores: string[];
  @Input() idioma = 'castellano';

  constructor() {
    this.colores = ['amarillo', 'rojo', 'azul', 'verde', 'violeta', 'rosa'];
    this.animales = ['caballo', 'leon', 'gato', 'oso', 'perro', 'vaca'];
  }

  ngOnInit() {}
  decirAnimal(item: string) {
    const audio = new Audio(
      `assets/audios/animales/${this.idioma}/${item}.mp3`
    );
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
