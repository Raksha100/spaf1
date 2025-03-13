import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-races',
  standalone: true,
  template: `
    <section class="upcoming-container">
      <h2>Upcoming Races</h2>

      @if (upcomingRaces.length > 0) {
        <div class="race-card" *for="let race of upcomingRaces">
          <h3>{{ race.grandPrix }}</h3>
          <p><strong>Date:</strong> {{ race.date }}</p>
          <p><strong>Location:</strong> {{ race.location }}</p>
          <button (click)="viewRaceDetails(race)">View Details</button>
        </div>
      } @else {
        <p>No upcoming races.</p>
      }

      @if (selectedRace) {
        <div class="race-details">
          <h3>{{ selectedRace.grandPrix }} Details</h3>
          <p><strong>Circuit:</strong> {{ selectedRace.circuit }}</p>
          <p><strong>Date:</strong> {{ selectedRace.date }}</p>
          <p><strong>Location:</strong> {{ selectedRace.location }}</p>
          <button (click)="closeDetails()">Close</button>
        </div>
      }
    </section>
  `,
  styleUrls: ['./upcoming-races.component.scss']
})
export class UpcomingRacesComponent {
  upcomingRaces = [
    {
      grandPrix: 'Australian Grand Prix',
      circuit: 'Melbourne Grand Prix Circuit',
      date: '16 March 2025',
      location: 'Melbourne, Australia'
    },
    {
      grandPrix: 'Saudi Arabian Grand Prix',
      circuit: 'Jeddah Street Circuit',
      date: '23 March 2025',
      location: 'Jeddah, Saudi Arabia'
    },
    {
      grandPrix: 'Japanese Grand Prix',
      circuit: 'Suzuka International Racing Course',
      date: '6 April 2025',
      location: 'Suzuka, Japan'
    },
    {
      grandPrix: 'Chinese Grand Prix',
      circuit: 'Shanghai International Circuit',
      date: '20 April 2025',
      location: 'Shanghai, China'
    },
    {
      grandPrix: 'Miami Grand Prix',
      circuit: 'Miami International Autodrome',
      date: '4 May 2025',
      location: 'Miami, USA'
    },
    {
      grandPrix: 'Spanish Grand Prix',
      circuit: 'Circuit de Barcelona-Catalunya',
      date: '18 May 2025',
      location: 'Barcelona, Spain'
    },
    {
      grandPrix: 'Monaco Grand Prix',
      circuit: 'Circuit de Monaco',
      date: '25 May 2025',
      location: 'Monte Carlo, Monaco'
    },
    {
      grandPrix: 'Canadian Grand Prix',
      circuit: 'Circuit Gilles Villeneuve',
      date: '8 June 2025',
      location: 'Montreal, Canada'
    },
    {
      grandPrix: 'Austrian Grand Prix',
      circuit: 'Red Bull Ring',
      date: '29 June 2025',
      location: 'Spielberg, Austria'
    },
    {
      grandPrix: 'British Grand Prix',
      circuit: 'Silverstone Circuit',
      date: '6 July 2025',
      location: 'Silverstone, UK'
    },
    {
      grandPrix: 'Hungarian Grand Prix',
      circuit: 'Hungaroring',
      date: '20 July 2025',
      location: 'Mogyoród, Hungary'
    },
    {
      grandPrix: 'Belgian Grand Prix',
      circuit: 'Circuit de Spa-Francorchamps',
      date: '27 July 2025',
      location: 'Spa, Belgium'
    },
    {
      grandPrix: 'Dutch Grand Prix',
      circuit: 'Circuit Zandvoort',
      date: '24 August 2025',
      location: 'Zandvoort, Netherlands'
    },
    {
      grandPrix: 'Italian Grand Prix',
      circuit: 'Autodromo Nazionale Monza',
      date: '31 August 2025',
      location: 'Monza, Italy'
    },
    {
      grandPrix: 'Azerbaijan Grand Prix',
      circuit: 'Baku City Circuit',
      date: '14 September 2025',
      location: 'Baku, Azerbaijan'
    },
    {
      grandPrix: 'Singapore Grand Prix',
      circuit: 'Marina Bay Street Circuit',
      date: '21 September 2025',
      location: 'Singapore'
    },
    {
      grandPrix: 'United States Grand Prix',
      circuit: 'Circuit of the Americas',
      date: '5 October 2025',
      location: 'Austin, USA'
    },
    {
      grandPrix: 'Mexico City Grand Prix',
      circuit: 'Autódromo Hermanos Rodríguez',
      date: '26 October 2025',
      location: 'Mexico City, Mexico'
    },
    {
      grandPrix: 'Brazilian Grand Prix',
      circuit: 'Interlagos Circuit',
      date: '9 November 2025',
      location: 'São Paulo, Brazil'
    },
    {
      grandPrix: 'Las Vegas Grand Prix',
      circuit: 'Las Vegas Street Circuit',
      date: '22 November 2025',
      location: 'Las Vegas, USA'
    },
    {
      grandPrix: 'Qatar Grand Prix',
      circuit: 'Lusail International Circuit',
      date: '30 November 2025',
      location: 'Lusail, Qatar'
    },
    {
      grandPrix: 'Abu Dhabi Grand Prix',
      circuit: 'Yas Marina Circuit',
      date: '7 December 2025',
      location: 'Abu Dhabi, UAE'
    }
  ];

  selectedRace: any = null;

  viewRaceDetails(race: any) {
    this.selectedRace = race;
  }

  closeDetails() {
    this.selectedRace = null;
  }
}
