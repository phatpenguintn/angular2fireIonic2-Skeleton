import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

//AF2 settings
// Initialize Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyBBhabQ24V8ISGR-TeBtWufNrPJjF9krx4",
    authDomain: "ionicchat-48762.firebaseapp.com",
    databaseURL: "https://ionicchat-48762.firebaseio.com",
    storageBucket: "ionicchat-48762.appspot.com",
    messagingSenderId: "319411194873"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
