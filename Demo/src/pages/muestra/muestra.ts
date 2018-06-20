import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MuestraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muestra',
  templateUrl: 'muestra.html',
})
export class MuestraPage {
  //http://www.filltext.com/KfgRZ/?rows=20&pretty=true&code={randomNumberLength|10}&ancho={numberRange|10,%2020}&alto={numberRange|2,%205}&direccion={streetAddress}&municipio={city}&material={lorem|2}
  tipoValla : string;
  tipoEstado : string;
  presentado : string;
  municipio : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipoValla = this.navParams.get('tvalla');
    this.tipoEstado = this.navParams.get('testado');
    this.municipio = this.navParams.get('municipio');
    if(this.tipoEstado == "Entradas")
    {
      this.presentado = "primary";
    }
    else if(this.tipoEstado == "Salidas"){
      this.presentado = "danger";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuestraPage');
  }

}
