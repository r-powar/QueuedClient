/**
 * Created by rpowar on 5/20/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { TimeModel } from './share/submitTimeModel';
import 'rxjs/add/operator/map';

@Injectable()
export class QueuedService {
  //host = 'http://localhost:8080';
  host = '';

  constructor(private http: Http) {}

  submitWaitTimes(body: Object): Observable<TimeModel[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post( this.host + '/queued/restaurantlist', JSON.stringify(body), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserInfo() {
    return this.http.get(this.host + '/auth/userInfo')
      .map(response => response.json());
  }
}
