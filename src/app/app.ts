import { Component, computed, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-signals';

  allProducts: Product[] = [
    {id: 1, name: 'Milk', price: 20},
    {id: 2, name: 'Bread', price: 30},
    {id: 3, name: 'Tomatoes', price: 40}
  ];

  constructor(protected router: Router) {}
}
