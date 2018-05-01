import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from "@angular/router";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSingup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.userSignup(email, password);
    this.router.navigate(['/recipes'])
  }

}
