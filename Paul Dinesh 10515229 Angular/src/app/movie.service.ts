//<!--Paul Dinesh 10515229-->
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { movieclass } from './movieclass';
@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<movieclass[]> {

    const url = 'https://college-movies.herokuapp.com/';
    console.log(url)
    return this.http.get<movieclass[]>(url);

  }


  _getMovies() {
    console.log("I am the movie service");
    const movies = [

      { title: 'Movie 1', year: 2016, director: 'Director 1' },
      { title: 'Movie 2', year: 2017, director: 'Director 2' },
      { title: 'Movie 3', year: 2018, director: 'Director 3' },
      { title: 'Movie 4', year: 2018, director: 'Director 4' }

    ];
    console.log(movies)
    return movies;

  }

}