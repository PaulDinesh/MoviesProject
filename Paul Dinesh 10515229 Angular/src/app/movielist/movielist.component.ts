//<!--Paul Dinesh 10515229-->
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import {ActivatedRoute,Router}from '@angular/router';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
name = 'Movie Listing';

  movieListing = [];
  
  constructor(private movieService: MovieService,
  private _activatedRoute: ActivatedRoute,
  private _router: Router) { }

Onclickbutton() : void
{this._router.navigate(['/TicketNumber']);
localStorage.setItem('movie.title',this.sel_movie);
localStorage.setItem('movie.time',JSON.stringify(this.sel_time));
localStorage.setItem('movie.day',this.sel_day);
}

isCollapsed : boolean =true;
toggleCollapse(){
  this.isCollapsed=!this.isCollapsed;
}

sel_movie : string;
sel_time : number;
sel_day: string;

selected(movie_title,movie_time,day){
  this.sel_movie = movie_title;
this.sel_time=movie_time;
this.sel_day=day;
console.log(this.sel_movie,this.sel_time,this.sel_day);

}

  ngOnInit() {this.movieService.getMovies().subscribe(listOfMoviesResult => {
      console.log(listOfMoviesResult);
      this.movieListing = listOfMoviesResult;

  })

}
}