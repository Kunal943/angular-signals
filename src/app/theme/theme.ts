import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: false,
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class Theme {

  theme = signal('light');
  label = this.theme();

  constructor() {
    effect(() => {
      this.label = this.theme();
      console.log(`Theme changed to: ${this.theme()}`);
      document.body.className = this.theme();
    });
  }

  toggleDarkMode() {
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }

}
