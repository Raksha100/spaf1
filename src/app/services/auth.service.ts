import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Signal to track if logged in
  private _isLoggedIn = signal<boolean>(false);
  private _username = signal<string>('');

  constructor() {
    // Optional: Check sessionStorage for persistent login
    const user = sessionStorage.getItem('username');
    if (user) {
      this._isLoggedIn.set(true);
      this._username.set(user);
    }
  }

  login(username: string, password: string): boolean {
    // Simple demo login logic (replace with real auth later)
    if (username && password) {
      this._isLoggedIn.set(true);
      this._username.set(username);

      sessionStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void {
    this._isLoggedIn.set(false);
    this._username.set('');
    sessionStorage.clear();
  }

  isLoggedIn() {
    return this._isLoggedIn.asReadonly();
  }

  getUsername() {
    return this._username.asReadonly();
  }
}
