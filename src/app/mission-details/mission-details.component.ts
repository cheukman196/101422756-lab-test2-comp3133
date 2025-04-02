import { Component, Input } from '@angular/core';
import { Mission } from '../types/types';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-details',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent {
  constructor(private route: ActivatedRoute) {}

  @Input() mission: Mission | undefined;
}
