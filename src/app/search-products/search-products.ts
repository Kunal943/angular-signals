import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-search-products',
  standalone: false,
  templateUrl: './search-products.html',
  styleUrl: './search-products.css',
})
export class SearchProducts {
  
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


  filterProducts(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value.toLowerCase();
    this.filterName.set(newFilterName);
  }
  
}
