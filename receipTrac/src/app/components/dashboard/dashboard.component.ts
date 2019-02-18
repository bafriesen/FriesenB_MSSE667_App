import { Component, OnInit } from '@angular/core';
/*import { ReceiptService } from '../../services/receipt.service';
import { Receipt } from '../../models/Receipt';*/
import { ReceiptsComponent } from '../receipts/receipts.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private receiptsComponent: ReceiptsComponent) { }

  ngOnInit() {
    console.log('THis is the dashboard talking through Tab2');
  }

}
