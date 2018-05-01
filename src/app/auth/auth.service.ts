import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService  {
  USER_TOKEN = null;  
  constructor() { }

  userSignup(email: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch((error) => {
              console.log(error);
            })
  }

  userSignin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
              response => {
                console.log("login success");
                response.getToken().then(token => {
                  this.USER_TOKEN = token;
                })
              }
            )
            .catch(
              error => console.log('error in signin')              
            )
  }
 
  haveToken() {
    return this.USER_TOKEN;
  }

  clearToken() {
    this.USER_TOKEN = null;
  }
}
