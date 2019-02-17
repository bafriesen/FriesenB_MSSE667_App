import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receipt } from '../models/Receipt';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  
  private receiptsCollection: AngularFirestoreCollection<Receipt>;
  receiptDoc: AngularFirestoreDocument<Receipt>;
  receipts: Observable<Receipt[]>;
  receipt: Observable<Receipt>;

  constructor(private afs: AngularFirestore) { 
    this.receiptsCollection = this.afs.collection('receipts', ref => ref.orderBy('id', 'asc'));
  }

  getReceipts(): Observable<Receipt[]> {
    //Get receipts with id
    this.receipts = this.receiptsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Receipt;
        data.id = action.payload.doc.id;
        return data;
      });
    });

    return this.receipts;
  }
}
