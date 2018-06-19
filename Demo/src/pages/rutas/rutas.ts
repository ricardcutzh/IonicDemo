import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DispoProvider } from '../../providers/dispo/dispo';

/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
  tipoValla : string;
  tipoEstado : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider:DispoProvider) {
    this.tipoValla = this.navParams.get('tvalla');
    this.tipoEstado = this.navParams.get('testado');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
    this.provider.obtenerCarasEntrando();
  }

}
