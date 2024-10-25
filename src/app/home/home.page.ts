import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  colorPalette,
  document,
  globe,
  language,
  earth,
  grid,
} from 'ionicons/icons';
import { NumerosComponent } from '../components/numeros/numeros.component';
import { ColoresComponent } from '../components/colores/colores.component';
import { AnimalesComponent } from '../components/animales/animales.component';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonFabList,
    IonIcon,
    IonFabButton,
    IonFab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    NumerosComponent,
    ColoresComponent,
    AnimalesComponent,
  ],
})
export class HomePage {
  user: UsersService = inject(UsersService);
  router: Router = inject(Router);
  enum: number = 0;
  idioma: string = 'castellano';

  constructor() {
    addIcons({ add, colorPalette, document, globe, language, earth, grid });
  }

  async cerrarSesion() {
    await this.user.cerrarSesion();
    this.router.navigateByUrl('/login');
  }

  /**
   * 1-numeros
   * 2-colores
   * 3-animales
   */
  mostrarContenido(num: number) {
    this.enum = num;
  }

  cambiarIdioma(idioma: string) {
    this.idioma = idioma;
  }
}
