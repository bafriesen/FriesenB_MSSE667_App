import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor(private camera: CameraService){}

  ngOnInit() {
    
  }

  //Uses the camera to capture picture from CameraService
  takePicture(camera){
    this.camera.takePicture();
  }

  //Service that combines UI elements into 
  saveReceipt(){
    console.log('Saved your receipt');
  }
}
