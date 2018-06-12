import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //HACE REFERENCIA AL ID EN LA VISTA
  @ViewChild('user') usuario;
  //HACE REFERENCIA AL ID EN LA VISTA
  @ViewChild('pass') password;

  constructor(public navCtrl: NavController, public alertCtrl : AlertController) {

  }

  //METODO PARA INGRESAR (UTILIZA INFORMACION ESTATICA)
  Ingresar()
  {
    if(this.usuario.value == "admin" && this.password.value == "admin")
    {
      this.navCtrl.push(TabsPage);
    }
    else
    {
      this.Denegado();
    }
  }

  //ALERTA DE INFORMACION INVALIDA
  Denegado()
  {
    const alerta = this.alertCtrl.create({
      title : '¡Usuario Inválido!',
      subTitle: 'Por favor verificar su información.',
      buttons: ['OK']
    });
    alerta.present();
  }

}
