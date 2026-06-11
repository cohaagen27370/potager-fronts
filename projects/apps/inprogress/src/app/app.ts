import { Component, signal } from '@angular/core';
import { Layout } from '@ui';
import { environment as Environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('inprogress');

  environment = Environment;

}
