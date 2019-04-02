//<!--Paul Dinesh 10515229-->
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router}from '@angular/router';
import {MovielistComponent} from '../movielist/movielist.component';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

//variable declarations
    movieTitle:string = localStorage.getItem('movie.title');
   screen: string = localStorage.getItem('movie.day');
    time: string = JSON.parse(localStorage.getItem('movie.time'));
    nooftickets: number = JSON.parse(localStorage.getItem('numberoftickets'));
    total: number = JSON.parse(localStorage.getItem('totalcost'));

    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
    selected: string[] = [];

    
    convFee: number = 0.5;
        currency: string = "€";

    //return status of each seat
    getStatus = function(seatPos: string) {
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    }
    //clear handler
    clearSelected = function() {
        this.selected = [];
    }
    //click handler
    seatClicked = function(seatPos: string) {
        var index = this.selected.indexOf(seatPos);
        
        if(index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1)
        } else {
            //push to selected array only if it is not reserved
            if(this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    //Buy button handler
    showSelected = function() {
if(this.selected.length>this.nooftickets)
{alert("Selected seats exceed "+this.nooftickets+" tickets");}
if(this.selected.length<this.nooftickets)
{alert("Please select "+this.nooftickets+" tickets");}
        if(this.selected.length > 0 && this.selected.length==this.nooftickets) {
            alert("Selected Seats: " + this.selected + "\nTotal: "+this.currency+(this.total + this.convFee));
        } 
    }


Back_button() : void
{this._router.navigate(['/TicketNumber']);}
  constructor(private _activatedRoute: ActivatedRoute,
  private _router: Router) { }
  ngOnInit() {
  }

}