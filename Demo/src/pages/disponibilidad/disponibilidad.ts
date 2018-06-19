import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { MuestraPage } from "../muestra/muestra";
import { RutasPage }  from '../rutas/rutas';
import { AlertController } from 'ionic-angular';
import { DispoProvider } from "../../providers/dispo/dispo";
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

  unipolares
  convencionales
  pasacalles

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: DispoProvider, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    this.cargarInfo();
  }

  //SOLO DA LA APARIENCIA DE REFRESCAR
  refrescar(refresher)
  {
    setTimeout(() => {
      this.cargarInfo();
      refresher.complete();
    }, 2000);
  }

  cargarInfo()
  {
     //AQUI PARA QUE CARGUE LA PAGINA
     this.proveedor.obtenerUnipolares().subscribe(
      (data)=>{this.unipolares = data;},
      (error)=>{this.errorConexion();}
    );
    //CONVENCIONALES
    this.proveedor.obtenerConvencionales().subscribe(
      (data)=>{this.convencionales = data;},
      (error)=>{this.errorConexion();}
    );
    //PASACALLES
    this.proveedor.obtenerOtras().subscribe(
      (data)=>{this.pasacalles = data;},
      (error)=>{this.errorConexion();}
    );
  }

  //DEPENDIENDO DEL BOTON QUE PRESONE MUESTRA QUE TIPO DE VALLA Y QUE TIPO DE ESTADO DESEA DESPLEGAR
  verDetalle(tipoValla, tipoEstado)
  {
    /*this.navCtrl.push(MuestraPage,{
      tvalla: tipoValla,
      testado: tipoEstado
    });*/
    this.navCtrl.push(RutasPage, {
      tvalla: tipoValla,
      testado: tipoEstado
    });
  }

  //EN CASO EXISTA UN ERROR DE CONEXION
  errorConexion()
  {
    const alerta = this.alertCtrl.create({
      title : '¡Error de Conexión!',
      subTitle: 'Verifica tu conexión a la Red.',
      buttons: ['OK']
    });
    alerta.present();
  }
  
  
}
