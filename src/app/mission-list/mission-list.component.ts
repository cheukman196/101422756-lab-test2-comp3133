import { Component, OnInit } from '@angular/core';
import { Mission } from '../types/types';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MissionDetailsComponent } from '../mission-details/mission-details.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  imports: [CommonModule, MatCardModule, MatButtonModule, MissionDetailsComponent, RouterModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent implements OnInit {
  displayData: Mission[] = [];
  selectedMission: Mission | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.launchData$.subscribe(data => this.displayData = data)
      this.dataService.fetchData();
      this.selectedMission = this.displayData[0]
  }

  selectMission(mission: Mission){
    this.selectedMission = mission
  }
}
