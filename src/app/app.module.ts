import { BusService } from './bus.service';

import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StepsComponent } from './steps/steps.component';
import { AuthService } from './auth.service';
import { PlanComponent } from './plan/plan.component';
import { SeatsComponent } from './seats/seats.component';
import { PayComponent } from './pay/pay.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StepsComponent,
    PlanComponent,
    SeatsComponent,
    PayComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [ AuthService,BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
