import { BusService } from './../bus.service';
import { Component, OnInit ,Output} from '@angular/core';
import { Router } from '@angular/router';

import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { concat } from 'rxjs';

@Component({
  selector: 'seats',
  templateUrl: './seats.component.html',

  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  public seatArray = [
    { value: 1, clicked: false, booked: false },
    { value: 2, clicked: false, booked: false },
    { value: 3, clicked: false, booked: true },
    { value: 4, clicked: false, booked: false },
    { value: 5, clicked: false, booked: false },
    { value: 6, clicked: false, booked: false },
    { value: 7, clicked: false, booked: false },
    { value: 8, clicked: false, booked: false },
    { value: 9, clicked: false, booked: false },
    { value: 10, clicked: false, booked: false },
    { value: 11, clicked: false, booked: true },
    { value: 12, clicked: false, booked: false },
    { value: 13, clicked: false, booked: false },
    { value: 14, clicked: false, booked: false },
    { value: 15, clicked: false, booked: false },
    { value: 16, clicked: false, booked: false },
    { value: 17, clicked: false, booked: true },
    { value: 18, clicked: false, booked: false },
    { value: 19, clicked: false, booked: false },
    { value: 20, clicked: false, booked: false },
    { value: 21, clicked: false, booked: false },
    { value: 22, clicked: false, booked: false },
    { value: 23, clicked: false, booked: false },
    { value: 24, clicked: false, booked: false },
    { value: 25, clicked: false, booked: false },
    { value: 26, clicked: false, booked: false },
    { value: 27, clicked: false, booked: false },
    { value: 28, clicked: false, booked: false },
    { value: 29, clicked: false, booked: false },
    { value: 30, clicked: false, booked: false },
    { value: 31, clicked: false, booked: false },
    { value: 32, clicked: false, booked: false },
    { value: 33, clicked: false, booked: false },
    { value: 34, clicked: false, booked: false },
    { value: 35, clicked: false, booked: false },
    { value: 36, clicked: false, booked: false },
    { value: 37, clicked: false, booked: false },
    { value: 38, clicked: false, booked: false },
    { value: 39, clicked: false, booked: false },
    { value: 40, clicked: false, booked: false }
  ];
  noBusDetails: boolean;
  totalFare: number = 0;
  selectedSeatNos: number[] = [];
  seatForm: FormGroup;
  showSeat: boolean = false;

bus;
fare;
result;
sdetails;
busdetails;
totalf;



  get seatDetails() {
    return this.seatForm.get('seatDetails') as FormArray;
  }


  constructor(private route: Router,
    private formBuilder: FormBuilder, private get:BusService) {
      this.bus = this.route.getCurrentNavigation().extras.state;

    }



  ngOnInit(): void {
    this.seatForm = this.formBuilder.group({
      seatDetails: this.formBuilder.array([])
    })
    this.selectedSeatNos = [];

  }
  onSeatSelect(seatIndex, event) {
    if(this.seatArray[seatIndex-1].booked == true) {
      console.log("already booked")
      return;
    }
    this.seatArray[seatIndex - 1].clicked = !this.seatArray[seatIndex - 1].clicked;
    if (this.seatArray[seatIndex - 1].clicked) {
      this.selectedSeatNos.push(seatIndex);
      this.seatDetails.push(this.formBuilder.group({
        name: this.formBuilder.control('', Validators.required),
        age: this.formBuilder.control('', Validators.required),
        gender: this.formBuilder.control('', Validators.required),
        seatNo: this.formBuilder.control(seatIndex)
      }));
    } else {
      let control =<FormArray> this.seatForm.controls['seatDetails'];
      for(let i=0;i<=this.selectedSeatNos.length;i++) {
        if(control.value[i].seatNo == seatIndex) {
          console.log("Match Found : ",this.seatForm.controls['seatDetails'].value[i]);
          control.removeAt(i);
          break;
        }
      }
      console.log("****After Removal****")
      console.log(control.value);
      this.selectedSeatNos = this.selectedSeatNos.filter(val => { 
        return val !== seatIndex;
       })
       console.log(this.selectedSeatNos);
    }
    if(this.selectedSeatNos.length > 0) {
      this.showSeat = true;
    } else{
      this.showSeat = false;
    }

    for(let j of this.bus){
      this.fare=j.fare;
    }
    this.totalf= this.fare*this.selectedSeatNos.length + 180;
  }


  onConfirm() {
    console.log(this.seatForm.value);
  }



  pay(){
    this.route.navigate(['/pay'],{state:this.totalf});

   this.get.send(this.seatDetails.value);


    console.log(this.result)
    console.log("seat: ",this.seatDetails.value);

  }

}
