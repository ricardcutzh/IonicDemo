import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisponibilidadPage } from '../pages/disponibilidad/disponibilidad';
import { RutasPage } from '../pages/rutas/rutas';
import { PresentacionPage } from '../pages/presentacion/presentacion';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from '../pages/perfil/perfil';
import { MuestraPage } from "../pages/muestra/muestra";
import { CropPage } from "../pages/crop/crop";
import { DispoProvider } from '../providers/dispo/dispo';
import { HttpClientModule } from "@angular/common/http"; 
import { GooglePlus } from "@ionic-native/google-plus";
import { AngularFireModule } from "angularfire2";
import firebase from "firebase";
//CROP
import { AngularCropperjsModule } from 'angular-cropperjs'; 
//PDF
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer } from '@ionic-native/file-transfer';

export const firebaseConfig = {
    apiKey: "AIzaSyATdIknMzUx3QNn0d0qV1SvlGd5H73_GKc",
    authDomain: "dispo-demo.firebaseapp.com",
    databaseURL: "https://dispo-demo.firebaseio.com",
    projectId: "dispo-demo",
    storageBucket: "dispo-demo.appspot.com",
    messagingSenderId: "55061482212"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisponibilidadPage,
    RutasPage,
    PresentacionPage,
    TabsPage,
    PerfilPage,
    MuestraPage,
    CropPage
  ],
  imports: [
    BrowserModule,
    //IMPORTACION DEL HTTP MODULO
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    //PARA RECORTAR
    AngularCropperjsModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisponibilidadPage,
    RutasPage,
    PresentacionPage,
    TabsPage,
    PerfilPage,
    MuestraPage,
    CropPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DispoProvider,
    GooglePlus,  
    File,
    FileOpener,
    FileTransfer
  ]
})
export class AppModule {}
