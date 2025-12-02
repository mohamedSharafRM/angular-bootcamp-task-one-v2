import { Component, signal } from '@angular/core';

import { Home } from "./components/home/home";
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/layout/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-one-session5');
}
