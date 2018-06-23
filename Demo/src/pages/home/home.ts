import { Component, ViewChild } from '@angular/core';
import { NavController, Tab } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GooglePlus } from "@ionic-native/google-plus";
import { Platform } from "ionic-angular";
import { AngularFireModule } from "angularfire2";
import firebase from "firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //HACE REFERENCIA AL ID EN LA VISTA
  @ViewChild('user') usuario;
  //HACE REFERENCIA AL ID EN LA VISTA
  @ViewChild('pass') password;
  user: any ={};
  esWeb = true;
  estaLogueado = false;

  constructor(public navCtrl: NavController, public alertCtrl : AlertController, public gp: GooglePlus, private platform: Platform) {
    this.estaLogueado = false;
  }

  ionViewDidLoad()
  {
    if(this.platform.is('cordova'))
    {
      this.esWeb = false;
    } 
    else
    {
      this.esWeb = true;
    }
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
      title : '¡Acceso Denegado!',
      subTitle: 'Verifica tu conexíon.',
      buttons: ['OK']
    });
    alerta.present();
  }

  //PRUEBA DE LOGIN
  async logIn()
  {
    //this.nativo();
    const pr = await this.gp.login({
      'webClientId':'55061482212-if2hs6c0rrskehvjllprnc116fr3krdh.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      this.user = res;
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        this.estaLogueado = true;
      }).catch(ns=>{
        this.estaLogueado = false;
        this.Denegado();
      })
    });
    //-------------------------------
  }

  entrar()
  {
    this.navCtrl.push(TabsPage,{
      us: this.user
    });
  }

  logOut()
  {
    this.gp.logout();
    this.estaLogueado = false;
  }
}
