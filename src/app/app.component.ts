import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'G3AppFirebase';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyCswJ-HaFwkYgWHmPbVhIaU84yrUemwKes",
      authDomain: "angular-61b9a.firebaseapp.com",
      databaseURL: "https://angular-61b9a.firebaseio.com",
      projectId: "angular-61b9a",
      storageBucket: "angular-61b9a.appspot.com",
      messagingSenderId: "261471962301",
      appId: "1:261471962301:web:5119c8d03a4f5d751fa3d4",
      measurementId: "G-GWLJDP0468"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
