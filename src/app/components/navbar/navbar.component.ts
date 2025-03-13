import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // for routerLink and routerLinkActive

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/races" routerLinkActive="active-link">Races</a>
      <a routerLink="/drivers" routerLinkActive="active-link">Drivers</a>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}
