import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { RestaurantModel } from '../../restaurantModel';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  private results:RestaurantModel[];

  constructor(private _SearchService:SearchService) {
    
  }

  ngOnInit() {
    this._SearchService.getResults().subscribe(results => {
      this.results = results;
    });
  }

  makeReservation() {

  }

}
