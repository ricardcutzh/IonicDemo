import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MuestraPage } from "../muestra/muestra";

/**
 * Generated class for the DisponibilidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disponibilidad',
  templateUrl: 'disponibilidad.html',
})
export class DisponibilidadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisponibilidadPage');
  }

  //SOLO DA LA APARIENCIA DE REFRESCAR
  refrescar(refresher)
  {
    setTimeout(() => {refresher.complete();}, 2000);
  }

  //DEPENDIENDO DEL BOTON QUE PRESONE MUESTRA QUE TIPO DE VALLA Y QUE TIPO DE ESTADO DESEA DESPLEGAR
  verDetalle(tipoValla, tipoEstado)
  {
    this.navCtrl.push(MuestraPage,{
      tvalla: tipoValla,
      testado: tipoEstado
    });
  }
  
  
}
