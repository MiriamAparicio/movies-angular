import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieCreatePageComponent } from './pages/movie-create-page/movie-create-page.component';

import { MovieService } from './services/movie.service';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies/create', component: MovieCreatePageComponent },
  { path: 'movies/:id', component: MovieDetailPageComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCardComponent,
    MovieDetailPageComponent,
    MovieCreatePageComponent,
    MovieFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    MovieService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
