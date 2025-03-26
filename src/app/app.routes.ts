import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RacesComponent } from './pages/races/races.component';
import { DriversComponent } from './pages/drivers/drivers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },            // Home page (default route)
  { path: 'races', component: RacesComponent },      // Races page
  { path: 'drivers', component: DriversComponent },  // Drivers page
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard - redirects to Home
];
