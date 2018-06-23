import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from "ionic-angular";
import { GooglePlus } from "@ionic-native/google-plus";
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  gp: GooglePlus;
  usuario:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.usuario = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  LogOut()
  {
    this.events.publish("user:logout");
  }

}
