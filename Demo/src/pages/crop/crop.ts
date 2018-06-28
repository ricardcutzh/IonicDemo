
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core'; 
import { AngularCropperjsComponent } from 'angular-cropperjs'; 
import { DispoProvider } from '../../providers/dispo/dispo';

import { PresentacionPage } from "../presentacion/presentacion";
/**
 * Generated class for the CropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crop',
  templateUrl: 'crop.html',
})
export class CropPage {
  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;

  myImage = null;
  scaleValX = 1;
  scaleValY = 1;

  valla;

  imagenFuente: "";
  imagenDestino: "";

  constructor( public provide:DispoProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.valla = this.navParams.get('tvalla');
    this.imagenFuente = this.valla.url;
    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: 16 / 9,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
    }; 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CropPage');
  } 

  reset() {
    this.angularCropper.cropper.reset();
  }

  clear() {
    this.angularCropper.cropper.clear();
  }

  rotate() {
    this.angularCropper.cropper.rotate(90);
  }

  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }

  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }

  scaleY() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }

  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }

  save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.croppedImage = croppedImgB64String;
  }


  clckGuardar() {
    if (this.croppedImage != null) {
      this.valla.url2 = this.croppedImage;
      this.provide.agregarItemPresentacion(this.valla)
      //this.valla.url = this.croppedImage;
      //modificando la url de la imagen
      //this.provide.setNewImage(this.valla, this.croppedImage);
      //this.navCtrl.push(PresentacionPage);
      this.navCtrl.pop();
    }
  }

  goback() {
    this.navCtrl.pop(); 
 }

}
