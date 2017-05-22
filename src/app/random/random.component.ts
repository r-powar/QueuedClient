import { Component, OnInit } from '@angular/core';
import {QueuedService} from '../queued.service';
import { Router, Params } from '@angular/router';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  queued$: QueuedService;
  route$: Router;
  constructor(
    queued: QueuedService,
    route: Router
  ) {
    this.queued$ = queued;
    this.route$ = route;
  }

  ngOnInit() {
  }

}
