import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {QueuedService} from '../queued.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  route$: Router;
  queued$: QueuedService;
  constructor(route: Router, queued: QueuedService) {
    this.queued$ = queued;
    this.route$ = route;
  }

  ngOnInit() {
  }

}
