import { Component, OnInit } from '@angular/core';
import { SearchresultsComponent } from '../searchresults/searchresults.component';
import { SearchService } from '../search.service';
import { HttpModule } from '@angular/http';

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

  constructor(private _SearchService:SearchService) {
    this.showResults = false;
  }

  ngOnInit() {

  }

  runSearch() {
    this.showResults = true;
  }

}
