import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  
  image: SafeResourceUrl;

  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, private zone: NgZone, private sanitizer: DomSanitizer) { }

  //Capacitor camera
  async takePicture() {
    const { Camera } = Plugins;

    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64Data));
  }

  //Cordova Camera
  /*public takePicture(): Promise<void> {
    const options: CameraOptions = {
      quality: 100, // picture quality
      targetWidth: 300,
      targetHeight: 300,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    return this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      //this.photos.push(this.base64Image);
      //this.photos.reverse();
    }, (err) => {
      console.log(err);
    })*/

}
