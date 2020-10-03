import { Route } from '@angular/router';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,NgForm,NgModel } from "@angular/forms";
import {  AuthService} from "../auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUserData : any = {}

  constructor(private _auth : AuthService, private Route : Router) { }

  ngOnInit(): void {
  }

  onsubmit(login:NgForm){
    login.resetForm();
}

  loginUser(){
    this._auth.loginUser(this.loginUserData);

  }
}
