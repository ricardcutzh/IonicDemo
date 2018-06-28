import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from "lodash";
import { DispoProvider } from '../../providers/dispo/dispo';
import { AlertController } from 'ionic-angular';
import { CropPage } from "../crop/crop";
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
  queryText : string;
  datos;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provide:DispoProvider, public alertCtrl: AlertController) {
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
    /* console.log('ionViewDidLoad MuestraPage'); */
    this.datos = this.provide.obtenerRutas();
  }

  /*
  +------------------------------------------------+
  |   INICIAL
  +------------------------------------------------+
  */
  actualizarLista()
  {
    //refrescando la lista
    this.datos = this.provide.obtenerRutas();
    let queryMinus = this.queryText.toLowerCase();
    let Filtro = [] = _.filter(this.datos, function(t){
      if(t.codigo.toLowerCase().includes(queryMinus) || t.ubicacion.toLowerCase().includes(queryMinus))
      {
        return true;
      }
      return false;
    });
    this.datos = Filtro;
  }

  /*
  +------------------------------------------------+
  |   BOTONES
  +------------------------------------------------+
  */
  clckAgregar(item) { 
   
    if (this.provide.estaRepetidaValla(item)) {  
      this.Mensaje("Ya existe una valla con el mismo código en la presentación");
    } else {
      this.navCtrl.push(CropPage, {
        tvalla: item,
      });
    }
  }

  clckCortar() {
    this.navCtrl.push(CropPage);
  }
 


  /*
  +------------------------------------------------+
  |   Mensajes
  +------------------------------------------------+
  */

  Mensaje(mensaje) {
    const alerta = this.alertCtrl.create({
      title: '¡Mensaje!',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alerta.present();
  }


}
