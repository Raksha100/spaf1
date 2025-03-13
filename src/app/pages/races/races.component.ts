import { Component, OnInit } from '@angular/core';

interface Race {
  grandPrix: string;
  circuit: string;
  date: string; // ISO format
  day: string;
  location: string;
  trackLength: string;
  drivers: string[];
  isUpcoming: boolean;
}

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  allRaces: Race[] = [
    {
      grandPrix: 'Australian Grand Prix',
      circuit: 'Albert Park Circuit',
      date: '2025-03-16',
      day: 'Sunday',
      location: 'Melbourne, Australia',
      trackLength: '5.278 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Chinese Grand Prix',
      circuit: 'Shanghai International Circuit',
      date: '2025-03-23',
      day: 'Sunday',
      location: 'Shanghai, China',
      trackLength: '5.451 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Japanese Grand Prix',
      circuit: 'Suzuka International Racing Course',
      date: '2025-04-06',
      day: 'Sunday',
      location: 'Suzuka, Japan',
      trackLength: '5.807 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Bahrain Grand Prix',
      circuit: 'Bahrain International Circuit',
      date: '2025-04-13',
      day: 'Sunday',
      location: 'Sakhir, Bahrain',
      trackLength: '5.412 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Miami Grand Prix',
      circuit: 'Miami International Autodrome',
      date: '2025-05-04',
      day: 'Sunday',
      location: 'Miami, USA',
      trackLength: '5.412 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Emilia Romagna Grand Prix',
      circuit: 'Imola Circuit',
      date: '2025-05-18',
      day: 'Sunday',
      location: 'Imola, Italy',
      trackLength: '4.909 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Monaco Grand Prix',
      circuit: 'Circuit de Monaco',
      date: '2025-05-25',
      day: 'Sunday',
      location: 'Monte Carlo, Monaco',
      trackLength: '3.337 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Canadian Grand Prix',
      circuit: 'Circuit Gilles Villeneuve',
      date: '2025-06-08',
      day: 'Sunday',
      location: 'Montreal, Canada',
      trackLength: '4.361 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Spanish Grand Prix',
      circuit: 'Circuit de Barcelona-Catalunya',
      date: '2025-06-22',
      day: 'Sunday',
      location: 'Barcelona, Spain',
      trackLength: '4.675 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Austrian Grand Prix',
      circuit: 'Red Bull Ring',
      date: '2025-06-29',
      day: 'Sunday',
      location: 'Spielberg, Austria',
      trackLength: '4.318 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'British Grand Prix',
      circuit: 'Silverstone Circuit',
      date: '2025-07-06',
      day: 'Sunday',
      location: 'Silverstone, UK',
      trackLength: '5.891 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Hungarian Grand Prix',
      circuit: 'Hungaroring',
      date: '2025-07-20',
      day: 'Sunday',
      location: 'Budapest, Hungary',
      trackLength: '4.381 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Belgian Grand Prix',
      circuit: 'Circuit de Spa-Francorchamps',
      date: '2025-07-27',
      day: 'Sunday',
      location: 'Spa, Belgium',
      trackLength: '7.004 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Dutch Grand Prix',
      circuit: 'Circuit Zandvoort',
      date: '2025-08-31',
      day: 'Sunday',
      location: 'Zandvoort, Netherlands',
      trackLength: '4.259 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Italian Grand Prix',
      circuit: 'Monza Circuit',
      date: '2025-09-07',
      day: 'Sunday',
      location: 'Monza, Italy',
      trackLength: '5.793 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Azerbaijan Grand Prix',
      circuit: 'Baku City Circuit',
      date: '2025-09-21',
      day: 'Sunday',
      location: 'Baku, Azerbaijan',
      trackLength: '6.003 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Singapore Grand Prix',
      circuit: 'Marina Bay Street Circuit',
      date: '2025-10-05',
      day: 'Sunday',
      location: 'Singapore',
      trackLength: '5.063 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'United States Grand Prix',
      circuit: 'Circuit of the Americas',
      date: '2025-10-19',
      day: 'Sunday',
      location: 'Austin, USA',
      trackLength: '5.513 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Mexico City Grand Prix',
      circuit: 'Autódromo Hermanos Rodríguez',
      date: '2025-10-26',
      day: 'Sunday',
      location: 'Mexico City, Mexico',
      trackLength: '4.304 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'São Paulo Grand Prix',
      circuit: 'Interlagos Circuit',
      date: '2025-11-09',
      day: 'Sunday',
      location: 'São Paulo, Brazil',
      trackLength: '4.309 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Las Vegas Grand Prix',
      circuit: 'Las Vegas Street Circuit',
      date: '2025-11-22',
      day: 'Saturday',
      location: 'Las Vegas, USA',
      trackLength: '6.120 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Qatar Grand Prix',
      circuit: 'Lusail International Circuit',
      date: '2025-12-01',
      day: 'Monday',
      location: 'Lusail, Qatar',
      trackLength: '5.380 km',
      drivers: [],
      isUpcoming: true
    },
    {
      grandPrix: 'Abu Dhabi Grand Prix',
      circuit: 'Yas Marina Circuit',
      date: '2025-12-08',
      day: 'Monday',
      location: 'Abu Dhabi, UAE',
      trackLength: '5.554 km',
      drivers: [],
      isUpcoming: true
    }
  ];

  upcomingRaces: Race[] = [];
  previousRaces: Race[] = [];

  showUpcoming: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.updateRaceStatus();
  }

  updateRaceStatus(): void {
    const today = new Date();

    this.allRaces.forEach(race => {
      const raceDate = new Date(race.date);
      race.isUpcoming = raceDate >= today;
    });

    this.upcomingRaces = this.allRaces.filter(race => race.isUpcoming);
    this.previousRaces = this.allRaces.filter(race => !race.isUpcoming);

    this.upcomingRaces.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.previousRaces.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

}
