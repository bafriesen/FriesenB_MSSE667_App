import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receipt } from '../models/Receipt';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';
import { map } from 'rxjs/operators';
import { ActionSequence } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  
  private receiptsCollection: AngularFirestoreCollection<Receipt>;
  receiptDoc: AngularFirestoreDocument<Receipt>;
  private receipts: Observable<Receipt[]>;
  private receipt: Observable<Receipt>;

  constructor(public afs: AngularFirestore) { 
    this.receiptsCollection = this.afs.collection<Receipt>('receipts', ref => ref.orderBy('date', 'asc'));

    this.receipts = this.receiptsCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data() as Receipt;
          const id = a.payload.doc.id;
          return data;
        })  
      })
    )
  }

  getReceipts() {
    return this.receipts;
  }

  getReceipt(id) {
    return this.receiptsCollection.doc<Receipt>(id).valueChanges();
  }

  updateReceipt(receipt: Receipt, id: string){
    return this.receiptsCollection.doc(id).update(receipt);
  }

  addReceipt(receipt: Receipt){
    return this.receiptsCollection.add(receipt);
  }

  deleteReceipt(id){
    return this.receiptsCollection.doc(id).delete();
  }
}


/* 
this.receipts = this.receiptsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Receipt;
          data.id = action.payload.doc.id;
          return data;
        });
      }))
*/