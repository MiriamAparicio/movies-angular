
/** angular imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


/** pages */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieCreatePageComponent } from './pages/movie-create-page/movie-create-page.component';
import { MovieEditPageComponent } from './pages/movie-edit-page/movie-edit-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
/** components */
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

/** services */
import { MovieService } from './services/movie.service';
import { AuthService } from './services/auth.service';

/** guards */
import { InitAuthGuardService } from './services/init-auth-guard.service';
import { RequireAnonGuardService } from './services/require-anon-guard.service';
import { RequireUserGuardService } from './services/require-user-guard.service';


/** routes */
const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [InitAuthGuardService] },
  { path: 'movies/create', component: MovieCreatePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'movies/:id', component: MovieDetailPageComponent, canActivate: [InitAuthGuardService]},
  { path: 'movies/:id/edit', component: MovieEditPageComponent },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService] },
  // { path: 'signup', component: AuthSignupPageComponent, canActivate: [RequireAnonGuardService] },
  // { path: 'page', component: ... , canActivate: [RequireUserGuardService] },
  { path: '**', redirectTo: '' }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCardComponent,
    MovieDetailPageComponent,
    MovieCreatePageComponent,
    MovieFormComponent,
    MovieEditPageComponent,
    LoginPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    MovieService,
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
