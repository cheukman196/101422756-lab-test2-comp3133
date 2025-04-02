import { Component, OnInit } from '@angular/core';
import { Mission } from '../types/types';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-mission-list',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent implements OnInit {
  displayData: Mission[] = []

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.launchData$.subscribe(data => this.displayData = data)
      this.dataService.fetchData();
  }
}
