import { Component } from '@angular/core';

@Component({
  selector: 'app-race-calendar',
  standalone: true,
  template: `
    <section class="races-container">
      <h2>2025 Race Calendar</h2>

      @if (races.length > 0) {
        <div class="race-card" *for="let race of races">
          <h3>{{ race.grandPrix }}</h3>
          <p><strong>Circuit:</strong> {{ race.circuit }}</p>
          <p><strong>Date:</strong> {{ race.date }}</p>
          <p><strong>Location:</strong> {{ race.location }}</p>
          <button (click)="showRaceDetails(race)">View Details</button>
        </div>
      } @else {
        <p>No races available.</p>
      }

      @if (selectedRace) {
        <div class="race-details">
          <h3>Race Details: {{ selectedRace.grandPrix }}</h3>
          <p><strong>Circuit:</strong> {{ selectedRace.circuit }}</p>
          <p><strong>Date:</strong> {{ selectedRace.date }}</p>
          <p><strong>Location:</strong> {{ selectedRace.location }}</p>
          <button (click)="closeRaceDetails()">Close</button>
        </div>
      }
    </section>
  `,
  styleUrls: ['./race-calendar.component.scss']
})
export class RaceCalendarComponent {
  races = [
    {
      grandPrix: 'Australian Grand Prix',
      circuit: 'Albert Park Circuit',
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
    }
  ];

  selectedRace: any = null;

  showRaceDetails(race: any) {
    this.selectedRace = race;
  }

  closeRaceDetails() {
    this.selectedRace = null;
  }
}
