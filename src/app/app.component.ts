import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MissionListComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101422756-lab-test2-comp3133';
}
