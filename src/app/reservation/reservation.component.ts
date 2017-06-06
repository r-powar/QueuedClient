import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {QueuedService} from '../queued.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  username: string;
  useremail: string;
  route$: Router;
  queued$: QueuedService;
  constructor(route: Router, queued: QueuedService) {
    this.queued$ = queued;
    this.route$ = route;
    this.queued$.getUserInfo()
      .subscribe(
        result => {
            this.username = result.displayName;
            this.useremail = result.emails[0].value;
        }
      );
  }

  ngOnInit() {
  }

}
