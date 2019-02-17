import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiptsComponent } from './components/receipts/receipts.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditReceiptComponent } from './components/edit-receipt/edit-receipt.component';
import { AddReceiptComponent } from './components/add-receipt/add-receipt.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [AppComponent, ReceiptsComponent, DashboardComponent, EditReceiptComponent, AddReceiptComponent, LoginComponent, RegisterComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase, 'receipTrac'), 
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera
  ],
  bootstrap: [AppComponent, ReceiptsComponent, DashboardComponent, EditReceiptComponent, AddReceiptComponent, LoginComponent, RegisterComponent]
})
export class AppModule {}
