

import { TicketComponent } from './ticket/ticket.component';
import { PayComponent } from './pay/pay.component';
import { SeatsComponent } from './seats/seats.component';
import { PlanComponent } from './plan/plan.component';

import { StepsComponent } from './steps/steps.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'steps',
    component: StepsComponent
  },
  {
    path:'plan',
    component: PlanComponent
  },
  {
    path:'seats',
    component: SeatsComponent
  },
  {
  path:'pay',
  component: PayComponent
  },
  {
    path:'ticket',
    component: TicketComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
