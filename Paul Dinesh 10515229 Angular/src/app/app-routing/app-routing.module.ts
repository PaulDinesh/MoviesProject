//<!--Paul Dinesh 10515229-->
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import {MovielistComponent} from '../movielist/movielist.component';
import { TicketnumberComponent } from '../ticketnumber/ticketnumber.component';
import {SeatComponent} from '../seat/seat.component'
import {TestComponent} from '../test/test.component'

const appRoutes: Routes = [
  { path: 'Movie list', component: MovielistComponent },
  { path: 'TicketNumber', component: TicketnumberComponent },
  { path: 'Seat', component: SeatComponent },
  { path: 'Test', component: TestComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];


@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }