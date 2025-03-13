import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drivers',
  standalone: true,
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  imports: [CommonModule] // This allows *ngFor and other directives to work!
})
export class DriversComponent {
  driversStandings = [
    { position: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 0 },
    { position: 2, name: 'Liam Lawson', team: 'Red Bull Racing', points: 0 },
    { position: 3, name: 'Charles Leclerc', team: 'Ferrari', points: 0 },
    { position: 4, name: 'Lewis Hamilton', team: 'Ferrari', points: 0 },
    { position: 5, name: 'George Russell', team: 'Mercedes', points: 0 },
    { position: 6, name: 'Andrea Kimi Antonelli', team: 'Mercedes', points: 0 },
    { position: 7, name: 'Lando Norris', team: 'McLaren', points: 0 },
    { position: 8, name: 'Oscar Piastri', team: 'McLaren', points: 0 },
    { position: 9, name: 'Fernando Alonso', team: 'Aston Martin', points: 0 },
    { position: 10, name: 'Lance Stroll', team: 'Aston Martin', points: 0 },
    { position: 11, name: 'Pierre Gasly', team: 'Alpine', points: 0 },
    { position: 12, name: 'Jack Doohan', team: 'Alpine', points: 0 },
    { position: 13, name: 'Esteban Ocon', team: 'Haas', points: 0 },
    { position: 14, name: 'Oliver Bearman', team: 'Haas', points: 0 },
    { position: 15, name: 'Alexander Albon', team: 'Williams', points: 0 },
    { position: 16, name: 'Carlos Sainz Jr.', team: 'Williams', points: 0 },
    { position: 17, name: 'Gabriel Bortoleto', team: 'Stake F1 Team Kick Sauber', points: 0 },
    { position: 18, name: 'Nico Hülkenberg', team: 'Stake F1 Team Kick Sauber', points: 0 },
    { position: 19, name: 'Yuki Tsunoda', team: 'Racing Bulls-Honda RBPT', points: 0 },
    { position: 20, name: 'Isack Hadjar', team: 'Racing Bulls-Honda RBPT', points: 0 }
  ];
}
