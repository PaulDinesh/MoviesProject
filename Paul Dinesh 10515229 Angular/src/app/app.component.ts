//<!--Paul Dinesh 10515229-->
import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Movie Listing';
  movieListing = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(listOfMoviesResult => {
      console.log(listOfMoviesResult);
      this.movieListing = listOfMoviesResult;

    })

    //this.movieListing = this.movieService.getMovies();

  }




}
