//<!--Paul Dinesh 10515229-->
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router}from '@angular/router';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ticketnumber',
  templateUrl: './ticketnumber.component.html',
  styleUrls: ['./ticketnumber.component.css']
})
export class TicketnumberComponent implements OnInit {
public child : number = 0;
public adult : number = 0;
public student : number = 0;
public totalcost: number;
public total: number=this.child+this.adult+this.student;
    increment_child(){
      this.child += 1;
      this.totalcost=this.child*8.5+this.adult*10.5+this.student*9.50;
      this.total=this.child+this.adult+this.student;
      
    }
    decrement_child(){
      this.child -= 1;
      this.totalcost=this.child*8.5+this.adult*10.5+this.student*9.50;
      this.total=this.child+this.adult+this.student;
    }

    increment_adult(){
      this.adult += 1;
      this.totalcost=this.child*8.5+this.adult*10.5+this.student*9.50;
      this.total=this.child+this.adult+this.student;

    }
    decrement_adult(){
      this.adult -= 1;
      this.totalcost=this.child*8.5+this.adult*10.5+this.student*9.50;
      this.total=this.child+this.adult+this.student;

    }
    increment_student(){
      this.student += 1;
      this.totalcost=this.child*8.5+this.adult*10.5+this.student*9.50;
      this.total=this.child+this.adult+this.student;

    }
    decrement_student(){
      this.student -= 1;
      this.totalcost=this.child*8.5+this.adult*10.5+this.student*9.50;
      this.total=this.child+this.adult+this.student;

    }

name = new FormControl('');

profileForm:FormGroup;

constructor(private _activatedRoute: ActivatedRoute,
  private _router: Router, private fb: FormBuilder) { 

this.profileForm=this.formbuild(fb);
}

formbuild( fb: FormBuilder)
{
return fb.group ({
    firstName: new FormControl('1'),
    lastName: new FormControl(''),
  });
  
}

sel_num:number=1;

SelectNo() : void{
  console.log(this.sel_num);
}
OnSubmit()
{if(this.total==0)
{alert("Please select seats ");}
else{
  this._router.navigate(['/Seat']);
localStorage.setItem('numberoftickets',JSON.stringify(this.total));
localStorage.setItem('totalcost',JSON.stringify(this.totalcost));
}

console.log(this.profileForm.value);}

Back_button() : void
{this._router.navigate(['/Movie list']);}
  


  ngOnInit() {
  }

}