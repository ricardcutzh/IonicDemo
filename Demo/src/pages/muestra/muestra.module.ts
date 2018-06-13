import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuestraPage } from './muestra';

@NgModule({
  declarations: [
    MuestraPage,
  ],
  imports: [
    IonicPageModule.forChild(MuestraPage),
  ],
})
export class MuestraPageModule {}
