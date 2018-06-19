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
import { DispoProvider } from '../providers/dispo/dispo';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisponibilidadPage,
    RutasPage,
    PresentacionPage,
    TabsPage,
    PerfilPage,
    MuestraPage
  ],
  imports: [
    BrowserModule,
    //IMPORTACION DEL HTTP MODULO
    HttpClientModule,
    IonicModule.forRoot(MyApp)
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
    MuestraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DispoProvider
  ]
})
export class AppModule {}
