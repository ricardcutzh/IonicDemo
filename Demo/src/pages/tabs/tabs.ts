import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams, Events } from 'ionic-angular';
import { DisponibilidadPage } from "../disponibilidad/disponibilidad";
import { PresentacionPage } from "../presentacion/presentacion";
import { PerfilPage } from "../perfil/perfil";
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  //SE HACE REFERENCIA AL NOMBRE USADO EN LA VISTA
  dispo= DisponibilidadPage;
  presentacion = PresentacionPage;
  perfil = PerfilPage;

  usuario:any = {}; 

  constructor(public events: Events, public navCtrl : NavController, public params:NavParams)
  {
    //PARA QUE LA TAB PAGE SEPA QUE TIENE QUE REGRESAR AL INICIO
    events.subscribe('user:logout', ()=>{
      this.navCtrl.popToRoot();
    });
    this.usuario = {
      user: this.params.get('us')
    };
  }

}
