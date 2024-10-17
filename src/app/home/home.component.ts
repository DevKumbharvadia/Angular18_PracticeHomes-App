import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housingLocation';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgFor],
  template: `
<section>
  <form action="">
    <input type="text" placeholder="filter by city" #filter>
    <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
  </form>
</section>

<section class="results">
  <!-- Loop over the housingLocationList -->
  <app-housing-location 
    *ngFor="let housingLocation of filteredLocationList;"
    [housingLocation]="housingLocation">
  </app-housing-location>
</section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
       this.housingLocationList = housingLocationList;
       this.filteredLocationList = housingLocationList
    });
  }

  filterResults(text: string) {
    if(!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.filteredLocationList.filter(housingLocation => 
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
