import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ConfigService } from './config.service';
import { Mission } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private fetchedlaunchData: BehaviorSubject<Mission[]> = new BehaviorSubject<Mission[]>([]);
  launchData$ = this.fetchedlaunchData.asObservable();

  constructor(private http: HttpClient, private config: ConfigService) { }

  search = (year: string) => {
    const apiUrl: string = this.config.getSpaceXApi();
    const searchUrl = apiUrl + "?launch_year=" + year
    this.fetchData(searchUrl)
  }

  fetchData = (url?: string) => {
    const apiUrl: string = this.config.getSpaceXApi();

    this.http.get<any[]>(url ?? apiUrl)
    .pipe(
      map(data => data.map(item => ({
        flight_number: item.flight_number,
        mission_name: item.mission_name,
        launch_year: item.launch_year,
        details: item.details,
        rocket: {
          rocket_name: item.rocket.rocket_name,
          rocket_type: item.rocket.rocket_type
        },
        links: {
          mission_patch_small: item.links.mission_patch_small,
          article_link: item.links.article_link,
          wikipedia: item.links.wikipedia,
          video_link: item.links.video_link
        }
      })))

    ).subscribe({
      next: data => {
        this.fetchedlaunchData.next(data);
      },
      error: error => {
        console.error('Error fetching data', error);
      }
    });;
  }
}
