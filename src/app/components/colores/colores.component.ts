import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
}
