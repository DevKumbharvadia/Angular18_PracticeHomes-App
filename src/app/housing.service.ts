import { Injectable } from '@angular/core';
import { HousingLocation } from './housingLocation'
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3001/locations';

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? '';
  }

  async geiHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? '';
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName,lastName,email);
  }
}
