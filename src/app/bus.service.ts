import { NgForm } from '@angular/forms';


import { Bus } from './bus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

private _busdetailssource = new BehaviorSubject<any>(null);
 busdetails$ = this._busdetailssource.asObservable();


 private  _sdetailssource = new BehaviorSubject<any>(null);
 sdetails$ = this._sdetailssource.asObservable();

  constructor(private http:HttpClient) { }

  array=[];
  result: Bus[];

   search(searc){
    return  this.http.post("http://localhost:3000/api/bus ",searc);
    }

    send(sdetails: string){
      this._sdetailssource.next(sdetails);
    }
    sendbus(busdetails : string){
      this._busdetailssource.next(busdetails);
    }

}
