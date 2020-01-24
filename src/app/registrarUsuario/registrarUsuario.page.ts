import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'registrarUsuario-home',
  templateUrl: 'registrarUsuario.page.html',
  styleUrls: ['registrarUsuario.page.scss'],
})
export class RegistrarUsuario {

  constructor(public alertController: AlertController) {}

  public objUsuario = {
    "usuario": "",
    "nombres": "",
    "apellidos": "",
    "contra": "",
    "repeatcontra": "",
  }

   confirmAlert(){
    this.alertController.create({
      header: 'Alerta',
      subHeader: 'Registro de usuario',
      message: '¿Esta seguro de registar este usuario '+this.objUsuario.usuario+'?',
      buttons: ['Cancelar','Aceptar']
    }).then(alert => {
      alert.present();
      this.clearinputs()
    });
  }

  clearinputs(){
    this.objUsuario = {
      "usuario": "",
      "nombres": "",
      "apellidos": "",
      "contra": "",
      "repeatcontra": "",
    }
  }
}
