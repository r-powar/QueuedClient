import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {QueuedService} from '../queued.service';
import { TimeModel } from '../share/submitTimeModel';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  route$: Router;
  queued$: QueuedService;
  showTime: boolean;
  private model = new TimeModel(String(), Number(), Number());
  constructor(
    queued: QueuedService,
    route: Router
  ) {
    this.route$ = route;
    this.queued$ = queued;
    this.showTime = false;
    this.queued$.getUserInfo()
      .subscribe(
        (result: any) => {
          this.model.id = result.displayName;
        },
        () => console.log('name: ' + this.model.id)
      );
  }

  showTimeForm() {
    this.showTime = true;
  }

  submitTime() {
    this.queued$.submitWaitTimes(this.model)
      .subscribe();

  }
  ngOnInit() {
  }

}
