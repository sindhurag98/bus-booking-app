import { element } from 'protractor';
import { BusService } from './../bus.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from "..//auth.service";
import { Router } from "@angular/router";
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  name : string="";
  totalf;
  sdetails;
  busdetails;




public downloadPDF(){

  const options = {
    filename: 'ticket.pdf',
    image:{type: 'jpeg'},
    html2canvas:{},
    jsPDF:{orientation:'landscape'}
  }

  const element: Element = document.getElementById('ticket');

  html2pdf()
  .from(element)
  .set(options)
  .save()



}


  constructor(private _auth: AuthService, private route: Router, private getbus: BusService, private get: BusService) {
    this.totalf = this.route.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.name =this._auth.getname()
    this.get.sdetails$
    .subscribe(data =>{
      this.sdetails= data;
      console.log("seatgot:",data);
    })
    this.getbus.busdetails$
    .subscribe(data =>{
      this.busdetails= data;
      console.log("seatgot:",data);
    })
  }

}
