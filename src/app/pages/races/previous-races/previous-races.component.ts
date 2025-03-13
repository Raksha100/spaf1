import { Component } from '@angular/core';

@Component({
  selector: 'app-previous-races',
  templateUrl: './previous-races.component.html',
  styleUrls: ['./previous-races.component.scss'],
  standalone: true
})
export class PreviousRacesComponent {
  previousRaces = [
    { name: 'Monaco Grand Prix', date: 'May 26, 2024', location: 'Monte Carlo, Monaco' },
    { name: 'Italian Grand Prix', date: 'September 8, 2024', location: 'Monza, Italy' },
    // Add more past races...
  ];
}
