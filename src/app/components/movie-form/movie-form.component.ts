import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})

export class MovieFormComponent implements OnInit {

  @Input() feedbackEnabled: boolean;
  @Input() error: string;
  @Input() processing: boolean;
  @Input() movie: any;

  @Output() submitData: EventEmitter<any> = new EventEmitter();

  constructor(private movieService: MovieService, private router: Router) {
    this.movie = {};
   }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitData.emit(this.movie);
    }
  }

}


// "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg/https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"