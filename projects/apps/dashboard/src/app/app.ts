import { Component, signal } from '@angular/core';
import { Layout, RapidStats, SeasonStrip } from '@ui';

@Component({
  selector: 'app-root',
  imports: [Layout, SeasonStrip, RapidStats],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('dashboard');
}
