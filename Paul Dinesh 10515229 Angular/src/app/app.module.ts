//<!--Paul Dinesh 10515229-->
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MovieService } from './movie.service';
import {HttpClientModule} from '@angular/common/http';
import {MovielistComponent} from './movielist/movielist.component';
import { TicketnumberComponent } from './ticketnumber/ticketnumber.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { SeatComponent } from './seat/seat.component';
import { TestComponent } from './test/test.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,AppRoutingModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,MovielistComponent, TicketnumberComponent, SeatComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MovieService]
})
export class AppModule { }
