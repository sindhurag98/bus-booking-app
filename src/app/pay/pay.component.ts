import { BusService } from './../bus.service';
import { Router } from '@angular/router';
import { Component, OnInit ,Input} from '@angular/core';
import { FormControl,FormGroup,NgForm,NgModel } from "@angular/forms";


@Component({
  selector: 'pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

totalf;
seatDetails;
buses;

  constructor( private route:Router, private getbus: BusService) {
    this.totalf = this.route.getCurrentNavigation().extras.state;

   }

  ngOnInit(): void {
  }
  onsubmit(pay:NgForm){
    pay.valid
  }
  viewticket(){

    this.route.navigate(['/ticket'],{state:this.totalf});



    console.log(this.totalf)

  }
  cancel(){
    this.route.navigateByUrl('/plan');

  }



}
