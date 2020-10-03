
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import {jwt_decode} from "jwt-decode";
import { AuthService } from "../auth.service";


@Component({
  selector: 'steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {


  name : string="";

  constructor(private _auth:AuthService) {

  }



  ngOnInit(): void {
    this.name =this._auth.getname()
  }





}


