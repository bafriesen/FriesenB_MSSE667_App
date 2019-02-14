import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  //public receiptList: ReceiptService;
  
  constructor(){

  }

  ngOnInit() {
    //Load any receipts available from the database into the view
    //this.photos = [];
    //this.loadReceiptList();
  }

  /*loadReceiptList(){
    if(this.dataService.loaded){
      this.re
    }
  }*/
}
