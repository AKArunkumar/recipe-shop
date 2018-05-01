import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router} from "@angular/router";


@Injectable()
export class AuthService  {
  public USER_TOKEN = null;  
  constructor(private router: Router) { }

  userSignup(email: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then((response) => {
              this.router.navigate(['/']);
              console.log('successfullu Registered');
            })
            .catch((error) => {
              console.log(error);
            })
  }

  userSignin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
              response => {
                console.log("login success");
                this.router.navigate(['/']);
                response.getToken().then(token => {
                  this.USER_TOKEN = token;
                })
              }
            )
            .catch(
              error => console.log('error in signin')              
            )
  }
 
  isAuthenticated() {
    return this.USER_TOKEN != null;
  }

  clearToken() {
    firebase.auth().signOut();
    this.USER_TOKEN = null;
    this.router.navigate(['/']);    
  }
}
