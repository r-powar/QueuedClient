import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { RestaurantModel } from './share/restaurantModel';
import { SearchModel } from './share/searchModel';

@Injectable()
export class SearchService {
  private results;
  host = 'http://localhost:8080';

  constructor(private http: Http) {}

  getResults(): Observable<RestaurantModel[]> {
    return this.http.get(this.host + '/queued/restaurantlist').map(res => res.json());
  }

  searchResults(body: Object): Observable<RestaurantModel[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post( this.host + '/queued/restaurantlist/search', JSON.stringify(body), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
