import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {QueuedService} from '../queued.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
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
