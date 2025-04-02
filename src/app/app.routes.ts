import { Routes } from '@angular/router';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

export const routes: Routes = [
    { path: '**', redirectTo: '/' }
];
