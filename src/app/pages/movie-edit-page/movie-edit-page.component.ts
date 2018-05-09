import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-edit-page',
  templateUrl: './movie-edit-page.component.html',
  styleUrls: ['./movie-edit-page.component.css']
})
export class MovieEditPageComponent implements OnInit {

  feedbackEnabled: boolean;
  error: string;
  processing: boolean;
  movie: any;

  constructor(private movieService: MovieService, private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;

      this.movieService.getOne(id)
        .then((data) => {
          this.movie = data
        })
        .catch((err) => {
          console.log(err);
        })
    });
  }

  hadleSubmitForm(movie) {
    this.movieService.update(movie)
      .then((data) => {
        this.movie = data;
        this.router.navigate([`/movies/${movie._id}`]);
      })
      .catch((err) => {
        this.error = err.error.code;
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }
}
