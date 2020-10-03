import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,NgForm,NgModel } from "@angular/forms";
import { BusService } from "../bus.service";
import { Router } from "@angular/router";


@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(private busservice: BusService, private route:Router, private getbus: BusService) { }

  ngOnInit(): void {
  }

  model:any={};
  results: any=[];


plan(searc:NgForm){
  console.log(this.model)
this.busservice.search(this.model)
.subscribe((result)=>{
  console.log("Plan: ",result);
  this.results=result;
  console.log(this.results);
});
}
viewSeats(){
  this.route.navigate(['/seats'],{state:this.results});
   this.getbus.sendbus(this.results);
  console.log(this.results);
}
}
