import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private router: Router) { }
  loginGroup;
  ngOnInit() {
    this.loginGroup = this.builder.group({
      username: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    })
  }
  

}
