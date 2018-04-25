import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedfeature = 'recipe';
 
  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyDhBwf33j-0eEEzCXpmMJgLNBIOJBoLBtQ",
        authDomain: "recipe-book-c6b58.firebaseapp.com"
      }
    );
  }
  featureload(feature: string) {
    this.selectedfeature = feature;
  }
}
