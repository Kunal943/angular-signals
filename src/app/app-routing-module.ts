import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateTotal } from './calculate-total/calculate-total';
import { SearchProducts } from './search-products/search-products';
import { Theme } from './theme/theme';
import { SignalInputProducts } from './signal-input-products/signal-input-products';
import { productsResolver } from './products.resolver';

const routes: Routes = [
  { path: 'calculate-total', component: CalculateTotal },
  { path: 'search-products', component: SearchProducts },
  { path: 'theme', component: Theme },
  { path: 'signal-input-products', component: SignalInputProducts, resolve: { products: productsResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
