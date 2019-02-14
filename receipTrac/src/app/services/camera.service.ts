import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  
  public photos: any;
  public base64Image: string;

  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100, // picture quality
      targetWidth: 300,
      targetHeight: 300,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      //this.photos.push(this.base64Image);
      //this.photos.reverse();
    }, (err) => {
      console.log(err);
    })

  }
}