import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl,FormGroup,NgForm,NgModel } from "@angular/forms";


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData : any = {}


  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }


 onsubmit(sign:NgForm){
      sign.resetForm();
    sign.valid
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
