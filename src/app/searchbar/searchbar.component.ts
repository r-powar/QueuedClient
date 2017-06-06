import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpModule } from '@angular/http';
import { RestaurantModel } from '../share/restaurantModel';
import { SearchModel } from '../share/searchModel';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [SearchService, HttpModule]
})

export class SearchbarComponent implements OnInit {
  private searchCity;
  private searchState;
  private searchCuisine;
  private searchBudget;
  private searchWait;
  private showResults;

  private results:RestaurantModel[];

  constructor(private _SearchService:SearchService) {
  }

  ngOnInit() {
    this.showResults = false;
  }

  runSearch() {
    this.showResults = false;
    var search: SearchModel = new SearchModel();
    search.searchCity = this.searchCity;
    search.searchState = this.searchState;
    search.searchCuisine = this.searchCuisine;
    search.searchBudget = this.searchBudget;
    search.searchWait = this.searchWait;

    this._SearchService.searchResults(search).subscribe(results => {
      this.results = results;
    });

    this.showResults = true;
  }

  makeReservation() {

  }

}
