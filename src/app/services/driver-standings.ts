import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverStandingsService {
  private driverStandings = [
    { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 0 },
    { id: 2, name: 'Liam Lawson', team: 'Red Bull Racing', points: 0 },
    { id: 3, name: 'Charles Leclerc', team: 'Ferrari', points: 0 },
    { id: 4, name: 'Lewis Hamilton', team: 'Ferrari', points: 0 },
    { id: 5, name: 'George Russell', team: 'Mercedes', points: 0 },
    { id: 6, name: 'Andrea Kimi Antonelli', team: 'Mercedes', points: 0 },
    { id: 7, name: 'Lando Norris', team: 'McLaren', points: 0 },
    { id: 8, name: 'Oscar Piastri', team: 'McLaren', points: 0 },
    { id: 9, name: 'Fernando Alonso', team: 'Aston Martin', points: 0 },
    { id: 10, name: 'Lance Stroll', team: 'Aston Martin', points: 0 },
    { id: 11, name: 'Pierre Gasly', team: 'Alpine', points: 0 },
    { id: 12, name: 'Jack Doohan', team: 'Alpine', points: 0 },
    { id: 13, name: 'Esteban Ocon', team: 'Haas', points: 0 },
  ];

  getStandings() {
    return this.driverStandings;
  }

  updatePoints(driverName: string, points: number) {
    const driver = this.driverStandings.find(d => d.name === driverName);
    if (driver) {
      driver.points += points;
    }
  }
}
