import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DispoProvider } from '../../providers/dispo/dispo';
import { MuestraPage } from "../muestra/muestra";
import * as _ from "lodash"

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
  tipoValla: string;
  tipoEstado: string;
  datos;
  queryText: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: DispoProvider) {
    this.tipoValla = this.navParams.get('tvalla');
    this.tipoEstado = this.navParams.get('testado');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
    // SE OBTIENE EL ARREGLO DE DATOS
    this.datos = this.provider.obtenerCarasEntrando();
  }

  verDireccion(Departamento, Municipio) {
    console.log(Departamento + ", " + Municipio);
    this.navCtrl.push(MuestraPage, {
      tvalla: this.tipoValla,
      testado: this.tipoEstado,
      municipio: Municipio
    });
  }

  actualizarLista() {
    //PONER EN MINUSCULA LA BUSQUEDAD PARA NO AFECTAR SI ES MAYUS O MINUS
    this.datos = this.provider.obtenerCarasEntrando();
    let queryMinus = this.queryText.toLowerCase();
    let Filtro = [];
    _.forEach(this.datos, dato => {
      let temp = _.filter(dato, function (t) {
        if (t.Municipio.toLowerCase().includes(queryMinus) || t.Departamento.toLowerCase().includes(queryMinus) || t.region.toLowerCase().includes(queryMinus)) {
          return true;
        }
        else {
          return false;
        }
      });
      if (temp.length > 0) {
        Filtro.push(temp);
      }
    });
    this.datos = Filtro;

  }
}
