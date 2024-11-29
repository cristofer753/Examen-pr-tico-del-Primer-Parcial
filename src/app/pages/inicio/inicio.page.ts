import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage {

  password: string = '';
  confirmPassword: string = '';

  constructor(private alertController: AlertController) {}

  async validarContrasenas() {
    if (this.password === this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Las contraseñas coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Intenta nuevamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
