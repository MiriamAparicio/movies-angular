import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/movies`, options)
      .toPromise();
  }

  getOne(id): Promise <any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/movies/${id}`,options)
    .toPromise();
  }

  create(movie: Object): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/movies`, movie, options)
      .toPromise();
  }

  update(movie: any): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.put(`${this.baseUrl}/movies/${movie._id}`, movie, options)
    .toPromise();
  }

  deleteMovie(id){
    const options = {
      withCredentials: true
    };

    return this.httpClient.delete(`${this.baseUrl}/movies/${id}`, options)
    .toPromise();
  }

}
