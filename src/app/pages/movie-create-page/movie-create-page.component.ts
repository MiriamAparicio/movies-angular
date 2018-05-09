import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movie-create-page',
  templateUrl: './movie-create-page.component.html',
  styleUrls: ['./movie-create-page.component.css']
})
export class MovieCreatePageComponent implements OnInit {

  feedbackEnabled: boolean;
  error: string;
  processing: boolean;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

  hadleSubmitForm(movie) {
      this.movieService.create(movie)
        .then((result) => {
          this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  
}
