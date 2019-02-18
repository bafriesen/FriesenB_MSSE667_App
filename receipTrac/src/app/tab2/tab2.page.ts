import { Component } from '@angular/core';
//import { CameraService } from '../services/camera.service';

//import { ReceiptService } from '../services/receipt.service';
//import { Receipt } from '../models/Receipt';
//import { Observable } from 'rxjs';
//import { ReceiptsComponent } from '../components/receipts/receipts.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
    
  constructor(private dashboardComponent: DashboardComponent){

  }

  ngOnInit() {
    
  }

}
