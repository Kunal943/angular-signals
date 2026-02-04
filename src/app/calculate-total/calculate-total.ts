import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-calculate-total',
  standalone: false,
  templateUrl: './calculate-total.html',
  styleUrl: './calculate-total.css',
})
export class CalculateTotal {

  price = 8;
  quantity = signal(100);
  totalAmount = computed(() => {return this.price * this.quantity()});

  changeTotalAmount(event: Event){
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber)
  }

}
