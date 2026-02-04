import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from './product';
import { App } from './app';

export const productsResolver: ResolveFn<Product[]> = (route, state) => {
  const appComponent = inject(App);
  return appComponent.allProducts;
};
