import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from "@angular/router";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private authservice: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  
  onSignin(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    this.authservice.userSignin(email, password);
    this.router.navigate(['/recipes']);


  }
}
