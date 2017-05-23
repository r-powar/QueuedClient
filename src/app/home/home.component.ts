import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {QueuedService} from '../queued.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route$: Router;
  queued$: QueuedService;
  constructor(
    queued: QueuedService,
    route: Router
  ) {
    this.route$ = route;
    this.queued$ = queued;
  }

  ngOnInit() {
  }

}
