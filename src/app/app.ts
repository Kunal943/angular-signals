import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-signals';

  theme = signal('light');
  label = this.theme();

  price = 8;
  quantity = signal(100);
  totalAmount = computed(() => {return this.price * this.quantity()});

  products = signal([
    {id: 1, name: 'Milk', price: 20},
    {id: 2, name: 'Bread', price: 430},
    {id: 3, name: 'Tomatoes', price: 24}
  ]);

  filterName = signal('');

  filteredProducts = computed(() => {
    return this.products().filter(product => 
      product.name.toLowerCase()
      .includes(this.filterName()));
  });

  constructor() {
    effect(() => {
      this.label = this.theme();
      console.log(`Theme changed to: ${this.theme()}`);
    });
  }

  toggleDarkMode() {
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }

  changeTotalAmount(event: Event){
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber)
  }

  filterProducts(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value.toLowerCase();
    this.filterName.set(newFilterName);
  }
}
