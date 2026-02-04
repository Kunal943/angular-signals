import { Component, computed, input, signal, inject } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signal-input-products',
  standalone: false,
  templateUrl: './signal-input-products.html',
  styleUrl: './signal-input-products.css',
})
export class SignalInputProducts {
  private route = inject(ActivatedRoute);
  
  products = input<Product[]>(this.route.snapshot.data['products'] || []);

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
