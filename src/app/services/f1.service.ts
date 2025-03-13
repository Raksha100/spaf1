import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class F1Service {
  getRaces() {
    return [
      { grandPrix: 'Australian Grand Prix', date: 'March 16, 2025', location: 'Melbourne' },
      { grandPrix: 'Bahrain Grand Prix', date: 'March 23, 2025', location: 'Sakhir' }
    ];
  }

  getDrivers() {
    return [
      { name: 'Max Verstappen' },
      { name: 'Lewis Hamilton' },
      { name: 'Charles Leclerc' }
    ];
  }
}
