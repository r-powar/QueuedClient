import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {QueuedService} from '../queued.service';
import { TimeModel } from '../share/submitTimeModel';
import { IProviderModel } from '../share/guestListModel';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  route$: Router;
  queued$: QueuedService;
  showTime: boolean;
  showGuestList: boolean;
  userId: string;
  private model = new TimeModel(String(), Number(), Number());
  private list: IProviderModel[];
  constructor(
    queued: QueuedService,
    route: Router
  ) {
    this.route$ = route;
    this.queued$ = queued;
    this.showTime = false;
    this.showGuestList = false;
    this.queued$.getUserInfo()
      .subscribe(
        (result: any) => {
          this.model.id = result.displayName;
          this.userId = result.displayName;
        },
        () => console.log('name: ' + this.model.id)
      );
  }

  showList() {
    this.queued$.getGuestList(this.userId)
      .subscribe(
        result => {
            this.list = result;
        }
      );
    this.showGuestList = true;
    this.showTime = false;
  }
  showTimeForm() {
    this.showTime = true;
    this.showGuestList = false;
  }

  submitTime() {
    this.queued$.submitWaitTimes(this.model)
      .subscribe();

  }
  ngOnInit() {
  }

}
