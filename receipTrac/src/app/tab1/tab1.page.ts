import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(private camera: CameraService){}

  takePicture(camera){
    this.camera.takePicture();
  }

  saveReceipt(){
    console.log('Saved your receipt');
  }
}
