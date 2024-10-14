import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonApp, IonRouterOutlet],
})
export class AppComponent {
  public router: Router = inject(Router);
  constructor() {}

  ngOnInit(): void {
    this.router.navigateByUrl('splash');
  }

  ionViewDitEnter() {
    SplashScreen.hide();
  }
}
