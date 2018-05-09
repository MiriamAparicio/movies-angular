import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})

export class MovieDetailPageComponent implements OnInit {
  
  movie: Object;
  idMovie: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.idMovie = params.id;
        this.movieService.getOne(this.idMovie)
          .then(data => {
            this.movie = data
          });
      });
  }

  delete() {
    this.movieService.deleteMovie(this.idMovie)
    .then(() => {
      this.router.navigate(['/']);
    })
      .catch((err) => {
    });
  }

}
