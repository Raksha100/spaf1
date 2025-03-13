import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class HomeComponent implements OnInit {

  races = [
    { grandPrix: 'Australian Grand Prix', date: 'March 16, 2025', circuit: 'Melbourne', location: 'Australia' },
    { grandPrix: 'Bahrain Grand Prix', date: 'March 23, 2025', circuit: 'Sakhir', location: 'Bahrain' },
    { grandPrix: 'Saudi Arabian Grand Prix', date: 'April 6, 2025', circuit: 'Jeddah', location: 'Saudi Arabia' },
    { grandPrix: 'Japanese Grand Prix', date: 'April 13, 2025', circuit: 'Suzuka', location: 'Japan' },
    { grandPrix: 'Chinese Grand Prix', date: 'April 20, 2025', circuit: 'Shanghai', location: 'China' },
    { grandPrix: 'Miami Grand Prix', date: 'May 4, 2025', circuit: 'Miami', location: 'USA' },
    { grandPrix: 'Emilia Romagna Grand Prix', date: 'May 18, 2025', circuit: 'Imola', location: 'Italy' },
    { grandPrix: 'Monaco Grand Prix', date: 'May 25, 2025', circuit: 'Monte Carlo', location: 'Monaco' },
    { grandPrix: 'Canadian Grand Prix', date: 'June 8, 2025', circuit: 'Montreal', location: 'Canada' },
    { grandPrix: 'Spanish Grand Prix', date: 'June 22, 2025', circuit: 'Barcelona', location: 'Spain' },
    { grandPrix: 'Austrian Grand Prix', date: 'June 29, 2025', circuit: 'Red Bull Ring', location: 'Austria' },
    { grandPrix: 'British Grand Prix', date: 'July 6, 2025', circuit: 'Silverstone', location: 'UK' },
    { grandPrix: 'Hungarian Grand Prix', date: 'July 20, 2025', circuit: 'Hungaroring', location: 'Hungary' },
    { grandPrix: 'Belgian Grand Prix', date: 'July 27, 2025', circuit: 'Spa-Francorchamps', location: 'Belgium' },
    { grandPrix: 'Dutch Grand Prix', date: 'August 24, 2025', circuit: 'Zandvoort', location: 'Netherlands' },
    { grandPrix: 'Italian Grand Prix', date: 'August 31, 2025', circuit: 'Monza', location: 'Italy' },
    { grandPrix: 'Azerbaijan Grand Prix', date: 'September 14, 2025', circuit: 'Baku', location: 'Azerbaijan' },
    { grandPrix: 'Singapore Grand Prix', date: 'September 21, 2025', circuit: 'Marina Bay', location: 'Singapore' },
    { grandPrix: 'United States Grand Prix', date: 'October 5, 2025', circuit: 'Austin', location: 'USA' },
    { grandPrix: 'Mexico City Grand Prix', date: 'October 26, 2025', circuit: 'Mexico City', location: 'Mexico' },
    { grandPrix: 'São Paulo Grand Prix', date: 'November 9, 2025', circuit: 'Interlagos', location: 'Brazil' },
    { grandPrix: 'Las Vegas Grand Prix', date: 'November 22, 2025', circuit: 'Las Vegas', location: 'USA' },
    { grandPrix: 'Abu Dhabi Grand Prix', date: 'December 7, 2025', circuit: 'Yas Marina', location: 'UAE' }
  ];

  drivers = [
    'Max Verstappen', 'Sergio Perez', 'Lewis Hamilton', 'George Russell',
    'Charles Leclerc', 'Carlos Sainz', 'Lando Norris', 'Oscar Piastri',
    'Fernando Alonso', 'Lance Stroll', 'Yuki Tsunoda', 'Daniel Ricciardo',
    'Esteban Ocon', 'Pierre Gasly', 'Valtteri Bottas', 'Zhou Guanyu',
    'Kevin Magnussen', 'Nico Hulkenberg', 'Logan Sargeant', 'Alexander Albon'
  ];

  podiumSelections: { [race: string]: { p1: string; p2: string; p3: string } } = {};

  nextRace: any;
  countdown: string = '';

  ngOnInit() {
    this.findNextRace();
    this.startCountdown();
  }

  getPodium(race: string): { p1: string; p2: string; p3: string } {
    if (!this.podiumSelections[race]) {
      this.podiumSelections[race] = { p1: '', p2: '', p3: '' };
    }
    return this.podiumSelections[race];
  }

  findNextRace() {
    const today = new Date();
    this.nextRace = this.races.find(race => new Date(race.date) > today);
  }

  startCountdown() {
    if (!this.nextRace) return;

    const raceDate = new Date(this.nextRace.date).getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = raceDate - now;

      if (distance < 0) {
        this.countdown = 'Race Day!';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }
}
