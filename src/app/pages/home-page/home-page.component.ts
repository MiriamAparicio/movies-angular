import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: Array<any>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.listAll()
    .then((data) => {
      this.movies = data;
    })
  }

}
