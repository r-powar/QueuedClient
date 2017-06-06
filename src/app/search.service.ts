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

  searchResults(search: SearchModel): Observable<RestaurantModel[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    var url = '/queued/restaurantlist/search?';
    if (search.searchCity) {
      url += ('city=' + search.searchCity + '&');
    }
    if (search.searchState) {
      url += ('state=' + search.searchState + '&');
    }
    if (search.searchCuisine) {
      url += ('cuisine=' + search.searchCuisine + '&');
    }
    if (search.searchBudget) {
      url += ('budget=' + search.searchBudget + '&');
    }
    if (search.searchWait) {
      url += ('wait=' + search.searchWait.toString());
    }

    console.log(url);

    return this.http.get((this.host + url), options)
      .map((res: Response) => res.json());
  }
}
