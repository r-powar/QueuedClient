/**
 * Created by rpowar on 5/20/17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QueuedService {
  host:string = "http://localhost:8080";

  constructor(private http: Http) {}

}
