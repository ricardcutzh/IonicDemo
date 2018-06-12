import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  refrescar(refresher)
  {
    setTimeout(() => {refresher.complete();}, 2000);
  }
}
