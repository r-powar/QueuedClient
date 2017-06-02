import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { RestaurantModel } from './share/restaurantModel';

@Injectable()
export class SearchService {
  private results;
  url = 'http://localhost:8080/queued/restaurantlist';

  constructor(private http: Http) {}

  getResults(): Observable<RestaurantModel[]> {
    return this.http.get(this.url).map(res => res.json());
  }
}
