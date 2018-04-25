import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService  {
  constructor() { }

  userSignup(email: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch((error) => {
              console.log(error);
            })
  }

}
